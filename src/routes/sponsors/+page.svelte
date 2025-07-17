<script>
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import DownloadLink from "$lib/DownloadLink.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
</script>

<BaseWrapper>
    <h1 class="title is-1">Gönner und Sponsoren</h1>
    <h2 class="subtitle is-3">
        Tausend Dank an unsere Gönner und Sponsoren, Sie erlauben es uns
        Vorführungen aufzuführen, Probeorte zu mieten und Requisiten zu
        besorgen.
    </h2>

    <div class="content">
        <p class="block"></p>

        <h2 class="subtitle is-3">Gönner werden</h2>
        <p class="block">
            Herzlichen Dank an unsere Gönner! Dank eurer Unterstützung können
            wir unser Hobby ausleben und coole Produktionen auf die Beine
            stellen. Willst du uns auch unter die Arme greifen? Dann schick uns
            das <DownloadLink
                name="Formular"
                link="src/lib/assets/sponsors/FormularGönnerBruggetrolle.pdf"
            /> ausgefüllt an <MailToVorstand />, wir freuen uns über jeden
            Beitrag! Als Gönner bezahlen sie regelmässig einen Betrag ein, um
            uns zu unterstützen. Sie werden unter Gönnern aufgelistet und
            erhalten, wenn Sie es wünschen, Informationen zu kommenden
            Aufführungen und Events des Vereins.
        </p>

        <div class="block">
            <h2 class="subtitle is-3">
                Hier findest du alle Gönner und Sponsoren der Bruggetrolle
            </h2>
            <p class="block">
                Willst du stattdessen im Namen deines Unternehmens unsere
                Leidenschaft unterstützen und so die Kultur in der Region
                fördern? Dann melde dich bei uns unter
                <MailToVorstand />, wir freuen uns mit dir zusammenzuarbeiten!
            </p>
        </div>
    </div>
</BaseWrapper>

<style>
</style>
