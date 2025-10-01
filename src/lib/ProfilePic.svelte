<script lang="ts">
    let { title, image = "" } = $props();
</script>

<div class="box">
    {#if image}
        <figure class="image is-3by2">
            <img src={image} alt="title" />
        </figure>
    {/if}
    <h2 class="title is-4">{title}</h2>
</div>
