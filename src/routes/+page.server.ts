import { comparePasswords, createToken } from "$lib/auth"
import db from "$lib/prisma"
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types"

export const load = async(event) => {
    if (event.cookies.get("token") && event.cookies.get("username") && event.cookies.get("userId")) {
        throw redirect(303, "/dashboard")
    }
}

export const actions = {
    login: async(event) => {
        const data = await event.request.formData()
        const username = data.get("username") as string
        const password = data.get("password") as string

        try {
            const user = await db.user.findUnique({
                where: {
                    name: username
                },
                select: {
                    id: true,
                    name: true,
                    password: true,
                }
            })

            if (user) {
                if (await comparePasswords(password, user.password)) {
                    const token = createToken(user)

                    event.cookies.set("token", token, {
                        httpOnly: true,
                        path: "/",
                        maxAge: 60 * 60 * 24,
                    })

                    event.cookies.set("username", user.name, {
                        httpOnly: false,
                        path: "/",
                        maxAge: 60 * 60 * 24,
                    })

                    event.cookies.set("userId", user.id, {
                        httpOnly: false,
                        path: "/",
                        maxAge: 60 * 60 * 24,
                    })

                    return {
                        success: true,
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                        },
                    }
                } else {
                    return {
                        success: false,
                        error: true,
                        message: "Invalid password",
                    }
                }
            } else {
                return {
                    success: false,
                    error: true,
                    message: "Invalid username",
                }
            }
        } catch (error) {
            return {
                success: false,
                error: true,
                message: "Invalid username or password",
            }
        }
    }
} satisfies Actions