<script lang="ts">
    import { createEventDispatcher } from "svelte"

    export let showModal: boolean
    let dialog: HTMLDialogElement
    const dispath = createEventDispatcher()

    $: showModal, toggleModal()

    const toggleModal = () => {
        if (dialog && showModal) {
            dialog.showModal()
        }
    }

    const closeModal = () => {
        dispath("close")
        dialog.close()
    }
</script>

<dialog 
    bind:this={dialog}
    on:click|self={() => closeModal()}
    on:keydown={(e) => {if (e.key === "Escape") closeModal()}}
>
    <div
        class="dialog-content"
        on:click|self={(e) => e.stopPropagation()}
        on:keydown={(e) => e.stopPropagation()}
    >
        <slot name="header" class="dialog-header" />
        <slot name="body" class="dialog-body" />
        <div class="dialog-footer">
            <button class="button" on:click={() => closeModal()}>Close</button>
        </div>
    </div>
</dialog>

<style lang="scss">
    @import "src/assets/scss/variables.scss";

    dialog {
        padding: $padding-extreme;

        background: $background-primary;

        border-radius: $border-radius-large;
        border: none;
        box-shadow: $box-shadow-extreme;

        animation: popUp $transition-duration forwards;

        .dialog-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: $gap-large;

            .dialog-footer {
                width: 100%;
                display: flex;
                justify-content: flex-end;

                padding-top: $padding-large;

                border-top: 1px solid $grey-6;
            }
        }
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(1px);
    }

    @keyframes popUp {
        0% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    @-webkit-keyframes popUp {
        0% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
</style>