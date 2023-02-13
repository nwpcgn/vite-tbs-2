<script>
  import { onMount } from 'svelte';
  import Loader from '../lib/bs/Loader.svelte';
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faComment, faBook, faMicrophone } from '@fortawesome/free-solid-svg-icons';
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

<main>
  <div class="container-lg">

    <section class="py-4">
        {#each data as d}
          <div class="row g-2">
              <div class="col">
                <article>
                  <header class="d-flex w-100 justify-content-between align-items-start">
                    <div>
                      <h1 class="mb-1">
                        <span style="opacity: 0.9;">
                          <Fa icon={faMicrophone} fw />
                        </span>
                        <span>{d.titel}</span>
                      </h1>
                    </div>
                    <span class="badge text-bg-info fs-6">Folge {d.id}</span>
                  </header>
                  <div class="px-2">
                    <h5 class="mb-1"><Fa icon={faComment} fw /> <em>{d.name}</em></h5>
                    <p class="mb-1"><Fa icon={faBook} fw /> {d.buch}</p>
                    <p class="mb-1">
                      <small>{d.inhalt}</small>
                    </p>
                  </div>
                </article>
              </div>
          </div>
          {:else}
          <Loader />
        {/each}
        <!-- {b_id,buch,id,h_id,name,titel,inhalt,audio_link} -->
    </section>
  </div>
</main>

<!--
/* <details>
  <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
</details>   */
-->