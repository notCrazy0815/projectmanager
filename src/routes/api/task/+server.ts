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

export async function POST({ request, cookies }) {
	if (!(await userLoggedIn(cookies))) {
		throw redirect(303, '/');
	}

	const { userId, projectId, task } = await request.json();

	const project = await db.project.findUnique({
		where: {
			id: projectId
		}
	});

	if (project) {
		if (project.userId !== userId) {
			return new Response(
				JSON.stringify({
					success: false,
					error: true,
					message: 'You are not the owner of this project',
					task: null
				}),
				{
					headers: {
						'content-type': 'application/json'
					}
				}
			);
		}

		const dbTask = await db.task.findUnique({
			where: {
				id: task.id
			}
		});

		if (dbTask) {
			await db.task.update({
				where: {
					id: task.id
				},
				data: {
					name: task.name,
					status: task.status
				}
			});

			return new Response(
				JSON.stringify({
					success: true,
					error: false,
					message: 'Task updated successfully',
					task: {
						id: task.id,
						name: task.name,
						status: task.status
					} as Task
				}),
				{
					headers: {
						'content-type': 'application/json'
					}
				}
			);
		}
	}

	return new Response(
		JSON.stringify({
			success: false,
			error: true,
			message: 'Task not found',
			task: null
		}),
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	);
}
