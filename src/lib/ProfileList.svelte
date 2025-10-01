<script lang="ts">
    export let items: {
        title: string;
        image: string;
    }[];
</script>

<div class="grid is-gap-2">
    {#each items as item}
        <div class="profile-item">
            {#if item.image}
                <img
                    src={item.image}
                    alt="Placeholder"
                    class="highlight-image"
                />
                <h2 class="title is-4 has-text-centered">{item.title}</h2>
            {:else}
                <div class=""></div>
            {/if}
        </div>
    {/each}
</div>

<style lang="scss">
    @use "bulma/sass/utilities/mixins";

    $breakpoint: 768px;

    .highlight-image {
        max-height: 35vh;
        object-fit: contain;
    }
    @include mixins.until($breakpoint) {
        .highlight-image {
            max-height: 60vh;
        }
    }
</style>
