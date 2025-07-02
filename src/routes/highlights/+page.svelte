<script lang="ts">
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
            title: "Title 2",
            subtitle: "haha",
            date: "1-06-2000",
            description: "Some more content content here",
            image: Ibfdd_plakat,
        },
    ];
</script>

<BaseWrapper>
    <h1 class="title">Highlights</h1>

    <p class="subtitle">
        Hier siehst du Highlights von unseren vergangenen Aufführungen und
        Events.
    </p>

    <div class="higlight-list">
        {#each items as item}
            <HighlightArticle>
                <img
                    slot="img"
                    src={item.image}
                    alt="Highlight"
                    class="highlight-image"
                />
                <h2 slot="title" class="title is-4">{item.title}</h2>
                <h3 slot="subtitle" class="subtitle is-6">
                    {item.subtitle}
                </h3>
                <p slot="description">{item.description}</p>
                <p slot="date" class="subtitle is-6 has-text-right">
                    {item.date}
                </p></HighlightArticle
            >
        {/each}
    </div>
</BaseWrapper>

<style>
    .highlight-image {
        height: 40vh;
        object-fit: cover;
    }
</style>
