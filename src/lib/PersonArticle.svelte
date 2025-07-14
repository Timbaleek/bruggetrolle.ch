<script lang="ts">
    export let title: string = "";
    export let subtitle: string = "";
    export let date: string = "";
    export let description: string = "";
    export let image: string = "";
</script>

<article class="media">
    <figure class="media-left">
        <p class="image">
            <img src={image} alt="Placeholder" class="highlight-image" />
        </p>
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

<hr class="divider is-vertical" />

<style>
    .highlight-image {
        height: 40vh;
        object-fit: cover;
    }
</style>
