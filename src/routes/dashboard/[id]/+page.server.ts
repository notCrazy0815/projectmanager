import { userLoggedIn } from '$lib/auth.js'
import { redirect } from '@sveltejs/kit'
import db from '$lib/prisma.js'
import { getUserCookies } from '$lib/cookies.js'

export const load = async ({ cookies, params }) => {
    if (!await userLoggedIn(cookies)) {
        throw redirect(303, "/")
    }

    const projectId = params.id
    const { userId } = getUserCookies(cookies)

    const project = await db.project.findUnique({
        where: {
            id: projectId
        },
        include: {
            tasks: true
        }
    })

    if (project?.userId !== userId) {
        throw redirect(303, "/")
    }

    return {
        project
    }
}

export const actions = {
    addtask: async ({ params, cookies, request }) => {
        if (!await userLoggedIn(cookies)) {
            throw redirect(303, "/")
        }

        const projectId = params.id
        const { userId } = getUserCookies(cookies)

        const project = await db.project.findUnique({
            where: {
                id: projectId,
            }
        })

        if (project?.userId !== userId) {
            throw redirect(303, "/")
        }

        const data = await request.formData()
        const name = data.get("taskname") as string

        try {
            await db.task.create({
                data: {
                    name: name,
                    projectId: projectId
                }
            })

            return {
                success: true,
                error: false,
                message: "Task created successfully"
            }
        } catch (e) {
            return {
                success: false,
                error: true,
                message: "Couldnt create task"
            }
        }
    }
}