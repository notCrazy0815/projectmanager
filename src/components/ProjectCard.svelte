<script lang="ts">
	import ProjectOverview from "./ProjectOverview.svelte";

    export let project: Project;
</script>

<div class="project-card">
    <div class="project-overview-container">
        <ProjectOverview 
            done={project.tasks.filter((task) => task.status === "done").length}
            inProgress={project.tasks.filter((task) => task.status === "in_progress").length}
            undone={project.tasks.filter((task) => task.status === "undone").length}
            total={project.tasks.length}
        />
    </div>
    <div class="project-card-header">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables.scss';

    .project-card {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: $gap-medium;

        cursor: pointer;
        
        padding: 0;

        background-color: $background-primary;
        border-radius: $border-radius-medium;

        overflow: hidden;

        box-shadow: $box-shadow-medium;

        .project-overview-container {
            height: $font-size-medium * 0.25;
        }

        .project-card-header {
            display: flex;
            flex-direction: column;
            gap: $gap-small;

            padding: $padding-large;
            padding-top: $padding-medium;

            h3 {
                margin: 0;
            }

            p {
                margin: 0;
            }
        }
    }
</style>