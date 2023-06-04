<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import ProjectOverview from "./ProjectOverview.svelte"

    const dispatch = createEventDispatcher()

    export let project: Project
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
    <div class="project-card-content">
        <a href="dashboard/{project.id}">
            <div
                class="project-card-header"
            >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </a>
        <div class="project-card-actions">
            <button
                class="button button-icon"
                on:click={() => dispatch("delete", { id: project.id })}
            >
                <img src="img/icons/delete.svg" alt="delete">
            </button>
        </div>
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

        .project-card-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                width: 100%;
            }

            .project-card-header {
                min-width: 100%;

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

            .project-card-actions {
                padding-right: $padding-large;

                .button {
                    img {
                        filter: $font-tertiary-filter;
                        transition: filter $transition-duration ease-in-out;
                    }

                    &:hover {
                        img {
                            filter: $error-filter;
                        }
                    }
                }
            }
        }
    }
</style>