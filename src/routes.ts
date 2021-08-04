import Home from './Home.svelte';
import Uuid from './Uuid.svelte';
import Nanoid from './Nanoid.svelte';

export const routes = {
  '/': Home,
  '/uuid': Uuid,
  '/nanoid': Nanoid,
};
