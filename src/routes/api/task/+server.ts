import { userLoggedIn } from '$lib/auth.js';
import db from '$lib/prisma.js';
import { redirect } from '@sveltejs/kit';

export async function GET({ request, cookies }) {
	if (!(await userLoggedIn(cookies))) {
		throw redirect(303, '/');
	}

	const { userId, projectId } = await request.json();

	const project = await db.project.findUnique({
		where: {
			id: projectId
		},
		include: {
			tasks: true
		}
	});

	if (project) {
		if (project.userId !== userId) {
			return new Response(
				JSON.stringify({
					success: false,
					error: true,
					message: 'You are not the owner of this project'
				}),
				{
					headers: {
						'content-type': 'application/json'
					}
				}
			);
		}

		const tasks = project.tasks;
		return new Response(JSON.stringify(tasks), {
			headers: {
				'content-type': 'application/json'
			}
		});
	}
}
