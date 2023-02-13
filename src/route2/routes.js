// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
// import App2 from './App2.svelte';
import HspListe from './HspListe.svelte';
import HspStart from './HspStart.svelte';
import NotFound from './NotFound.svelte';
import Settings from './Settings.svelte';
import Start from './Start.svelte';
// @endindex

  const routes = {
    '/': Start,
    '/hsp/': HspStart,
    '/hsp/:hid/': HspListe,
    '/settings/': Settings,
    '*': NotFound
  }
  
  export default routes;