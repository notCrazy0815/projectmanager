import { createToken, hashPassword } from '$lib/auth.js'
import db from '$lib/prisma.js'

export const actions = {
    register: async(event) => {
        const data = await event.request.formData()
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

            const token = createToken(user);

            return {
                success: true,
                token,
                user: {
                    id: user.id,
                    name: user.name,
                }
            }
        } catch (e) {
            return {
                success: false,
                error: e
            }
        }
    }
}