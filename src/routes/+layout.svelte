<script>
	import NavBar from "../components/NavBar.svelte";
</script>
<div class="content-wrapper">
    <NavBar />
    <div class="content">
        <slot></slot>
    </div>
    <!-- <footer class="footer">
        <p class="tiny-text">© 2023 <a class="tiny-text" href="https://github.com/notCrazy0815">notCrazy0815</a></p>
    </footer> -->
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

    :global(.button-icon) {
        display: flex;
        align-items: center;
        justify-content: center;

        width: $font-size-large;
        height: $font-size-large;
        padding: $padding-small;

        background-color: transparent;
        box-shadow: none;

        &:hover {
            background-color: darken($grey-7, 10%);
        }

        :global(img) {
            width: $font-size-medium * 1.3;
            height: $font-size-medium * 1.3;
        }
    }

    :global(.button-error) {
        background-color: $error;

        &:hover {
            background-color: darken($error, 10%);
        }
    }

    :global(.input) {
        padding: $padding-medium;
        font-size: $font-size-medium;
        border-radius: $border-radius-small;
        background-color: $background-secondary;
        border: 1px solid $background-primary;
        color: $font-primary;
    }

    :global(.content-wrapper) {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        :global(.content) {
            width: $max-content-width-percentage;
            max-width: $max-content-width;
            height: 100%;
        
            padding-left: $padding-large;
            padding-right: $padding-large;
        }

        // :global(.footer) {
        //     width: $max-content-width-percentage;
        //     max-width: $max-content-width;

        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     gap: $gap-large;

        //     padding: $padding-medium;

        //     margin-top: $margin-large;
        // }
    }

    :global(.bg) {
        width: 100vw;
        height: 100%;

        position: absolute;
        left: 0;
        bottom: 0;

        z-index: -1;

        background-image: url('img/bg/wave.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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