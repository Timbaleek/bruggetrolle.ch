<script lang="ts">
    import Titlebar from "$lib/Titlebar.svelte";
    import { expoIn } from "svelte/easing";

    const addToListButton = document.getElementById(
        "exportBaddToMailingListButton",
    ) as HTMLButtonElement;

    //addToListButton.addEventListener("click", function (e) {});

    /*function addToMailingList() {
        const inputs =
            document.querySelectorAll<HTMLInputElement>(".name-input");
        const names = Array.from(inputs)
            .map((input) => input.value.trim())
            .filter((name) => name.length > 0);

        if (names.length === 0) {
            alert("Please enter at least one name.");
            return;
        }

        const csvContent =
            "data:text/csv;charset=utf-8," +
            names.map((name) => `"${name}"`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "names.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }*/
</script>

<Titlebar></Titlebar>

<h1 class="title">Kontakt</h1>

<p class="subtitle">
    Hier kannst du uns kontaktieren, wenn du Fragen hast oder mehr über uns
    erfahren möchtest.
</p>

<div class="content">
    <p class="block">
        Bei Anfragen, zögere nicht, uns eine E-Mail zu schreiben: <a
            href="mailto:vorstand@bruggetrolle.ch">vorstand@bruggetrolle.ch</a
        >
    </p>

    <p class="block">
        Oder schreib' uns auf <a href="TODO instagram">Instagram</a>
    </p>

    <div class="block">
        Wenn du für Aufführungen und Events informiert werden willst, schreibe
        dich hier in die Mailingliste ein.

        <div class="field is-horizontal">
            <div class="field-body">
                <div class="field">
                    <label class="label">Vorname</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="Text input"
                        />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Nachname</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="Text input"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">E-Mail</label>
            <div class="control has-icons-left">
                <input class="input" type="email" placeholder="E-Mail" />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-primary" id="addToMailingListButton">
                    Absenden
                </button>
            </div>
        </div>
    </div>
</div>

<style>
</style>
