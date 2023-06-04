<svelte:head>
    <title>ProjectManager - Settings</title>
</svelte:head>

<div class="settings-content-wrapper">
    <div class="settings-header">
        <h2>Settings</h2>
    </div>
    <div class="settings-content">
        <form method="POST" action="?/logout">
            <button type="submit" class="button button-error">Logout</button>
        </form>
        <form method="POST" action="?/delete">
            <button type="submit" class="button">Delete Account</button>
        </form>
    </div>
</div>

<style lang="scss">
    @import "src/assets/scss/variables.scss";

    .settings-content {
        display: flex;
        gap: $gap-medium;
    }
</style>