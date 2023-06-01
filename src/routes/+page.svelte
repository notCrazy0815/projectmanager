<svelte:head>
    <title>ProjectManager</title>
</svelte:head>

<div class="start-page-wrapper">
    <div class="start-page-content">
        <div class="start-page-title">
            <h2>Make project managment easier with ProjectManager</h2>
        </div>
        <div class="start-page-links">
            <a href="dashboard" class="button button-primary">Start</a>
            <a href="/" class="button">View more</a>
        </div>
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables';
    @import 'src/assets/scss/base';

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
                h2 {
                    text-align: center;
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