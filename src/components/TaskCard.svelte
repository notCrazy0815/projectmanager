<script lang="ts">
    export let task: Task;
</script>

<div class="task-card">
    <p class="task-card-title">{task.name}</p>
    <div class="task-card-status {task.status}" title="{task.status}"></div>
</div>

<style lang="scss">
    @import "src/assets/scss/variables";
    @import "src/assets/scss/base";

    .task-card {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: $padding-medium;

        background-color: $background-primary;
        border-radius: $border-radius-medium;
        box-shadow: $box-shadow-medium;

        .task-card-status {
            width: $font-size-medium;
            height: $font-size-medium;

            border-radius: $border-radius-large;
            cursor: pointer;
        }

        .task-card-status.done {
            background-color: $success;
        }

        .task-card-status.in_progress {
            background-color: $warning;
        }

        .task-card-status.undone {
            background-color: $error;
        }
    }
</style>