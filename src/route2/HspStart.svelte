<script>
  import { onMount } from 'svelte';
  import Loader from '../lib/bs/Loader.svelte';
  import AudioPlayer, { stopAll } from './hsp/HdrAudioList.svelte';
  let data = [];
  const fetchData = async () => {
      try {
        let res = await fetch("./data/hdr.json");
        let d = await res.json();
        if (d) data = d;
        else throw new Error;
      } catch (error) {
        alert(error);
      }
  };
  onMount(() => fetchData())
</script>

<div class="container-lg">
  <header class="py-4">
    <div class="mx-auto">
        <a href="#/" class="btn btn-primary">Home</a>
        <button type="button" class="btn btn-primary" on:click={stopAll}>Stop All</button>
    </div>
  </header>
  <section class="py-4">
      {#each data as dat}
        <div class="row g-2">
            <div class="col">
            <AudioPlayer {...dat} />
            </div>
        </div>
        {:else}
        <Loader />
      {/each}
      <!-- {b_id,buch,id,h_id,name,titel,inhalt,audio_link} -->
  </section>
</div>


<!--
<details>
  <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
</details>  
-->