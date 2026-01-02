<script lang="ts">
    import Kvu_blank from "$lib/assets/current/KeinerVonUns_blank.jpg";
    import Kvu_plakat from "$lib/assets/current/KeinerVonUns_Plakat13.jpg";
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
                Unsere aktuelle Produktion ist <strong>Keiner von uns</strong>,
                ein selbstgeschriebenes Theaterstück, das von den geheimen
                Verstrickungen in einer Kleinstadt handelt und wie diese
                Geheimnisse aufgedeckt werden, als eine Fremde ins Dorf kommt.
            </p>
            <br />
            <p>
                Die Aufführungen finden am <strong
                    >21., 22., 28., 29. März 2026</strong
                > in der Turnhalle Au in Lauffohr nahe Brugg statt. Der Eintrit ist
                frei, wir freuen uns aber über Spenden in unserer Kollekte, um weitere
                Produktionen zu ermöglichen. Wir freuen darauf, euch bei unseren
                Vorstellungen begrüßen zu dürfen!
            </p>
        </div>
    </div></BaseWrapper
>

<style>
    .has-text-red {
        color: #f63d08;
    }
</style>
