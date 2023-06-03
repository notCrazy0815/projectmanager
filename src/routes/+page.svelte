<svelte:head>
    <title>ProjectManager</title>
</svelte:head>

<script lang="ts">
    // export let data: { user: User }
    let username: string = ""
    let password: string = ""
</script>

<div class="start-page-wrapper">
    <div class="start-page-content">
        <div class="start-page-title">
            <h1>Make project managment
                <span>easier</span>
            </h1>
        </div>
        <div class="start-page-links">
            <form>
                <h2>Login</h2>
                <input type="text" bind:value={username} placeholder="Username" />
                <input type="password" bind:value={password} placeholder="Password" />
                <button type="submit" class="button button-primary">Login</button>
            </form>
        </div>
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';

    .start-page-wrapper {
        width: 100%;
        height: 90%;

        display: flex;
        justify-content: center;
        align-items: center;

        .start-page-content {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: $gap-large;

            @media screen and (max-width: $breakpoint-desktop) {
                flex-direction: column;
            }

            .start-page-title {
                h1 {
                    span {
                        background: linear-gradient(to right, $success, $warning, $error);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }

            .start-page-links {
                display: flex;
                gap: $gap-medium;
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
        }
    }
</style>