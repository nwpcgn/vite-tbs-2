<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faFilm,
    faPlay,
    faCalendar,
    faMicrophone,
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
</script>


<header class="mb-4 hero">
  <img class="img-hero" src="./img/hdr/bg-lotr.jpg" alt="" />
</header>
<div class="container-lg">
  <div class="row g-2">
    <!-- <div class="col-4">
              <img src={apiD.img_url} alt={apiD.hoerspiel} class="img-fluid">
          </div> -->
    <div class="col">
      <div class="d-flex w-100 justify-content-between align-items-start">
        <div>
          <h1 class="mb-1">
            <span class="text-secondary" style="opacity: 0.5;">
              <Fa icon={faMicrophone} fw />
            </span>
            <span>{apiD.hoerspiel}</span>
          </h1>
        </div>
        <!-- <span class="badge text-bg-secondary">{apiD.h_id}</span> -->
      </div>
      <div class="px-2">
        <h5 class="mb-1">by <em>{apiD.autor}</em></h5>
        <p class="mb-1"><Fa icon={faFilm} fw /> {apiD.regie}</p>
        <p class="mb-1"><Fa icon={faPlay} fw /> {apiD.produktion}</p>
        <p class="mb-1"><Fa icon={faCalendar} fw /> {apiD.veroeffentlicht}</p>
        <p class="mb-1">
          <small>{apiD.info}</small>
        </p>
      </div>
<!--       <div class="px-2 py-2">
        <a href="#/hsp/" type="button" class="btn btn-primary">Episoden Liste</a
        >
      </div> -->
    </div>
  </div>
</div>
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
          <a href="#/hsp/" class="btn btn-primary">Buch {book.id}</a>
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>


<style lang="scss" global>
  $hero-size: 80vh;
  $card-imge-height: 200px;

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

  :global(.card-img-top) {
    max-height: $card-imge-height;
    object-fit: cover;
  }
</style>
