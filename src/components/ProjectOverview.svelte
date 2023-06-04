<script lang="ts">
    export let done: number
    export let inProgress: number
    export let undone: number
    export let total: number
</script>

<div class="project-overview">
    <div 
        class="done-tasks"
        style="width: {done / total * 100}%"
    ></div>
    <div 
        class="in-progress-tasks" 
        style="width: calc({inProgress / total * 100}% + 1.5rem)"
    ></div>
    <div 
        class="undone-tasks"
        style="width: calc({undone / total * 100}% + 1.5rem)"    
    ></div>
</div>

<style lang="scss">
    @import "src/assets/scss/variables";

    .project-overview {
        display: flex;
        width: 100%;
        height: 100%;

        border-radius: $border-radius-large;

        overflow: hidden;

        background-color: $background-primary;
        margin-bottom: $margin-large;

        div {
            width: 0%;
            transition: width $transition-duration ease-in-out;
            height: 100%;
            border-top-right-radius: $border-radius-large;
            border-bottom-right-radius: $border-radius-large;
        }

        .undone-tasks {
            background-color: $error;
            margin-left: calc(-1 *  $border-radius-large);
        }

        .in-progress-tasks {
            background-color: $warning;
            margin-left: calc(-1 *  $border-radius-large);
            z-index: 1;
        }

        .done-tasks {
            background-color: $success;
            z-index: 2;
        }
    }
</style>