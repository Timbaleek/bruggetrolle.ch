<script>
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import Titlebar from "$lib/Titlebar.svelte";

    import ArticleList from "$lib/ArticleList.svelte";

    //import all images from $lib/assets/about
    import laraPB from "$lib/assets/about/laraPB.jpg";
    import melaniePB from "$lib/assets/about/melaniePB2.jpg";
    import timPB from "$lib/assets/about/timPB.jpg";
    import jessicaPB from "$lib/assets/about/jessicaPB2.jpg";
    import kallePB from "$lib/assets/about/kallePB.jpg";
    import jaraPB from "$lib/assets/about/jaraPB.jpg";
    import kevinPB from "$lib/assets/about/kevinPB.jpg";
    import ProfileList from "$lib/ProfileList.svelte";

    let vorstand = [
        {
            title: "Lara Eggert",
            subtitle: "Präsidentin, Organisation",
            image: laraPB,
            description:
                "Theater ist für mich nicht nur ein Hobby, sondern mein Lebenselixier - es hat mich zu der Person gemacht, die ich heute bin: kreativ, pink und immer ein bisschen over the top. Ich denke laut, lache noch lauter und werde wahrscheinlich mal an einem Lachflash sterben. Ich bin die, die im Chaos Pirouetten dreht, Glitzer streut und trotzdem zwischen Requisitenwirrwarr und Bühnenmagie nie den Überblick verliert - höchstens mal das Skript.",
            date: "Seit März 2025",
        },
        {
            title: "Melanie Dobler",
            subtitle: "Finanzielles, Tickets",
            image: melaniePB,
            description:
                "Ich kann besser Text auswendig lernen als formulieren und ich spreche am liebsten mit anderen, wenn es in einem Skript steht. Ausserdem ist mein Lieblingsdino der Ankylosaurier, nur so nebenbei.",
            date: "Seit März 2025",
        },

        {
            title: "Tim Appel",
            subtitle: "Kreatives, Design, Programmierung",
            image: timPB,
            description:
                "Ich spiele seit meiner Kindheit Theater und liebe es, Geschichten zu erfinden. Wenn ich auf der Bühne stehe, fühle ich mich, als hätte ich das Leben meines Charakters erlebt. Ich mag es, auf der Bühne auf das Publikum zu reagieren und Interaktion zu schaffen.",
            date: "Seit März 2025",
        },
        {
            title: "Jessica Engel",
            subtitle: "Aktuarin, Bühnenbild, Kostüme",
            image: jessicaPB,
            description:
                "Ich bin schon lange vom Theater begeistert und liebe es, Geschichten auf der Bühne zum Leben zu erwecken. Ich habe schon für meine Maturaarbeit ein Theaterstück geschrieben und verwirklicht, mich mit der Technik, dem Bühnenbild und den Kostümen beschäftigt und bin selbst auf der Bühne gestanden. ",
            date: "Seit Juli 2025",
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

    let schauspielerFS2026 = [
        {
            title: "Tim Appel",
            image: timPB,
        },
        {
            title: "Melanie Dobler",
            image: melaniePB,
        },
        {
            title: "Lara Eggert",
            image: laraPB,
        },
        {
            title: "Jessica Engel",
            image: jessicaPB,
        },
        {
            title: "Kevin Sales",
            image: kevinPB,
        },
        {
            title: "Jara Umbricht",
            image: jaraPB,
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

        <ArticleList items={vorstand}></ArticleList>
    </div>
    <div class="container">
        <h2 class="title is-3">Schauspieler Frühling 2026</h2>

        <ProfileList items={schauspielerFS2026}></ProfileList>
    </div>
</div>

<style>
</style>
