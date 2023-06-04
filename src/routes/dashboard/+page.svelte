<svelte:head>
    <title>ProjectManager - Dashboard</title>
</svelte:head>

<script lang="ts">
    import Modal from "../../components/Modal.svelte"
    import NewButton from "../../components/NewButton.svelte"
    import ProjectCard from "../../components/ProjectCard.svelte"
    import type { PageData } from "./$types"

    export let data: PageData

    let showCreateProjectModal: boolean = false

    const toggleModal = () => {
        showCreateProjectModal = !showCreateProjectModal
    }

    const deleteProject = async (id: string) => {
        const res = await fetch(`api/delete/project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: data.userId,
                id
            })
        })

        if (res.status === 200) {
            const newProjects = data.projects.filter(project => project.id !== id)
            data.projects = newProjects
        }
    }
</script>

<Modal showModal={showCreateProjectModal} on:close={toggleModal}>
    <div slot="header" class="modal-header">
        <h2>Create a new project</h2>
    </div>
    <div slot="body" class="modal-body">
        <form
            method="POST"
            action="?/createproject"
        >
            <input 
                type="text"
                class="input"
                placeholder="Project name"
                name="projectname"
                required
            />
            <input 
                type="text"
                class="input"
                placeholder="Project description"
                name="projectdescription"
                required
            />
            <button type="submit" class="button button-primary">Create</button>
        </form>
    </div>
</Modal>

<div class="content-header">
    <h2>Dashboard</h2>
    <div class="content-actions">
        <NewButton on:trigger={() => toggleModal()} />
    </div>
</div>
<div class="content-body">
    {#if data.projects.length === 0}
        <p>No projects yet. Create one by clicking the button above.</p>
    {:else}
    <div class="project-overview">
        {#each data.projects as project}
            <ProjectCard {project} on:delete={(event) => deleteProject(event.detail.id)} />
        {/each}
    </div>
    {/if}
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';

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