import { comparePasswords, createToken, userAlreadyLoggedIn } from "$lib/auth"
import db from "$lib/prisma"
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types"
import { setUserCookies } from "$lib/cookies";

export const load = async({ cookies }) => {
    if (await userAlreadyLoggedIn(cookies)) throw redirect(303, "/dashboard")
}

export const actions = {
    login: async({ request, cookies }) => {
        const data = await request.formData()
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

                    setUserCookies(cookies, token, user.name, user.id)

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