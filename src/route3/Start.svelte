<script>
  import Slider from "./Slider.svelte";
  import FlexRow from "../lib/bs/FlexRow.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faFilm,
    faPlay,
    faCalendar,
    faMicrophone,
    faChevronDown, 
    faChevronUp,
    faBookOpen,
  } from "@fortawesome/free-solid-svg-icons";
  const apiD = {
    hoerspiel: "Der Herr der Ringe",
    autor: "J.R.R. Tolkien ",
    regie: "Bernd Lau",
    produktion: "Südwestrundfunk (SWR) / Westdeutscher Rundfunk (WDR) ",
    veroeffentlicht: 1992,
    img_url: "./img/hdr/bg-lotr.jpg",
    info: "J.R.R. Tolkiens weltberühmter Fantasy-Klassiker: Der Herr der Ringe. Ein Ring voller Zauber, geschmiedet von einer bösen Macht, hat die Harmonie von Mittelerde zerstört. Herrscher werden zu Tyrannen, Menschen zu bösen Geschöpfen. Ein Krieg steht unmittelbar bevor. Hobbit Frodo Beutlin soll den Ring dorthin zurückbringen, wo er geschmiedet wurde, und ihn vernichten. In 30 Folgen lädt dieser Hörspiel-Klassiker von 1992 in eine der bekanntesten Fantasy-Welten aller Zeiten ein.",
    books: [
      {
        id: 1,
        buch: "Die Gefaehrten",
      },
      {
        id: 2,
        buch: "Die zwei Türme",
      },
      {
        id: 3,
        buch: "Die Rückkehr des Königs",
      },
    ],
  };
  export let slide1, slide2, slide3;
  const changeSlide = (elem) => {
      elem.scrollIntoView({behavior: 'smooth', block: 'center'});
  };
</script>


<main>
<header bind:this={slide1} class="slide-hero" style="background-image: url(./img/hdr/bg-lotr.jpg);">
 <div class="py-4 px-4">
  <div class="d-grid gap-2">
    <button on:click={() => changeSlide(slide2)} type="button" class="btn btn-outline-light btn-lg py-3 px-3">
      <Fa icon={faBookOpen} fw />  Start
    </button>
  </div>
 </div>
</header>

<article bind:this={slide2} class="slide">
  <div class="container-lg py-4">
    <nav class="py-4 mb-4 text-center">
      <button type="button" class="btn btn-light btn-lg" on:click={changeSlide(slide1)}><Fa icon={faChevronUp} /></button>
    </nav>
  
    <div class="row g-2">
      <div class="col">
        <header class="d-flex w-100 justify-content-between align-items-start">
          <div>
            <h1 class="mb-1">
              <span class="text-secondary" style="opacity: 0.5;">
                <Fa icon={faMicrophone} fw />
              </span>
              <span>{apiD.hoerspiel}</span>
            </h1>
          </div>
          <!-- <span class="badge text-bg-secondary">{apiD.h_id}</span> -->
        </header>
        <div class="px-2 text-start">
          <h5 class="mb-1">by <em>{apiD.autor}</em></h5>
          <p class="mb-1"><Fa icon={faFilm} fw /> {apiD.regie}</p>
          <p class="mb-1"><Fa icon={faPlay} fw /> {apiD.produktion}</p>
          <p class="mb-1"><Fa icon={faCalendar} fw /> {apiD.veroeffentlicht}</p>
          <p class="mb-1">
            <em>{apiD.info}</em>
          </p>
        </div>
      </div>
    </div>

    <nav class="py-4 mt-4 text-center">
      <button type="button" class="btn btn-light btn-lg" on:click={changeSlide(slide3)}><Fa icon={faChevronDown} /></button>
    </nav>
  
  </div>
</article>

<article bind:this={slide3} class="slide">
  <div class="container-lg py-4">
    
    <div class="row row-cols-1 row-cols-sm-3 g-2">
      {#each apiD.books as book}
      <div class="col">
        <div class="card">
          <img src="./img/hdr/lotr_b{book.id}.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <span class="mb-1">{apiD.hoerspiel}</span>
            <h4 class="fs-3 text-truncate">{book.buch}</h4>
            <p class="text-muted mb-0">by {apiD.autor}</p>
            <p class="mb-3"><small><Fa icon={faCalendar} fw /> {apiD.veroeffentlicht}</small></p>
            <a href="#/hsp/" class="btn btn-outline-info"><Fa icon={faBookOpen} fw /> Buch {book.id}</a>
          </div>
        </div>
      </div>
      {/each}
    </div>
    <nav class="py-4 mt-4 text-center">
      <button type="button" class="btn btn-light btn-lg" on:click={changeSlide(slide1)}><Fa icon={faChevronUp} /></button>
    </nav>
</article>
</main>


<style lang="scss" global>
  $hero-size: calc(100vh - 56px);
  $card-imge-height: 200px;
  $card-imge-width: 180px;

  :global(.hero) {
    width: 100%;
    height: 100%;
    max-height: $hero-size;
  }

  :global(.img-hero) {
    display: block;
    width: 100%;
    height: 100%;
    max-height: $hero-size;
    object-fit: cover;
  }
  main {
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  .slide-hero {
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    min-height: $hero-size;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }
  .slide {
    display: flex;
    flex-direction: column;
    min-height: $hero-size;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }
</style>
