<script>
  import Start from './pages/Start.svelte';
  import NotFound from './pages/NotFound.svelte';
  import Settings from './pages/Settings.svelte';
  import Hsp from './pages/Hsp.svelte';
  import Fa from "svelte-fa/src/fa.svelte";
  import {faCog, faMicrophone} from "@fortawesome/free-solid-svg-icons";
  import url from './utils/url';
  const title = "HdR-Hoerspiele";
  const handleStart = () => {
   // if ($url.hash === '' || $url.hash === '#/') slide1.scrollIntoView({behavior: 'smooth', block: 'center'});
  };
  $: console.log($url)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>


<nav class="navbar navbar-dark bg-dark navbar-expand sticky-top shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#/" on:click={handleStart}>
      {title}
    </a>
      <div id="navcol-1" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" class:active={$url.hash.includes('#/hsp')} href="#/hsp/">
                  <Fa icon={faMicrophone} size="lg" fw />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" class:active={$url.hash.includes('#/settings')} href="#/settings/">
                  <Fa icon={faCog} size="lg" fw />
                </a>
              </li>
          </ul>
      </div>
  </div>
</nav>

{#if $url.hash === '' || $url.hash === '#/'}
  <main><Start /></main>
{:else if $url.hash.includes('#/hsp')}
  <Hsp />
{:else if $url.hash.includes('#/settings')}
  <Settings />
{:else}
  <NotFound />
{/if}
