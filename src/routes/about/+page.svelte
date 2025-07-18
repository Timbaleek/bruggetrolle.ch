<script>
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import Titlebar from "$lib/Titlebar.svelte";

    import ArticleList from "$lib/ArticleList.svelte";

    //import all images from $lib/assets/about
    import laraPB from "$lib/assets/about/laraPB.jpeg";
    import melaniePB from "$lib/assets/about/melaniePB.jpeg";
    import timPB from "$lib/assets/about/timPB.jpeg";
    import kallePB from "$lib/assets/about/kallePB.jpeg";

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
                "Ich kann besser Text auswendig lernen als formulieren und ich spreche am liebsten mit anderen, wenn es in einem Skrip steht. Ausserdem ist mein Lieblingsdino der Ankylosaurier, nur so nebenbei.",
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

        {
            title: "Kalle Laitinen",
            subtitle: "Location, Technik",
            image: kallePB,
            description:
                "Ich stand zwar auch schon auf der Bühne, entfalte mich aber lieber hinter den Kulissen. Es fasziniert mich, das letzte Bisschen aus der Technik herauszukitzeln und die Schauspieler in das perfekte Licht zu stellen.",
            date: "Seit März 2025",
        },
    ];
</script>

<BaseWrapper>
    <h1 class="title is-1">Über uns</h1>

    <p class="subtitle is-3">
        Hier erfährst du mehr über den Verein und die aktuellen
        Vorstandsmitglieder.
    </p>
</BaseWrapper>

<div class="section">
    <div class="container">
        <h2 class="title is-3">Vereinsgründung – unsere Geschichte</h2>
        <p class="content">
            Am 4. Mai 2025 wurde der Theaterverein Bruggetrolle offiziell
            gegründet, doch unsere gemeinsame Reise auf und hinter der Bühne
            begann schon viele Jahre zuvor. Bereits 2017 standen die
            Gründungsmitglieder Jessica, Tim und Lara, im Rahmen des
            Kantitheaters der Kantonsschule Baden, zum ersten Mal gemeinsam auf
            der Bühne. Die Leidenschaft fürs Theater trugen wir schon lange in
            uns, doch in vier intensiven Jahren am Kantitheater wurde daraus
            mehr: Eine starke Gemeinschaft, eine kreative Heimat und der Wunsch,
            eigene Projekte auf die Beine zu stellen. 2020 war es dann so weit:
            Unter eigener Regie inszenierten wir Shakespeares Sommernachtstraum.
            Alles war bereit, doch leider wurde die Premiere am 13. März, nur
            zwei Stunden vor Beginn, pandemiebedingt abgesagt. Ein bitterer
            Moment, doch trotz Studiums- und Berufseinstieg liessen wir das
            Theater nie los. 2024 kehrten wir zurück auf die Bühne, mit unserem
            selbstgeschriebenen Stück «Ich bin für dich da!», welches wir an der
            FHNW in Brugg-Windisch aufführten. Diese Erfahrung hat uns gezeigt:
            Wir wollen weitermachen. Gemeinsam. Und langfristig. So gründeten
            wir im Frühling 2025 der Theaterverein Bruggetrolle, mit dem Ziel,
            weiterhin eigene Projekte zu realisieren, unsere Leidenschaft zu
            teilen und andere mit dem Theaterfieber anzustecken.
        </p>
    </div>
</div>

<div class="section">
    <div class="container">
        <h2 class="title is-3">Vorstandsmitglieder</h2>

        <ArticleList items={people}></ArticleList>
    </div>
</div>

<style>
</style>
