<svelte:head>
    <title>ProjectManager - Register</title>
</svelte:head>

<script lang="ts">
	import type { ActionData } from "./$types";

    let username: string = ""
    let password: string = ""

    export let form: ActionData = {
        success: false,
        error: false,
        message: ""
    }
</script>

<div class="register-content">
    <form 
        method="POST"
        action="?/register"
    >
        <h2>Register</h2>
        <input 
            type="text"
            bind:value={username}
            placeholder="Username"
            name="username"
            min="6"
            max="25"
            required
        />
        <input
            type="password"
            bind:value={password}
            placeholder="Password"
            name="password"
            min="6"
            max="40"
            required
        />
        {#if form?.error}
            <p class="error-text">{form?.message}</p>
        {/if}
        <button type="submit" class="button button-primary">Register</button>
        <p class="tiny-text">
            Already have an account? <a class="tiny-text" href="/">Login</a>
        </p>
    </form>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';

    .register-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        form {
            display: flex;
            flex-direction: column;
            gap: $gap-large;

            background-color: $background-primary;
            padding: $padding-extreme * 1.5;
            border-radius: $border-radius-large;

            box-shadow: $box-shadow-extreme;

            h2 {
                text-align: center;
                margin: 0;
            }

            p {
                margin: 0;
            }

            a {
                color: $primary;
            }

            input {
                padding: $padding-medium;
                font-size: $font-size-medium;
                border-radius: $border-radius-small;
                background-color: $background-secondary;
                border: 1px solid $background-primary;
                color: $font-primary;
            }
        }
    }
</style>