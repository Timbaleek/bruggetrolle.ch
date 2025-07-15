<script lang="ts">
    let {
        title,
        subtitle = "",
        date = "",
        description = "",
        image = "",
    } = $props();
</script>

<article class="media">
    <figure class="media-left">
        <div class="image">
            {#if image}
                <img src={image} alt="Placeholder" class="highlight-image" />
            {:else}
                <div class=""></div>
            {/if}
        </div>
    </figure>
    <div class="media-content">
        <div class="content">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <h2 class="title is-4">{title}</h2>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <span class="subtitle is-6 has-text-right">
                            {date}
                        </span>
                    </div>
                </div>
            </div>

            <h3 class="subtitle is-6">{subtitle}</h3>
            <p>{description}</p>
        </div>
        <div class="media-right"></div>
    </div>
</article>

<hr class="divider" />

<style>
    .highlight-image {
        max-height: 35vh;
        object-fit: contain;
    }
    .image {
        width: 15rem;
    }
</style>
