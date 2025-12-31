<script lang="ts">
    import HighlightArticle from "$lib/HighlightArticle.svelte";

    export let items: {
        title: string;
        subtitle: string;
        date: string;
        description: string;
        image: string;
        buttonText?: string;
        buttonHref?: string;
    }[];
</script>

<div class="higlight-list">
    {#each items as item}
        <HighlightArticle
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            description={item.description}
            buttonText={item.buttonText}
            buttonHref={item.buttonHref}
        ></HighlightArticle>
    {/each}
</div>

<style>
</style>
