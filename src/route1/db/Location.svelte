<script>
  import JsonPanel from './JsonPanel.svelte';
  import Collapse from "../../lib/bs/Collapse.svelte";
  import ApiFetcher from "./ApiFetcher.svelte";
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faUser, faUserFriends, faUsers, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
  export let detail = false;
  export let d = {};
  
</script>
{#if d.type}
{#if !detail}
  <!-- List Item {id, name, type, inhabitants, notable_residents, img_url} -->
  <header class="d-flex w-100 justify-content-between align-items-start">
    <h5 class="fs-2 mb-2">
      <span class="text-muted" style="opacity: 0.5;"><Fa icon={faMapMarkerAlt} fw /></span>
      <span class="text-primary">{d.name}</span>
    </h5>
    <span class="badge text-bg-secondary">
      <span class="">{d.id}</span>
    </span>
  </header>
  <article class="d-flex flex-column px-2">
    <span class="text-secondary fs-6"><Fa icon={faGlobe} fw /> {d.type}</span>
  </article> 
{:else}
  <!-- Details Item -->
  <div class="d-flex w-100 justify-content-between align-items-start">
    <article class="d-flex flex-column ps-0 pe-3 mb-5" data-id={d.id}>
      <h1 class="fs-1 mb-3" title="Name">
        <span class="text-secondary" style="opacity: 0.5;"><Fa icon={faMapMarkerAlt} fw /></span>
        <span class="text-primary">{d.name}</span>
      </h1>
      <span class="text-secondary fs-5 px-3"><Fa icon={faGlobe} fw /> {d.type}</span>
      <div class="px-2 py-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-secondary">
            <span><Fa icon={faUser} fw /> Lebensformen</span>
          </li>
          {#each d.inhabitants as titel, i}       
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>{titel}</span>
            </li>
          {:else}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>keine Einträge</span>
            </li>
          {/each}
        </ul>  
      </div>
    </article>
    <figure class="mb-0 ms-2 img-thumbnail">
      <img src={d.img_url} class="img-fluid" alt={d.name}>
      <figcaption class="text-truncate">{d.name}</figcaption>
    </figure>
  </div>
  <div>
    <Collapse open={false}>
      <svelte:fragment slot="trigger" let:toggle>
        <button type="button" class="btn btn-primary" on:click={toggle}>
          <Fa icon={faUserFriends} fw /> 
          <span> Figuren </span>  
        </button>
      </svelte:fragment>
      <div class="my-4">
        <ul class="list-group">
           {#each d.notable_residents as url, i}       
            <ApiFetcher url={url} let:data>
              <li slot="loader" class="list-group-item d-flex justify-content-center">
                <span class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>{data.name}</span>
              </li>
            </ApiFetcher>
            {:else}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>keine Einträge</span>
            </li>
          {/each}
        </ul>  
      </div>
    </Collapse>
  </div>
  <JsonPanel d={d} />
{/if}
{/if}


<style>
  figure {
    max-width: 40%;
  }
</style>