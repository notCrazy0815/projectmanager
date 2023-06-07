<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let task: Task;
</script>

<div class="task-card">
	<p class="task-card-title">{task.name}</p>
	<div class="task-card-actions">
		<button class="button button-icon" on:click={() => dispatch('delete', task)}>
			<img src="/img/icons/delete.svg" alt="Delete" class="delete-icon" />
		</button>
		<button class="task-card-status {task.status}" title={task.status} on:click={() => dispatch('status', task)} />
	</div>
</div>

<style lang="scss">
	@import 'src/assets/scss/variables';
	.task-card {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: $padding-medium;

		background-color: $background-primary;
		border-radius: $border-radius-medium;
		box-shadow: $box-shadow-medium;

		.task-card-actions {
			display: flex;
			align-items: center;

			.button {
				img {
					filter: $font-tertiary-filter;
					transition: filter $transition-duration ease-in-out;
				}

				&:hover {
					.delete-icon {
						filter: $error-filter;
					}
				}
			}

			.task-card-status {
				width: $font-size-medium;
				height: $font-size-medium;

				margin-left: $margin-medium * 0.8;

				border-radius: $border-radius-large;
				cursor: pointer;

				border: none;
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
	}
</style>
