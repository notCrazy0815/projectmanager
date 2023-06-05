import db from '$lib/prisma';

export async function POST(event) {
	const { id, userId } = await event.request.json();

	const project = await db.project.findUnique({
		where: {
			id
		},
		include: {
			tasks: true
		}
	});

	if (project) {
		if (project?.userId !== userId) {
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

		for (const task of project.tasks) {
			await db.task.delete({
				where: {
					id: task.id
				}
			});
		}

		await db.project.delete({
			where: {
				id
			}
		});

		return new Response(
			JSON.stringify({
				success: true,
				error: false,
				message: 'Project deleted'
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
			message: 'Project not found'
		}),
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	);
}
