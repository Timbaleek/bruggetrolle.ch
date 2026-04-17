<script lang="ts">
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import MailingListForm from "$lib/MailingListForm.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import InstaQR from "$lib/assets/contact/bruggetrolle_qr.png";
    import { expoIn } from "svelte/easing";
</script>

<BaseWrapper>
    <h1 class="title is-1">Kontakt</h1>
    <p class="subtitle is-3">
        Hier kannst Du uns kontaktieren, wenn du Fragen hast oder mehr über uns
        erfahren möchtest.
    </p>
    <div class="content">
        <div class="columns is-variable is-8">
            <div class="column">
                Bei Anfragen, zögere nicht, uns eine E-Mail zu schreiben:
                <MailToVorstand />.

                <!-- <MailingListForm></MailingListForm> -->
            </div>
            <div class="column">
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
                <div class="mt-4 is-flex is-justify-content-left">
                    <figure class="qr-fixed">
                        <img src={InstaQR} alt="Instagram QR Code" />
                    </figure>
                </div>
            </div>
        </div>
    </div></BaseWrapper
>

<style>
</style>
