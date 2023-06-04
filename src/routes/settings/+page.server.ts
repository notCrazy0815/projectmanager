import { deleteUserCookies, getUserCookies } from '$lib/cookies.js'
import db from '$lib/prisma.js'
import { redirect, type Cookies } from '@sveltejs/kit'

export const actions = {
    logout: async({ cookies }: { cookies: Cookies }) => {
        deleteUserCookies(cookies)
        
        throw redirect(303, "/")
    },
    delete: async({ cookies }: { cookies: Cookies }) => {
        const { userId } = getUserCookies(cookies)
        deleteUserCookies(cookies)

        if (userId) {
            try {
                const projects = await db.project.findMany({
                    where: {
                        userId
                    },
                    select: {
                        id: true
                    }
                })

                for (const project of projects) {
                    await db.task.deleteMany({
                        where: {
                            projectId: project.id
                        }
                    })
                }

                await db.project.deleteMany({
                    where: {
                        userId
                    }
                })

                await db.user.delete({
                    where: {
                        id: userId
                    }
                })
            } catch (e) {
                throw redirect(303, "/")
            }
        }

        throw redirect(303, "/register")
    }
}