<script>
    import Logo from "./LogoSVG.svelte";
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <Logo />
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="/about"> Über Uns </a>
            <a class="navbar-item" href="/highlights"> Highlights </a>
            <a class="navbar-item" href="/sponsors"> Gönner & Sponsoren </a>
            <a class="navbar-item" href="/contact"> Kontakt </a>
        </div>

        <div class="navbar-end"></div>
    </div>
</nav>

<style>
</style>
