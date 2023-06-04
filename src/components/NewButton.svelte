<script lang="ts">
    import { createEventDispatcher } from "svelte"
    const dispath = createEventDispatcher()
</script>

<button class="button button-primary" on:click={() => dispath('trigger')}>
    <img src="/img/icons/edit.svg" alt="edit">
    New
</button>

<style lang="scss">
    @import 'src/assets/scss/variables';

    button {
        display: flex;
        align-items: center;
        gap: $gap-small;
        padding-left: $padding-small * 2.4;

        img {
            height: $font-size-medium * 1.2;
            margin-top: 2px;
        }
    }
</style>