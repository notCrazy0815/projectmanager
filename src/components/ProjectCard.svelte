<script lang="ts">
    export let project: Project;
</script>

<div class="project-card">
    <div class="project-card__header">
        <h3 class="project-card__title">{project.name}</h3>
        <p class="project-card__description">{project.description}</p>
    </div>
    <div class="project-card__body">
        <div class="project-card__tasks">
            {#each project.tasks as task}
                <div class="project-card-task">
                    <span class="project-card__task-name">{task.name}</span>
                    <span class="project-card__task-status">{task.status}</span>
                </div>
            {/each}
        </div>
    </div>
</div>