<script>
    import MailingListForm from "$lib/MailingListForm.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import HighlightArticle from "$lib/HighlightArticle.svelte";

    import IbfddCast from "$lib/assets/title/IbfddCast.jpg";

    import Einladung from "$lib/assets/title/einladungsflyer.jpg";
    import ArticleList from "../lib/ArticleList.svelte";
    import Ibfdd_plakat from "$lib/assets/highlights/Ibfdd_plakat.jpg";

    const items = [
        {
            title: "Neue Mitglieder",
            subtitle: "Wir suchen neue Mitglieder!",
            date: "Juli 2025",
            description:
                "Wir sind der neu gegründete Theaterverein Bruggetrolle - ein junges, motiviertes Team mit einem Altersdurchschnitt von etwa 25 Jahren. Bei uns sind alle ab 18 Jahren herzlich willkommen, egal ob mit Erfahrung oder zum ersten Mal auf der Bühne. Wir freuen uns auf neue Mitglieder, die mit uns proben, lachen und gemeinsam auf der Bühne stehen wollen. Haben wir dein Interesse geweckt? Dann melde dich an und komm ganz unverbindlich zu einer unserer Schnupperproben: Zur Anmeldung oder bei Fragen, melde dich bei: vorstand@bruggetrolle.ch",
            image: Einladung,
        },
        {
            title: "Vereinsgründung",
            subtitle: "Der Verein ist gegründet!",
            date: "17. März 2025",
            description:
                "Wir haben uns als Theaterverein Bruggetrolle gegründet und freuen uns auf eine spannende Zeit mit vielen tollen Produktionen.",
            image: IbfddCast,
        },
        {
            title: "Ich bin für dich da.",
            subtitle: "Die erste Produktion des Vereins.",
            date: "15.-23. Juni 2024",
            description:
                "Unsere erste Produktion als Verein. Wir haben uns sehr gefreut, wieder auf der Bühne zu stehen. Aufgeführt wurde 'Ich bin für dich da.', ein selbstgeschriebenes Stück, das die Beziehung zwischen Geschwistern und ihren Schutzengeln thematisiert.",
            image: Ibfdd_plakat,
        },
    ];

    let firstItem = items.slice(0, 1);
    let otherItems = items.slice(1);
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
                <h1 class="cover-text is-size-1 has-text-white">
                    Wir sind BRUGGETROLLE
                </h1>
            </div>
        </div>
    </section>
</div>

<div class="section pb-0">
    <div class="container">
        <h1 class="title is-3">News</h1>
        <ArticleList items={firstItem}></ArticleList>
    </div>
</div>
<div class="section py-0">
    <div class="container">
        <h1 class="title is-3">Mailingliste</h1>
        <p class="subtitle is-5">
            Hier kannst du dich für unsere Mailingliste eintragen, um über
            Aufführungen und Events informiert zu werden.
        </p>

        <MailingListForm></MailingListForm>
        <hr class="divider" />
    </div>
</div>
<div class="section pt-0">
    <div class="container">
        <ArticleList items={otherItems}></ArticleList>
    </div>
</div>

<style>
    :global {
        .cover-text {
            font-family: "Chau Philomene One", sans-serif;
        }

        .divider {
            height: 3px;
        }
    }
</style>
