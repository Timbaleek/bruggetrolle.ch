<script lang="ts">
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import MailingListForm from "$lib/MailingListForm.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import { expoIn } from "svelte/easing";
</script>

<BaseWrapper>
    <h1 class="title is-1">Kontakt</h1>
    <p class="subtitle is-3">
        Hier kannst Du uns kontaktieren, wenn du Fragen hast oder mehr über uns
        erfahren möchtest.
    </p>
    <div class="content">
        Bei Anfragen, zögere nicht, uns eine E-Mail zu schreiben:
        <MailToVorstand />.

        <MailingListForm></MailingListForm>

        Oder schreib' uns auf
        <span class="icon-text">
            <span class="icon has-text-link">
                <i class="fas fa-camera-retro"></i>
            </span>
            <span>
                <a href="https://www.instagram.com/bruggetrolle/">Instagram</a>
            </span>
        </span>. TODO add instagram qr code
        <img src="static/instagram-qr.png" alt="Instagram QR Code" />
    </div>

    <div class="content"></div>
</BaseWrapper>

<style>
</style>
