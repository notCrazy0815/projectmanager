<svelte:head>
    <title>ProjectManager - { data.name }</title>
</svelte:head>

<script lang="ts">
	import AddTaskButton from "../../../components/AddTaskButton.svelte";
import ProjectOverview from "../../../components/ProjectOverview.svelte";
    import TaskCard from "../../../components/TaskCard.svelte"
    import { onMount } from "svelte"

    export let data: { name: string }
    let project: Promise<Project>
    let tasks: Task[] = []
    let description: string = ""

    onMount(async () => {
        project = await getProject().then((res) => res).catch((err) => err)
    })

    async function getProject() {
        const res = await fetch(`/api/projects/${data.name}`)
        let resData = await res.json()
        project = resData.project as Promise<Project>
        tasks = resData.project.tasks as Array<Task>
        description = resData.project.description as string

        return project
    }
</script>

<div class="project-header">
    <div class="project-header-title">
        <h2>{ data.name }</h2>
        <AddTaskButton />
    </div>
    <p>{ description }</p>
</div>
{#await project}
    <div></div>
{:then project}
    <div class="project-overview-container">
        <ProjectOverview 
            done={tasks.filter((task) => task.status === "done").length}
            inProgress={tasks.filter((task) => task.status === "in_progress").length}
            undone={tasks.filter((task) => task.status === "undone").length}
            total={tasks.length}
        />
    </div>
{:catch error}
    <div></div>
{/await}
<div class="task-wrapper">
    {#await project}
        <p>Loading tasks</p>
    {:then project}
        {#if tasks.length === 0}
            <p class="no-task-text">No tasks yet, create on by clicking on the "Add" button above</p>
        {:else}
            {#each tasks as task}
                <TaskCard task={task} />
            {/each}
        {/if}
    {:catch error}
        <p>Something went wrong</p>
    {/await}
</div>

<style lang="scss">
    @import "src/assets/scss/variables";

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