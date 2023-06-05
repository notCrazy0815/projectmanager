<script lang="ts">
	export let done: number;
	export let inProgress: number;
	export let undone: number;
	export let total: number;

	let doneElement: HTMLDivElement;
	let inProgressElement: HTMLDivElement;
	let undoneElement: HTMLDivElement;

	let doneElementWidth: number = 0;
	let inProgressElementWidth: number = 0;
	let undoneElementWidth: number = 0;

	$: if (total !== 0) {
		doneElementWidth = (done / total) * 100;
		inProgressElementWidth = (inProgress / total) * 100;
		undoneElementWidth = (undone / total) * 100;
	} else {
		doneElementWidth = 0;
		inProgressElementWidth = 0;
		undoneElementWidth = 0;
	}
</script>

<div class="project-overview">
	<div class="done-tasks" style="width: {doneElementWidth}%" bind:this={doneElement} />
	<div
		class="in-progress-tasks"
		style="width: calc({inProgressElementWidth}% + 1.5rem)"
		bind:this={inProgressElement}
	/>
	<div
		class="undone-tasks"
		style="width: calc({undoneElementWidth}% + 1.5rem)"
		bind:this={undoneElement}
	/>
</div>

<style lang="scss">
	@import 'src/assets/scss/variables';

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
			margin-left: calc(-1 * $border-radius-large);
		}

		.in-progress-tasks {
			background-color: $warning;
			margin-left: calc(-1 * $border-radius-large);
			z-index: 1;
		}

		.done-tasks {
			background-color: $success;
			z-index: 2;
		}
	}
</style>
