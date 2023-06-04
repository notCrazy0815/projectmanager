<svelte:head>
    <title>ProjectManager - Dashboard</title>
</svelte:head>

<script lang="ts">
	import NewButton from "../../components/NewButton.svelte";
    import ProjectCard from "../../components/ProjectCard.svelte"

    let projects: Project[] = []
</script>

<div class="content-header">
    <h2>Dashboard</h2>
    <div class="content-actions">
        <NewButton />
    </div>
</div>
<div class="content-body">
    {#if projects.length === 0}
        <p>No projects yet. Create one by clicking the button above.</p>
    {:else}
    <div class="project-overview">
        {#each projects as project}
            <a href="dashboard/{project.name}">
                <ProjectCard {project} />
            </a>
        {/each}
    </div>
    {/if}
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';

    .content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content-body {
        p {
            margin-top: $margin-large;
            text-align: center;
        }

        .project-overview {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-auto-rows: 1fr;
            gap: $gap-large;
        }

        @media screen and (max-width: $breakpoint-mobile) {
            .project-overview {
                grid-template-columns: 1fr;
            }
        }
    }
</style>