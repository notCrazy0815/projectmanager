<svelte:head>
    <title>ProjectManager - Dashboard</title>
</svelte:head>

<script lang="ts">
	import ProjectCard from "../../components/ProjectCard.svelte";

    let projects: Project[] = [
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            tasks: [
                {
                    name: "Task 1",
                    status: "done"
                },
                {
                    name: "Task 2",
                    status: "in progress"
                },
                {
                    name: "Task 3",
                    status: "in progress"
                },
                {
                    name: "Task 4",
                    status: "undone"
                }
            ]
        },
        {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            tasks: [
                {
                    name: "Task 1",
                    status: "done"
                },
                {
                    name: "Task 2",
                    status: "in progress"
                },
                {
                    name: "Task 3",
                    status: "in progress"
                },
                {
                    name: "Task 4",
                    status: "undone"
                }
            ]
        },
        {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            tasks: [
                {
                    name: "Task 1",
                    status: "done"
                },
                {
                    name: "Task 2",
                    status: "in progress"
                },
                {
                    name: "Task 3",
                    status: "in progress"
                },
                {
                    name: "Task 4",
                    status: "undone"
                }
            ]
        }
    ];
</script>

<div class="content-header">
    <h2>Dashboard</h2>
</div>
<div class="content-body">
    <div class="project-overview">
        {#each projects as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/dashboard.scss';
</style>