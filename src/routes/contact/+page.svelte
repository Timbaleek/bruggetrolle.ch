<script lang="ts">
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import { expoIn } from "svelte/easing";

    // function addToMailingList() {
    //     console.log("Adding to mailing list:", firstname, lastname, email);
    //     const inputs =
    //         document.querySelectorAll<HTMLInputElement>(".mailinglist-input");
    //     const names = Array.from(inputs)
    //         .map((input) => input.value.trim())
    //         .filter((name) => name.length > 0);

    //     if (names.length <= 2) {
    //         alert("Please enter all information.");
    //         return;
    //     }

    //     const csvContent =
    //         "data:text/csv;charset=utf-8," +
    //         names.map((name) => `"${name}"`).join("\n");
    //     const encodedUri = encodeURI(csvContent);
    // }
</script>

<BaseWrapper>
    <h1 class="title">Kontakt</h1>
    <p class="subtitle">
        Hier kannst Du uns kontaktieren, wenn Du Fragen hast oder mehr über uns
        erfahren möchtest.
    </p>
    <div class="content">
        Bei Anfragen, zögere nicht, uns eine E-Mail zu schreiben:
        <MailToVorstand />. Oder schreib' uns auf
        <span class="icon-text">
            <span class="icon has-text-link">
                <i class="fas fa-camera-retro"></i>
            </span>
            <span>
                <a href="TODO instagram">Instagram</a>
            </span>
        </span>.
    </div>

    <div class="content"></div>
</BaseWrapper>

<style>
</style>
