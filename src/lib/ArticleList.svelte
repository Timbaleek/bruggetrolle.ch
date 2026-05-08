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
    export let featured: boolean = false;
</script>

<div
    class={featured ? "higlight-list" : "higlight-list container is-fluid px-5"}
>
    {#each items as item, i}
        <HighlightArticle
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            description={item.description}
            buttonText={item.buttonText}
            buttonHref={item.buttonHref}
            featured={featured && i === 0}
        ></HighlightArticle>
    {/each}
</div>

<style>
</style>
