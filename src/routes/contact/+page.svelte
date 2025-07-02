<script lang="ts">
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import { expoIn } from "svelte/easing";

    const addToListButton = document.getElementById(
        "exportBaddToMailingListButton",
    ) as HTMLButtonElement;

    //addToListButton.addEventListener("click", function (e) {});

    function addToMailingList() {
        const inputs =
            document.querySelectorAll<HTMLInputElement>(".mailinglist-input");
        const names = Array.from(inputs)
            .map((input) => input.value.trim())
            .filter((name) => name.length > 0);

        if (names.length <= 2) {
            alert("Please enter all information.");
            return;
        }

        const csvContent =
            "data:text/csv;charset=utf-8," +
            names.map((name) => `"${name}"`).join("\n");
        const encodedUri = encodeURI(csvContent);

        // Save the CSV content to a file on the server using Node.js
        // This part is commented out because it requires server-side code
        // var fs = require("node:fs");

        // fs.writeFile(
        //     "form-tracking/formList.csv",
        //     csvContent,
        //     "utf8",
        //     function (err: any) {
        //         if (err) {
        //             console.log(
        //                 "Some error occured - file either not saved or corrupted file saved.",
        //             );
        //         } else {
        //             console.log("It's saved!");
        //         }
        //     },
        // );

        // Create a link to download the CSV file
        // const link = document.createElement("a");
        // link.setAttribute("href", encodedUri);
        // link.setAttribute("download", "names.csv");
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    }
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

    <div class="content">
        Wenn Du für Aufführungen und Events informiert werden willst, schreibe
        dich hier in die Mailingliste ein.
        <div class="form">
            <div class="field is-horizontal">
                <div class="field-body">
                    <div class="field">
                        <label class="label" for="firstname">Vorname</label>
                        <div class="control">
                            <input
                                class="input mailinglist-input"
                                type="text"
                                id="firstname"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="lastname">Nachname</label>
                        <div class="control">
                            <input
                                class="input mailinglist-input"
                                type="text"
                                id="lastname"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label" for="email">E-Mail</label>
                <div class="control has-icons-left">
                    <input
                        class="input mailinglist-input"
                        type="email"
                        placeholder="E-Mail"
                        id="email"
                    />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button
                        class="button is-primary"
                        id="addToCButton"
                        on:click={addToMailingList}
                    >
                        Absenden
                    </button>
                </div>
            </div>
        </div>
    </div>
</BaseWrapper>

<style>
</style>
