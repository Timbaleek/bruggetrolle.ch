<script>
    import { onDestroy, tick } from 'svelte';
  
    // --- Props -----------------------------------------------------------
    export let image;               // image src (import result or URL string)
    export let alt = '';
    export let margin = 32;         // px gap kept around the image when zoomed
    export let duration = 240;      // ms, transition length ("fast" scale)
    export let easing = 'cubic-bezier(0.16, 1, 0.3, 1)'; // expo-out, snappy
  
    // --- State -------------------------------------------------------------
    let thumbEl;        // the inline <img> that stays in normal document flow
    let overlayImgEl;    // the cloned <img> inside the fixed overlay
    let zoomed = false;  // overlay mounted?
    let closing = false; // currently animating back down?
    let bgActive = false; // controls the black backdrop fade
    let posStyle = '';   // inline top/left/width/height for overlayImgEl
  
    // Moves the overlay to <body> so it always sits above the rest of the
    // page, even if an ancestor has a transform/filter that would otherwise
    // create its own containing block for position:fixed.
    function portal(node) {
      document.body.appendChild(node);
      return {
        destroy() {
          node.parentNode?.removeChild(node);
        }
      };
    }
  
    function rectToStyle(r) {
      return `top:${r.top}px;left:${r.left}px;width:${r.width}px;height:${r.height}px;`;
    }
  
    // Fit the image's natural aspect ratio into the viewport minus `margin`.
    function computeFinalRect() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const maxW = vw - margin * 2;
      const maxH = vh - margin * 2;
  
      const naturalW = thumbEl.naturalWidth || maxW;
      const naturalH = thumbEl.naturalHeight || maxH;
  
      const scale = Math.min(maxW / naturalW, maxH / naturalH);
      const w = naturalW * scale;
      const h = naturalH * scale;
  
      return {
        top: (vh - h) / 2,
        left: (vw - w) / 2,
        width: w,
        height: h
      };
    }
  
    async function open() {
      if (zoomed) return;
  
      // 1) Snapshot the thumbnail's current on-screen position/size.
      posStyle = rectToStyle(thumbEl.getBoundingClientRect());
      zoomed = true;
      closing = false;
  
      // 2) Let Svelte mount the overlay image at that exact spot first...
      await tick();
  
      // 3) ...then, next frame, move it to the fullscreen rect so the
      //    top/left/width/height CSS transition actually animates.
      requestAnimationFrame(() => {
        posStyle = rectToStyle(computeFinalRect());
        bgActive = true;
      });
  
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKeydown);
    }
  
    function close() {
      if (!zoomed || closing) return;
      closing = true;
      bgActive = false;
      // Animate back to wherever the (still in-flow, just hidden) thumbnail
      // currently sits - handles scroll/resize that happened while zoomed.
      posStyle = rectToStyle(thumbEl.getBoundingClientRect());
    }
  
    function onOverlayTransitionEnd(e) {
      if (e.target !== overlayImgEl || e.propertyName !== 'width') return;
      if (closing) {
        zoomed = false;
        closing = false;
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeydown);
      }
    }
  
    function onKeydown(e) {
      if (e.key === 'Escape') close();
    }
  
    onDestroy(() => {
      document.removeEventListener('keydown', onKeydown);
      if (zoomed) document.body.style.overflow = '';
    });
  </script>
  
  <!--
    The original <img> never leaves the page flow, so nothing around it
    reflows. While zoomed it's just made invisible (visibility:hidden keeps
    its layout space reserved); the overlay clone is what the user sees.
  -->
  <img
    bind:this={thumbEl}
    src={image}
    {alt}
    class="zoomable-thumb"
    class:is-hidden-original={zoomed}
    on:click={open}
  />
  
  {#if zoomed}
    <div
      class="zoom-overlay"
      class:is-active={bgActive}
      style="--zoom-duration:{duration}ms; --zoom-easing:{easing};"
      use:portal
      on:click={close}
    >
      <img
        bind:this={overlayImgEl}
        src={image}
        {alt}
        class="zoom-overlay-image"
        style={posStyle}
        on:click|stopPropagation
        on:transitionend={onOverlayTransitionEnd}
      />
    </div>
  {/if}
  
  <style>
    .zoomable-thumb {
      cursor: zoom-in;
      display: block;
    }
  
    /* Keeps its box in the layout (no reflow) but paints nothing. */
    .is-hidden-original {
      visibility: hidden;
    }
  
    .zoom-overlay {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color var(--zoom-duration) var(--zoom-easing);
      cursor: zoom-out;
    }
  
    .zoom-overlay.is-active {
      background-color: rgba(0, 0, 0, 0.9);
    }
  
    .zoom-overlay-image {
      position: fixed;
      object-fit: contain;
      cursor: default;
      will-change: top, left, width, height;
      transition:
        top var(--zoom-duration) var(--zoom-easing),
        left var(--zoom-duration) var(--zoom-easing),
        width var(--zoom-duration) var(--zoom-easing),
        height var(--zoom-duration) var(--zoom-easing);
    }
  </style>