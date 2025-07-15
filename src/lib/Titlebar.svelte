<script>
    import Logo from "./LogoSVG_white.svelte";
</script>

<nav class="navbar is-primary" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <Logo />
        </a>
    </div>

    <div id="mainNavbar" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item has-text-light" href="/about"> Über Uns </a>
            <a class="navbar-item has-text-light" href="/highlights">
                Highlights
            </a>
            <a class="navbar-item has-text-light" href="/sponsors">
                Gönner & Sponsoren
            </a>
            <a class="navbar-item has-text-light" href="/contact"> Kontakt </a>
        </div>

        <div class="navbar-end"></div>
    </div>
</nav>

<style lang="scss">
    .navbar-item {
        font-family: "Chau Philomene One", sans-serif;
        font-weight: bold;
    }
</style>
