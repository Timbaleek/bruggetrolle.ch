<script>
    import MailingListForm from "$lib/MailingListForm.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import HighlightArticle from "$lib/HighlightArticle.svelte";

    import IbfddCast from "$lib/assets/title/IbfddCast.jpg";
</script>

<div class="tile">
    <section class="hero is-primary is-small">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <Titlebar></Titlebar>
        </div>

        <figure class="image is-fullwidth">
            <img src={IbfddCast} alt="Cover" />
        </figure>

        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="cover-text is-size-2 has-text-white">
                    Wir sind BRUGGETROLLE
                </h1>
            </div>
        </div>
    </section>
</div>

<div class="section">
    <div class="container">
        <h1 class="title">News</h1>
        <HighlightArticle
            title="Ich bin für dich da."
            subtitle="Die erste Produktion des
                Vereins."
            date="15.-23. Juni 2024"
            description="Unsere erste
                Produktion als Verein. Wir haben uns sehr gefreut, wieder auf
                der Bühne zu stehen. Aufgeführt wurde 'Ich bin für dich da.',
                ein selbstgeschriebenes Stück, das die Beziehung zwischen
                Geschwistern und ihren Schutzengeln thematisiert."
            image="/assets/highlights/Ibfdd_plakat.jpg"
        ></HighlightArticle>
    </div>
</div>
<div class="section">
    <div class="container">
        <h1 class="title">Mailingliste</h1>
        <p class="subtitle">
            Hier kannst du dich für unsere Mailingliste eintragen, um über
            Aufführungen und Events informiert zu werden.
        </p>

        <MailingListForm></MailingListForm>
    </div>
</div>
<div class="section">
    <div class="container">
        <div>Neue Mitglieder Flyertext</div>
        <div>Vereinsgründung</div>
        <div>Alte Produktion</div>
    </div>
</div>

<style>
    .cover-text {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
