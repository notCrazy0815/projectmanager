<script lang="ts">
    import { createEventDispatcher } from "svelte"
    const dispath = createEventDispatcher()
</script>

<button class="button button-primary" on:click={() => dispath('trigger')}>
    <img src="/img/icons/add.svg" alt="edit">
    Add
</button>

<style lang="scss">
    @import 'src/assets/scss/variables';

    button {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: $gap-small;
        
        padding-left: $padding-small * 2;
        margin-bottom: 0;
        margin-top: $margin-large;

        img {
            height: $font-size-medium * 1.2;
        }
    }
</style>