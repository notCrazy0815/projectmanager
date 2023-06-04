import { userLoggedIn } from '$lib/auth.js'
import { getUserCookies } from '$lib/cookies.js'
import db from '$lib/prisma.js'
import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies }) => {
    if (!await userLoggedIn(cookies)) {
        throw redirect(303, "/")
    }

    const { userId } = getUserCookies(cookies)

    const projects = await db.project.findMany({
        where: {
            userId: userId as string
        },
        include: {
            tasks: true
        }
    })

    return {
        projects
    }
}

export const actions = {
    createproject: async ({ request, cookies }) => {
        if (!await userLoggedIn(cookies)) {
            throw redirect(303, "/")
        }

        const data = await request.formData()
        const name = data.get("projectname") as string
        const description = data.get("projectdescription") as string

        const { userId } = getUserCookies(cookies)

        try {
            await db.project.create({
                data: {
                    name,
                    description,
                    userId: userId as string
                }
            })

            return {
                success: true,
                error: false,
                message: "Project created"
            }
        } catch (e) {
            return {
                success: false,
                error: true,
                message: "Error creating project"
            }
        }
    }
}