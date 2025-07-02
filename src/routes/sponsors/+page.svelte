<script>
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
</script>

<BaseWrapper>
    <h1 class="title">Gönner und Sponsoren</h1>

    <div class="content">
        <p class="block">
            Tausend Dank an unsere Gönner und Sponsoren, Sie erlauben es uns
            Vorführungen aufzuführen, Probeorte zu mieten und Requisiten zu
            besorgen.
        </p>

        <h2 class="subtitle">Gönner werden</h2>
        <p class="block">
            Als Gönner bezahlen sie regelmässig einen Betrag ein, um uns zu
            unterstützen. Sie werden unter Gönnern aufgelistet und erhalten,
            wenn Sie es wünschen, Informationen zu kommenden Aufführungen und
            Events des Vereins. Füllen Sie dafür bitte das <span
                class="icon-text"
            >
                <span class="icon has-text-link">
                    <i class="fa-solid fa-download"></i>
                </span>
                <span
                    ><a href="link/to/your/download/file" download
                        >Gönnerformular</a
                    ></span
                >
            </span>

            aus und senden Sie es an unsere E-Mail Adresse <MailToVorstand />
        </p>

        <div class="block">
            <h2 class="subtitle">
                Hier findest du alle Gönner und Sponsoren der Bruggetrolle
            </h2>
        </div>
    </div>
</BaseWrapper>

<style>
</style>
