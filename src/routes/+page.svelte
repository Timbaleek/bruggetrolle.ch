<script>
    import MailingListForm from "$lib/MailingListForm.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import HighlightArticle from "$lib/HighlightArticle.svelte";

    import IbfddCast2 from "$lib/assets/title/IbfddCast2.jpg";

    import Einladung1 from "$lib/assets/title/einladungsflyerNeuKlein.jpg";
    import Ensemble2026 from "$lib/assets/title/ensemble2026.jpg";
    import ErsteProbe from "$lib/assets/title/ersteProbe.jpeg";
    import ArticleList from "../lib/ArticleList.svelte";
    import Ibfdd_plakat from "$lib/assets/highlights/Ibfdd_plakat.jpg";

    const items = [
        {
            title: "Unser Ensemble steht fest!",
            subtitle:
                "Diese 6 Schauspieler*innen werden bei der Produktion im Frühling 2026 dabei sein.",
            date: "23. September 2025",
            description:
                "Nach einigen Schnupperproben, wo wir auch einigie neue Mitglieder begrüssen durften, stehen nun die Schauspieler*innen für unsere nächste Produktion fest. Wir haben schon angefangen, das Stück zu schreiben und erarbeiten Rollen und ihre Geheimnisse. Nach den Herbstferien geht es weiter mit Proben, die immernoch ein Stück Impro beinhalten werden, sich aber immer mehr der Ausarbeitung des Stücks widmen werden. Wenn Du uns erst jetzt entdeckt hast, kannst Du immernoch ungebunden vorbeikommen.",
            image: Ensemble2026,
        },
        {
            title: "Erste Schnupperprobe",
            subtitle: "Kennenlernen und Improspiele",
            date: "15. August 2025",
            description:
                "Auf der Bühne in der Turnhalle in Lauffrohr (Brugg) fand am Freitagabend unsere erste Schnupperprobe statt. Wir durften drei neue Mitglieder, Leon, Kevin und Jara begrüssen. Lara hat ein Körper und Spracheinwärmen geleitet, Tim und Melanie die darauffolgenden Improspiele - darunter 'grosses Kino', 'Geschichte von drei Leichen' und ein Text, der in verschiedenen Emotionen interpretiert werden konnte. Es wurden schöne Geschichten gesponnen, gespielt und gelacht. Wir laden dich gerne für unsere nächste Schnupperprobe ein. Komm doch vorbei, lerne uns kennen und mach bei den Improspielen mit. Wir freuen uns auf dich!",
            image: ErsteProbe,
        },
        {
            title: "Neue Mitglieder",
            subtitle: "Wir suchen neue Mitglieder!",
            date: "Juli 2025",
            description:
                "Wir sind der neu gegründete Theaterverein Bruggetrolle - ein junges, motiviertes Team mit einem Altersdurchschnitt von etwa 25 Jahren. Bei uns sind alle ab 18 Jahren herzlich willkommen, egal ob mit Erfahrung oder zum ersten Mal auf der Bühne. Wir freuen uns auf neue Mitglieder, die mit uns proben, lachen und gemeinsam auf der Bühne stehen wollen. Haben wir dein Interesse geweckt? Dann melde dich an und komm ganz unverbindlich zu einer unserer Schnupperproben: Zur Anmeldung oder bei Fragen, melde dich bei: vorstand@bruggetrolle.ch",
            image: Einladung1,
        },
        {
            title: "Vereinsgründung",
            subtitle: "Der Verein ist gegründet!",
            date: "5. April 2025",
            description:
                "Wir haben uns als Theaterverein Bruggetrolle gegründet und freuen uns auf eine spannende Zeit mit vielen tollen Produktionen.",
            image: IbfddCast2,
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
            <img src={IbfddCast2} alt="Cover" />
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
    :root {
        .cover-text {
            font-family: "Chau Philomene One", sans-serif;
        }

        .divider {
            height: 3px;
        }
    }
</style>
