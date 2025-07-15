<script>
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import Titlebar from "$lib/Titlebar.svelte";

    import ArticleList from "$lib/ArticleList.svelte";

    let people = [
        {
            title: "Max Mustermann",
            subtitle: "Schauspieler",
            image: "path/to/image.jpg",
            description:
                "Max Mustermann ist ein erfahrener Schauspieler und Gründungsmitglied des Vereins.",
            date: "Seit 2020 aktiv",
        },
        {
            title: "Erika Musterfrau",
            subtitle: "Regisseurin",
            image: "path/to/image.jpg",
            description:
                "Erika Musterfrau ist eine talentierte Regisseurin und Mitglied des Vereins.",
            date: "Seit 2020 aktiv",
        },
    ];
</script>

<BaseWrapper>
    <h1 class="title">Über uns</h1>

    <p class="subtitle">
        Hier erfährst du über den Verein und die aktuellen Mitglieder.
    </p>

    <ArticleList items={people}></ArticleList>
</BaseWrapper>

<style>
</style>
