<script lang="ts">
	import { onMount } from 'svelte';
	import AddTaskButton from '../../../components/AddTaskButton.svelte';
	import Modal from '../../../components/Modal.svelte';
	import ProjectOverview from '../../../components/ProjectOverview.svelte';
	import TaskCard from '../../../components/TaskCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let showCreateTaskModal: boolean = false;

	let doneTasks = 0;
	let inProgressTasks = 0;
	let undoneTasks = 0;
	let totalTasks = 0;

	let tasks: Task[] = [];

	const toggleModal = () => {
		showCreateTaskModal = !showCreateTaskModal;
	};

	const calcTasks = (status: string) => {
		const tasks = data.project?.tasks.filter((task) => task.status === status).length;
		if (tasks) return tasks;
		return 0;
	};

	const getTotalTasks = () => {
		if (data.project?.tasks) return data.project?.tasks.length;
		return 0;
	};

	const updateTaskArray = () => {
		if (data.project?.tasks) tasks = data.project?.tasks;
		else tasks = [];
	};

	onMount(() => {
		updateTaskArray();
		updateTasks();
	});

	const updateTasks = () => {
		doneTasks = calcTasks('done');
		inProgressTasks = calcTasks('in_progress');
		undoneTasks = calcTasks('undone');
		totalTasks = getTotalTasks();
	};

	const deleteTask = async (id: string) => {
		const res = await fetch('/api/delete/task', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId: data.userId,
				projectId: data.project?.id,
				id
			})
		});

		if (res.status === 200) {
			if (data.project) {
				const newTasks = data.project.tasks.filter((task) => task.id !== id);
				data.project.tasks = newTasks;
				updateTaskArray();
				updateTasks();
			}
		}
	};

	const updateTaskStatus = async (task: Task) => {
		if (task.status == "done") task.status = "undone";
		else if (task.status == "undone") task.status = "in_progress";
		else if (task.status == "in_progress") task.status = "done";

		const res = await fetch('/api/task', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId: data.userId,
				projectId: data.project?.id,
				task
			})
		});

		if (res.status === 200) {
			const { success } = await res.json();
			if (success) {
				updateTasks();
				updateTaskArray();
			}
		}
	};
</script>

<svelte:head>
	<title>ProjectManager - {data.project?.name}</title>
</svelte:head>

<Modal showModal={showCreateTaskModal} on:close={toggleModal}>
	<div slot="header" class="modal-header">
		<h2>Add task</h2>
	</div>
	<div slot="body" class="modal-body">
		<form method="POST" action="?/addtask" id="addtask">
			<input type="text" class="input" placeholder="Task name" name="taskname" required />
			<div class="status-select-container">
				<p>Status</p>
				<select class="status-select" form="addtask" name="status">
					<option value="undone">Undone</option>
					<option value="in_progress">In progress</option>
					<option value="done">Done</option>
				</select>
			</div>
			<button type="submit" class="button button-primary">Create</button>
		</form>
	</div>
</Modal>

<div class="project-header">
	<div class="project-header-title">
		<h2>{data.project?.name}</h2>
		<AddTaskButton on:trigger={() => toggleModal()} />
	</div>
	<p>{data.project?.description}</p>
</div>

<div class="project-overview-container">
	<ProjectOverview
		done={doneTasks}
		inProgress={inProgressTasks}
		undone={undoneTasks}
		total={totalTasks}
	/>
</div>

<div class="task-wrapper">
	{#if totalTasks === 0}
		<p class="no-task-text">No tasks yet. Create one by clicking the button above.</p>
	{:else}
		{#each tasks as task}
			<TaskCard
				{task}
				on:delete={(event) => deleteTask(event.detail.id)} 
				on:status={(event) => updateTaskStatus(event.detail)}
			/>
		{/each}
	{/if}
</div>

<style lang="scss">
	@import 'src/assets/scss/variables';

	.modal-header {
		h2 {
			text-align: center;
			margin-bottom: 0;
			margin-top: $margin-medium;
		}
	}

	.modal-body {
		width: 100%;

		form {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: $gap-medium;

			.status-select-container {
				display: flex;
				gap: $gap-medium;
				align-items: center;
				padding-top: $padding-small;
				padding-bottom: $padding-small;

				p {
					margin: 0;
				}

				select {
					width: 100%;

					padding: $padding-small;

					border: none;
					border-radius: $border-radius-small;

					color: $font-primary;
					background-color: $background-secondary;
					font-size: $font-size-medium;

					cursor: pointer;
				}
			}
		}
	}

	.project-overview-container {
		height: $font-size-medium;
		margin-bottom: $gap-medium;
	}

	.project-header {
		display: flex;
		flex-direction: column;
		gap: 0;

		.project-header-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: $gap-small;

			h2 {
				margin-bottom: 0;
				margin-top: $margin-large;
			}
		}
	}

	.no-task-text {
		text-align: center;
		margin-top: $margin-large;
	}

	.task-wrapper {
		display: flex;
		flex-direction: column;
		gap: $gap-medium;

		p {
			text-align: center;
		}
	}
</style>
