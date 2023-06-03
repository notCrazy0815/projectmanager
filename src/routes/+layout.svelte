<div class="content-wrapper">
    <nav class="navbar">
        <a href="/">
            <h3>ProjectManager</h3></a>
        <div class="links">
            <!-- <a href="/dashboard" class="small-text">Dashboard</a> -->
        </div>
    </nav>
    <div class="content">
        <slot></slot>
    </div>
    <footer class="footer">
        <p class="tiny-text">© 2023 <a class="tiny-text" href="https://github.com/notCrazy0815">notCrazy0815</a></p>
    </footer>
</div>

<style lang="scss" global>
    @import 'src/assets/scss/variables';

    :global(*) {
        font-family: $font-family;
    }

    :global(body) {
        margin: 0px !important;
        padding: 0;

        background-color: $background-secondary;
    }

    :global(h1) {
        font-size: $font-size-extreme;
        line-height: 1;
        color: $font-primary;
    }

    :global(h2) {
        font-size: $font-size-large;
        line-height: 1;
        color: $font-primary;
    }

    :global(h3) {
        font-size: $font-size-medium;
        line-height: 1;
        color: $font-primary;
    }

    :global(p) {
        font-size: $font-size-medium;
        line-height: 1.5;
        color: $font-secondary;
    }

    :global(a) {
        text-decoration: none;
        color: $font-primary;
        font-size: $font-size-medium;
    }

    :global(.small-text) {
        font-size: $font-size-small;
        line-height: 1;
        color: $font-tertiary;
    }

    :global(.tiny-text) {
        font-size: $font-size-tiny;
        line-height: 1;
        color: $font-tertiary;
    }

    :global(.error-text) {
        font-size: $font-size-small;
        line-height: 1;
        color: $error;
    }

    :global(.button) {
        padding: $padding-small $padding-extreme;
        border-radius: $border-radius-small;
        background-color: $secondary;
        color: $font-primary-dark;
        cursor: pointer;
        transition: all $transition-duration ease-in-out;
        box-shadow: $box-shadow-extreme;
        font-size: $font-size-medium;
        border: none;

        &:hover {
            background-color: darken($secondary, 10%);
        }
    }

    :global(.button-primary) {
        background-color: $primary;

        &:hover {
            background-color: darken($primary, 10%);
        }
    }

    :global(.content-wrapper) {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        :global(.navbar) {
            display: flex;
            justify-content: space-between;

            width: $max-content-width-percentage;
            max-width: $max-content-width;

            :global(.links) {
            display: flex;
            align-items: center;
            }
        }

        :global(.content) {
            width: $max-content-width-percentage;
            max-width: $max-content-width;
            height: 100%;
        
            padding-left: $padding-large;
            padding-right: $padding-large;
        }

        :global(.footer) {
            width: $max-content-width-percentage;
            max-width: $max-content-width;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: $gap-large;

            padding: $padding-medium;

            margin-top: $margin-large;
        }
    }

    @media screen and (max-width: $breakpoint-large) {
        :global(html) {
            font-size: 80% !important;
        }
    }

    @media screen and (max-width: $breakpoint-desktop) {
        :global(html) {
            font-size: 70% !important;
        }
    }

    @media screen and (max-width: $breakpoint-mobile) {
        :global(html) {
            font-size: 60% !important;
        }
    }
</style>