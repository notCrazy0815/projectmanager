<div class="content-wrapper">
    <nav class="navbar">
        <a href="/">
            <h3>ProjectManager</h3></a>
        <div class="links">
            <a href="dashboard">Dashboard</a>
        </div>
    </nav>
    <div class="content">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    @import 'src/assets/scss/variables.scss';
    @import 'src/assets/scss/base.scss';
</style>