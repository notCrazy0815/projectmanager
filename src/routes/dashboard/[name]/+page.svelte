<svelte:head>
    <title>ProjectManager - { data.name }</title>
</svelte:head>

<script lang="ts">
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
    <h2>{ data.name }</h2>
    <p>{ description }</p>
</div>
{#if tasks.length === 0}
    <p>No tasks</p>
{/if}
<div class="project-overview">
    {#await project}
        <div></div>
    {:then project}
        <div class="undone-tasks">
            <div 
                class="in-progress-tasks" 
                style="width: {tasks.filter((task) => task.status === "undone" || task.status === "in_progress").length / tasks.length * 100}%"
            >
                <div 
                    class="done-tasks"
                    style="width: {tasks.filter((task) => task.status === "done").length / tasks.length * 100}%"
                ></div>
            </div>
        </div>
    {:catch error}
        <div></div>
    {/await}
</div>
<div class="task-wrapper">
    {#await project}
        <p>Loading tasks</p>
    {:then project}
        {#each tasks as task}
            <TaskCard task={task} />
        {/each}
    {:catch error}
        <p>Something went wrong</p>
    {/await}
</div>

<style lang="scss">
    @import "src/assets/scss/variables";
    @import "src/assets/scss/base";

    .project-header {
        display: flex;
        flex-direction: column;
        gap: 0;

        h2 {
            margin-bottom: 0;
        }
    }

    .project-overview {
        width: 100%;
        height: $font-size-medium;

        border-radius: $border-radius-large;

        background-color: $background-primary;
        margin-bottom: $margin-large;

        .undone-tasks {
            width: 100%;
            height: 100%;

            border-radius: $border-radius-large;

            background-color: $error;

            .in-progress-tasks {
                width: 0%;
                height: 100%;

                border-radius: $border-radius-large;

                background-color: $warning;

                .done-tasks {
                    width: 0%;
                    height: 100%;

                    border-radius: $border-radius-large;

                    background-color: $success;
                }
            }
        }
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