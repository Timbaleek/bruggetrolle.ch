<script>
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import Titlebar from "$lib/Titlebar.svelte";

    import ArticleList from "$lib/ArticleList.svelte";

    //import all images from $lib/assets/about
    import laraPB from "$lib/assets/about/laraPB.jpeg";
    import melaniePB from "$lib/assets/about/melaniePB.jpeg";
    import timPB from "$lib/assets/about/timPB.jpeg";

    let people = [
        {
            title: "Lara Eggert",
            subtitle: "Präsidentin, Organisation",
            image: laraPB,
            description:
                "Theater ist mein Ding, Pink mein Element und ich werde bestimmt mal an einem Lachflash sterben. Ich bin die, die Chaos tanzt, Glitzer streut, nie leise denkt und trotzdem nie das Ziel aus den Augen verliert - höchstens mal das Skript.",
            date: "Seit März 2025",
        },
        {
            title: "Melanie Dobler",
            subtitle: "Finanzielles, Tickets",
            image: melaniePB,
            description:
                "Ich kann besser Text uswendig lernen als formulieren und ich spreche am liebsten mit anderen, wenn es in einem Skrip steht. Ausserdem ist mein Lieblingsdino der Ankylosaurier, nur so nebenbei.",
            date: "Seit März 2025",
        },

        {
            title: "Tim Appel",
            subtitle: "Kreatives, Design, Programmierung",
            image: timPB,
            description:
                "Ich spiele seit meiner Kindheit Theater und liebe es, Geschichten zu erfinden. Wenn ich auf der Bühne stehe, fühle ich mich, als hätte ich das Leben meines Charakters erlebt.",
            date: "Seit März 2025",
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
