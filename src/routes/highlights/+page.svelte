<script lang="ts">
    import ArticleList from "../../lib/ArticleList.svelte";

    import BaseWrapper from "$lib/BaseWrapper.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import { expoIn } from "svelte/easing";
    import Ibfdd_plakat from "$lib/assets/highlights/Ibfdd_plakat.jpg";
    import HighlightArticle from "$lib/HighlightArticle.svelte";

    const items = [
        {
            title: "Ich bin für dich da.",
            subtitle: "Die erste Produktion des Vereins.",
            date: "15.-23. Juni 2024",
            description:
                "Unsere erste Produktion als Verein. Wir haben uns sehr gefreut, wieder auf der Bühne zu stehen. Aufgeführt wurde 'Ich bin für dich da.', ein selbstgeschriebenes Stück, das die Beziehung zwischen Geschwistern und ihren Schutzengeln thematisiert.",
            image: Ibfdd_plakat,
        },
        {
            title: "Ein Sommernachtstraum",
            subtitle: "Produktion des Kantitheaters Baden",
            date: "13. März 2020",
            description:
                "Aufgrund der Corona-Pandemie wurde die Aufführung abgesagt.",
            image: "",
        },
        {
            title: "Ich bin für dich da.",
            subtitle: "Die erste Produktion des Vereins.",
            date: "15.-23. Juni 2024",
            description:
                "Unsere erste Produktion als Verein. Wir haben uns sehr gefreut, wieder auf der Bühne zu stehen. Aufgeführt wurde 'Ich bin für dich da.', ein selbstgeschriebenes Stück, das die Beziehung zwischen Geschwistern und ihren Schutzengeln thematisiert.",
            image: Ibfdd_plakat,
        },
    ];
</script>

<BaseWrapper>
    <h1 class="title is-1">Highlights</h1>

    <p class="subtitle is-3">
        Hier siehst du Highlights von unseren vergangenen Aufführungen und
        Events.
    </p>

    <ArticleList {items}></ArticleList>
</BaseWrapper>

<style>
</style>
