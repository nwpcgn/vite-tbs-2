<script>
    import Collapse from "../lib/bs/Collapse.svelte";
    import DocsBs from '../lib/bs/DocsBs.md';
    export let label = "Nwp-App";
</script>

<div class="container-fluid">
  <section class="py-5">
      <div class="container-md">
        <div>
            <Collapse open={false}>
                <svelte:fragment slot="trigger" let:toggle>
                  <button type="button" class="btn btn-primary" on:click={toggle}>BS5 Docs</button>
                </svelte:fragment>
                <div class="my-2 px-2 py-2border rounded-2">
                  <DocsBs />
                </div>
              </Collapse>
          </div>
      </div>
  </section>
</div>
