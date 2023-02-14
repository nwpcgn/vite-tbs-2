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

<section class="my-4">
    <div class="phone">
        <div class="screens">
        <div id="v1" class="screen screen--1"></div>
        <div id="v2" class="screen screen--2"></div>
        <div id="v3" class="screen screen--3"></div>
        </div>
    </div>    
</section>



<style lang="scss">
  :root {
    --width-phone: 280px;
    --height-phone: calc(var(--width-phone) * 1.6666);
    --margin-x: calc(var(--width-phone) * 0.071875);
    --width-screen: calc(var(--width-phone) - (var(--margin-x) * 2));
    --height-screen: calc(var(--width-screen) * 2.219718309859155);
  }

  .phone {
    background: transparent
      url("https://nwp-cgn.de/studio/upload/kat11/server/php/files/bg.png")
      no-repeat center/cover;
    height: var(--height-phone);
    margin: auto;
    overscroll-behavior-x: none;
    padding-top: 60px;
    width: var(--width-phone);
    border-radius: 1.2rem;
  }

  .screens {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: calc(var(--margin-x) * 2);
    margin: 0 auto;
    overflow-x: scroll;
    overscroll-behavior-x: none;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    width: var(--width-screen);
  }
  .screens::-webkit-scrollbar {
    opacity: 0;
  }

  .screen {
    background-color: transparent;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-shrink: 0;
    height: var(--height-screen);
    scroll-snap-stop: always;
    scroll-snap-align: start;
    width: var(--width-screen);
  }
  .screen--1 {
    background-image: url("https://assets.codepen.io/423754/screen+1.svg");
  }
  .screen--2 {
    background-image: url("https://assets.codepen.io/423754/screen+2.svg");
  }
  .screen--3 {
    background-image: url("https://assets.codepen.io/423754/screen+3.svg");
  }
</style>
