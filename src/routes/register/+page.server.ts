import { createToken, hashPassword } from '$lib/auth.js'
import { setUserCookies, userCookiesExist } from '$lib/cookies'
import db from '$lib/prisma.js'
import { redirect, type Actions } from '@sveltejs/kit'

export const load = async({ cookies }) => {
    if (userCookiesExist(cookies)) throw redirect(303, "/dashboard")
}

export const actions = {
    register: async({ request, cookies }) => {
        const data = await request.formData()
        const username = data.get("username") as string
        const password = data.get("password") as string

        try {
            const user = await db.user.create({
                data: {
                    name: username,
                    password: await hashPassword(password)
                },
                select: {
                    id: true,
                    name: true,
                }
            })

            const token = createToken(user)

            setUserCookies(cookies, token, user.name, user.id)

            return {
                success: true,
                error: false,
                message: "User created",
            }
        } catch (e) {
            return {
                success: false,
                error: true,
                message: "User already exists"
            }
        }
    }
} satisfies Actions