import Home from './home/Home.svelte';
import Uuid from './Uuid.svelte';
import Nanoid from './Nanoid.svelte';
import Date from './Date.svelte';

export const routes = {
  '/': Home,
  '/uuid': Uuid,
  '/nanoid': Nanoid,
  '/date': Date,
};
