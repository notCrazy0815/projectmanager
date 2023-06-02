<svelte:head>
    <title>ProjectManager</title>
</svelte:head>

<div class="start-page-wrapper">
    <div class="start-page-content">
        <div class="start-page-title">
            <h1>Make project managment
                <span>easier</span>
            </h1>
        </div>
        <div class="start-page-links">
            <a href="dashboard" class="button button-primary">Start</a>
            <a href="/" class="button">View more</a>
        </div>
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';

    .start-page-wrapper {
        width: 100%;
        height: 90%;

        display: flex;
        align-items: center;
        justify-content: center;

        .start-page-content {
            display: flex;
            flex-direction: column;
            gap: $gap-large;

            justify-content: center;

            .start-page-title {
                h1 {
                    text-align: center;

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
            }
        }
    }
</style>