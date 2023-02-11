<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faComment, faBook, faMicrophone } from '@fortawesome/free-solid-svg-icons';
  import HdrList from "./hsp/HdrList.svelte";
  import AudioPlayer, { stopAll } from './hsp/AudioPlayer.svelte';
  const label = "Hoerspiel Api";
  export let params = {};
  let hid = 0;
  if (params && params.hid) {
    hid = params.hid;
  }
</script>

<div class="container-md">
  <header class="py-4">
    <div class="mx-auto">
      <h2 class="h2 text-muted">
        {label}
      </h2>
      <p>
        <button type="button" class="btn btn-primary" on:click={stopAll}>Stop All</button>
      </p>
    </div>
  </header>
  <section class="py-4">
    <HdrList bind:hid let:data>
      <!-- {b_id,buch,id,h_id,name,titel,inhalt,audio_link} -->
            {#each data as dat}
                <div class="row g-2">
                    <div class="col">
                    <AudioPlayer {...dat} />
                    </div>
                </div>
            {/each}
    </HdrList>
  </section>
</div>
