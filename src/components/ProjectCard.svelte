<script lang="ts">
    export let project: Project;
</script>

<div class="project-card">
    <div class="project-card-header">
        <h3 class="project-card-title">{project.name}</h3>
        <p class="project-card-description">{project.description}</p>
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables.scss';
    @import 'src/assets/scss/base.scss';

    .project-card {
        display: flex;
        flex-direction: column;
        gap: $gap-medium;

        cursor: pointer;
        
        padding: $padding-medium;

        background-color: $background-primary;
        border-radius: $border-radius-medium;

        box-shadow: $box-shadow-medium;
    }
</style>