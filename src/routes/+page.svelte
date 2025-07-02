<script>
    import MailingListForm from "$lib/MailingListForm.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
</script>

<section class="hero is-primary is-large">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
        <Titlebar></Titlebar>
    </div>

    <div class="hero-body">
        <div class="container has-text-centered">
            <p class="title">Grosses Bild</p>
            <p class="subtitle">Subtitle</p>
        </div>
    </div>
</section>

<div class="section">
    <div class="container">
        <p class="title"></p>
        <div class="Block">
            <h1>News</h1>
            <MailingListForm></MailingListForm>
            <div>Neue Mitglieder Flyertext</div>
            <div>Vereinsgründung</div>
            <div>Alte Produktion</div>
        </div>
    </div>
</div>
