<script>
  export let slide1, slide2, slide3, slide4, slide5;
</script>

<div class="slider">
  <section id="slide1" bind:this={slide1}>
    <slot><!-- optional fallback --></slot>
  </section>
  {#if $$slots.s2}
    <section id="slide2" bind:this={slide2}>
      <slot name="s2"><!-- optional fallback --></slot>
    </section>
  {/if}
  {#if $$slots.s3}
    <section id="slide3" bind:this={slide3}>
      <slot name="s3"><!-- optional fallback --></slot>
    </section>
  {/if}
  {#if $$slots.s4}
    <section id="slide4" bind:this={slide4}>
      <slot name="s4"><!-- optional fallback --></slot>
    </section>
  {/if}
  {#if $$slots.s5}
    <section id="slide5" bind:this={slide5}>
      <slot name="s5"><!-- optional fallback --></slot>
    </section>
  {/if}
</div>

<!--
<nav class="tabbar flex items-center space-x-1">
  <button class="btn btn-dark" onclick="document.getElementById('v1').scrollIntoView({behavior: 'smooth', block: 'center'})">View1</button>
  <button class="btn btn-dark" onclick="document.getElementById('v2').scrollIntoView({behavior: 'smooth', block: 'center'})">View2</button>
  <button class="btn btn-dark" onclick="document.getElementById('v3').scrollIntoView({behavior: 'smooth', block: 'center'})">View3</button>
</nav>
 partial -->

<style lang="scss">
  .slider {
    flex: 1;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
  }

  .slider > section {
    min-width: 100vw;
    height: calc(100vh - 56px);
    scroll-snap-align: start;
    position: relative;
  }
</style>
