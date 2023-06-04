<script lang="ts">
    export let settingsVisible: boolean = true;
</script>

<nav class="navbar">
    <a href="/">
        <p class="small-text">ProjectManager</p>
    </a>
    <div class="links">
        <!-- <a href="/dashboard" class="small-text">Dashboard</a> -->
        {#if settingsVisible}
            <a href="/settings">
                <img src="/img/icons/settings.svg" alt="Settings" />
            </a>
        {/if}
    </div>
</nav>

<style lang="scss">
    @import 'src/assets/scss/variables';

    .navbar {
        display: flex;
        justify-content: space-between;
        width: $max-content-width-percentage;
        max-width: $max-content-width;

        p {
            margin: $margin-large;
            margin-left: 0;
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
                width: $font-size-medium * 1.3;
                height: $font-size-medium * 1.3;
                filter: $font-tertiary-filter;
                margin-top: $margin-small;
            }
        }
    }
</style>