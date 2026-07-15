<script lang="ts">
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    //import MailingListForm from "$lib/MailingListForm.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import InstaQR from "$lib/assets/contact/bruggetrolle_qr.png";
    import gemeindefinder from "$lib/assets/contact/gemeindefinde-logo-icon.webp";
    import bruggWappen from "$lib/assets/contact/CHE_Brugg_COA.svg.webp";
</script>

<BaseWrapper>
    <h1 class="title is-1">Kontakt</h1>
    <p class="subtitle is-3">
        Hier kannst Du uns kontaktieren, wenn du Fragen hast oder mehr über uns
        erfahren möchtest.
    </p>
    <div class="content">
        <div class="columns is-variable is-8">
            <div class="column has-text-centered is-flex is-flex-direction-column is-align-items-center">
                Bei Anfragen, zögere nicht, uns eine E-Mail zu schreiben:
                <MailToVorstand />.

                <!-- <MailingListForm></MailingListForm> -->
            </div>
            <div class="column has-text-centered is-flex is-flex-direction-column is-align-items-center">
                Oder schreib' uns auf
                <span class="icon-text">
                    <span class="icon has-text-link">
                        <i class="fas fa-camera-retro"></i>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/bruggetrolle/"
                            >Instagram</a
                        >
                    </span>
                </span>.
                <div class="mt-4">
                    <figure class="qr-fixed">
                        <img src={InstaQR} alt="Instagram QR Code" />
                    </figure>
                </div>
            </div>
        </div>
        <div>
            <p class="has-text-centered is-flex is-align-items-center">Wir sind ein eingetragener Verein der Stadt Brugg: </p>
            <div class="columns is-variable is-8">
                <div class="column has-text-centered is-flex is-flex-direction-column is-align-items-center">
                    <figure class="image is-128x128  mb-3">
                        <a href="https://gemeinde-schweiz.ch/kanton-aargau/brugg/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={gemeindefinder} alt="Gemeindefinder Logo" />
                        </a>
                    </figure>
                </div>
                <div class="column has-text-centered is-flex is-flex-direction-column is-align-items-center">
                    <figure class="image is-128x128  mb-3">
                        <a href="https://www.brugg.ch/themen-a-z/vereine/details.html/33/association/123"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={bruggWappen} alt="Stadt Brugg Logo" />
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</BaseWrapper>

<style>
</style>
