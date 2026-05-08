<script lang="ts">
    let {
        title,
        subtitle = "",
        date = "",
        description = "",
        image = "",
        buttonText = "",
        buttonHref = "",
        featured = false,
    } = $props();
</script>

<article
    class={"media " +
        (featured ? "box has-background-primary has-text-white mb-5" : "")}
>
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
                        <span
                            class={featured
                                ? "subtitle is-6 has-text-right has-text-white"
                                : "subtitle is-6 has-text-right"}
                        >
                            {date}
                        </span>
                    </div>
                </div>
            </div>

            <h3 class="subtitle is-6">{subtitle}</h3>
            <p>{description}</p>
            {#if buttonText && buttonHref}
                <div class="field">
                    <div class="control">
                        <a
                            class={featured
                                ? "button is-white is-flex-mobile"
                                : "button is-primary is-flex-mobile"}
                            href={buttonHref}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>{buttonText}</strong>
                        </a>
                    </div>
                </div>
            {/if}
        </div>
        <div class="media-right"></div>
    </div>
</article>

{#if !featured}
    <hr class="divider" />
{/if}

<style lang="scss">
    @use "bulma/sass/utilities/mixins";

    $breakpoint: 768px;

    .highlight-image {
        max-height: 35vh;
        object-fit: contain;
    }
    .image {
        width: 15rem;
    }
    @include mixins.until($breakpoint) {
        .media {
            flex-direction: column;
        }
        .title {
            padding-top: 2rem;
        }
        .subtitle {
            text-align: center;
        }
        .media-left {
            min-width: 100%;
        }
        .image {
            width: 100%;
        }
        .highlight-image {
            max-height: 60vh;
        }
    }
</style>
