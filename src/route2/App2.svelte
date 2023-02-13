<script>
  import Router, { location } from "svelte-spa-router";
  import routes from "./routes";
  export let label = "Nwp-App";
  const navData = [
    { path: "/", name: "Start" },
    { path: "/hsp/", name: "Hoerspiele" },
    { path: "/settings/", name: "Settings" },
  ];

</script>

<nav class="navbar navbar-light navbar-expand sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Brand
    </a>
    <!-- <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button> -->
       <div id="navcol-1" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">First Item</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
<main>
  <Router {routes} />
</main>



