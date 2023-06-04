<svelte:head>
    <title>ProjectManager - { data.project?.name }</title>
</svelte:head>

<script lang="ts">
	import AddTaskButton from "../../../components/AddTaskButton.svelte";
	import Modal from "../../../components/Modal.svelte";
    import ProjectOverview from "../../../components/ProjectOverview.svelte";
    import TaskCard from "../../../components/TaskCard.svelte"
	import type { PageData } from "./$types";

    export let data: PageData
    let showCreateTaskModal: boolean = false

    const toggleModal = () => {
        showCreateTaskModal = !showCreateTaskModal
    }

    const calcTasks = (status: string) => {
        const tasks = data.project?.tasks.filter((task) => task.status === status).length
        if (tasks) return tasks
        return 0
    }

    const totalTasks = () => {
        if (data.project?.tasks) return data.project?.tasks.length
        return 0
    }

    const getTasks = () => {
        if (data.project?.tasks) return data.project?.tasks
        return []
    }
</script>

<Modal showModal={showCreateTaskModal} on:close={toggleModal}>
    <div slot="header" class="modal-header">
        <h2>Add task</h2>
    </div>
    <div slot="body" class="modal-body">
        <form
            method="POST"
            action="?/addtask"
        >
            <input 
                type="text"
                class="input"
                placeholder="Task name"
                name="taskname"
                required
            />
            <button type="submit" class="button button-primary">Create</button>
        </form>
    </div>
</Modal>

<div class="project-header">
    <div class="project-header-title">
        <h2>{ data.project?.name }</h2>
        <AddTaskButton on:trigger={() => toggleModal()} />
    </div>
    <p>{ data.project?.description }</p>
</div>

<div class="project-overview-container">
    <ProjectOverview 
        done={calcTasks("done")}
        inProgress={calcTasks("in_progress")}
        undone={calcTasks("undone")}
        total={totalTasks()}
    />
</div>

<div class="task-wrapper">
    {#if totalTasks() === 0}
        <p class="no-task-text">No tasks yet. Create one by clicking the button above.</p>
    {:else}
        {#each getTasks() as task}
            <TaskCard 
                task={task}
            />
        {/each}
    {/if}
</div>

<style lang="scss">
    @import "src/assets/scss/variables";

    .modal-header {
        h2 {
            text-align: center;
            margin-bottom: 0;
            margin-top: $margin-medium
        }
    }

    .modal-body {
        width: 100%;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: $gap-medium;
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