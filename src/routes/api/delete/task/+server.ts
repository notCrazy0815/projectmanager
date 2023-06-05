import db from '$lib/prisma';

export async function POST(event) {
	const { id, projectId, userId } = await event.request.json();

	const project = await db.project.findUnique({
		where: {
			id: projectId
		}
	});

	if (project?.userId !== userId) {
		return new Response(
			JSON.stringify({
				success: false,
				error: true,
				message: 'You are not authorized to delete this task'
			}),
			{
				headers: {
					'content-type': 'application/json'
				}
			}
		);
	}

	if (project) {
		const task = await db.task.findUnique({
			where: {
				id
			}
		});

		if (task) {
			await db.task.delete({
				where: {
					id
				}
			});
		}

		return new Response(
			JSON.stringify({
				success: true,
				error: false,
				message: 'Task deleted'
			}),
			{
				headers: {
					'content-type': 'application/json'
				}
			}
		);
	}

	return new Response(
		JSON.stringify({
			success: false,
			error: true,
			message: 'Task not found'
		}),
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	);
}
