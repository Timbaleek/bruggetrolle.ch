<script lang="ts">
    import Kvu_plakat from "$lib/assets/current/KeinerVonUns_Plakat18.jpg";
    import BaseWrapper from "$lib/BaseWrapper.svelte";
</script>

<BaseWrapper>
    <h1 class="title is-1">
        <span class="has-text-red">K</span>einer von uns.
    </h1>

    <p class="subtitle is-3">Unsere aktuelle Produktion.</p>

    <div class="columns is-variable is-8">
        <div class="column pb-0">
            <a
                href="https://eventfrog.ch/de/p/gruppen/theaterauffuehrung-keiner-von-uns-7412872755480139929.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                <figure class="image is-3by4">
                    <img src={Kvu_plakat} alt="Plakat von 'Keiner von uns'" />
                </figure>
            </a>
        </div>

        <div class="column is-two-thirds pt-0">
            <div class="field my-4">
                <div class="control">
                    <a
                        class="button is-primary is-flex-mobile"
                        href="https://eventfrog.ch/de/p/gruppen/theaterauffuehrung-keiner-von-uns-7412872755480139929.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>Hier Tickets reservieren</strong>
                    </a>
                </div>
            </div>
            <p>
                Unsere aktuelle Produktion ist unser selbstgeschriebenes
                Theaterstück <strong
                    ><span class="has-text-red">K</span>einer von uns</strong
                >.
            </p>
            <br />
            <p>
                Eine Fremde kommt in ein scheinbar ruhiges Dorf – und plötzlich
                gerät das Gleichgewicht ins Wanken. Ihre Anwesenheit löst Fragen
                aus, bringt Konflikte an die Oberfläche und stellt Beziehungen
                auf die Probe. Was zunächst wie Neugier wirkt, wird schnell zu
                Misstrauen, Gerüchten und gegenseitigen Verdächtigungen. Während
                die Dorfgemeinschaft versucht, Kontrolle zu behalten, zeigt
                sich: Hinter der Ordnung liegen Geheimnisse, die lange verborgen
                waren. Die Fremde wird zum Mittelpunkt eines Geschehens, das
                niemand mehr stoppen kann.
            </p>
            <br />
            <p>
                Während der Pause haben wir einen Kuchen- und Getränkeverkauf.
                Wir finanzieren unser Theater mit Kollekten und wir freuen uns
                über Ihren Beitrag nach dem Theater.
                <br />
            </p>
            <p>
                Die Aufführungen finden am <strong
                    >21., 22., 28., 29. März 2026</strong
                >
                in der Turnhalle Au in Lauffohr nahe Brugg statt. Samstags beginnen
                wir um <strong>18:30 Uhr</strong>, sonntags um
                <strong>16:00 Uhr</strong>. Der Eintritt ist frei, wir bedanken
                uns aber für Spenden in unserer Kollekte, um weitere
                Produktionen zu ermöglichen. Wir freuen uns darauf, euch bei
                unseren Vorstellungen begrüßen zu dürfen!
            </p>
        </div>
    </div></BaseWrapper
>

<style>
    .has-text-red {
        color: #f63d08;
    }
</style>
