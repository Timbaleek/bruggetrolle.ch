<article class="media">
    <figure class="media-left">
        <p class="image">
            <slot name="img"
                ><img
                    src={Ibfdd_plakat}
                    alt="Placeholder"
                    class="highlight-image"
                /></slot
            >
        </p>
    </figure>
    <div class="media-content">
        <div class="content">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <slot name="title">
                            <h2 class="title is-4">Titel</h2>
                        </slot>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <slot name="date">
                            <span class="subtitle is-6 has-text-right">
                                Datum
                            </span>
                        </slot>
                    </div>
                </div>
            </div>

            <h3 class="subtitle is-6">
                <slot name="subtitle">Untertitel</slot>
            </h3>
            <p>
                <slot name="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </slot>
            </p>
        </div>
        <div class="media-right"></div>
    </div>
</article>

<div class="divider is-vertical"></div>

<style>
    .highlight-image {
        height: 40vh;
        object-fit: cover;
    }
</style>
