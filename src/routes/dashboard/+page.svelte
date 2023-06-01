<svelte:head>
    <title>ProjectManager - Dashboard</title>
</svelte:head>

<script lang="ts">
	import ProjectCard from "../../components/ProjectCard.svelte";

    let projects: Project[] = [
        {
            name: "Infoprojekt",
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
            name: "GRW Präsentation",
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
            name: "Svelte Crash Course",
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
            name: "Haushalt",
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
            name: "Geographie Recherche",
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
            name: "Deutsch Aufsatz",
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
            <a href="dashboard/{project.name}">
                <ProjectCard {project} />
            </a>
        {/each}
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';
    @import 'src/assets/scss/base';

    .content-body {
        .project-overview {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: $gap-medium;
        }
    }
</style>