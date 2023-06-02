<svelte:head>
    <title>ProjectManager - Dashboard</title>
</svelte:head>

<script lang="ts">
	import ProjectCard from "../../components/ProjectCard.svelte"
    import { onMount } from "svelte"

    let projects: Project[] = []

    onMount(async () => {
        const res = await fetch("/api/projects")
        projects = await res.json()
    });
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

        @media screen and (max-width: $breakpoint-mobile) {
            .project-overview {
                grid-template-columns: 1fr;
            }
        }
    }
</style>