// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Db from './Db.svelte';
import Hsp from './Hsp.svelte';
import HspLib from './HspLib.svelte';
import NotFound from './NotFound.svelte';
import Settings from './Settings.svelte';
import Start from './Start.svelte';
// @endindex

  const routes = {
    '/': Start,
    '/hsp/': HspLib,
    '/hsp/:hid/': Hsp,
    '/db/:page/': Db,
    '/db/:page/:id': Db,
    '/settings/': Settings,
    '*': NotFound
  }
  
  export default routes;