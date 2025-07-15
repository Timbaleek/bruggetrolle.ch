<script lang="ts">
    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import MailToVorstand from "$lib/MailToVorstand.svelte";
    import Titlebar from "$lib/Titlebar.svelte";

    let { name = "Formular", link = "link/to/your/download/file" } = $props();
</script>

<span class="icon-text">
    <span class="icon has-text-link">
        <i class="fa-solid fa-download"></i>
    </span>
    <span>
        <a href={link} download> {name} </a>
    </span>
</span>

<style>
</style>
