import Home from './home/Home.svelte';
import Date from './sections/Date.svelte';
import Uuid from './sections/uuid/Uuid.svelte';
import Nanoid from './sections/nanoid/Nanoid.svelte';

export const routes = {
  '/': Home,
  '/nanoid': Nanoid,
  '/uuid': Uuid,
  '/date': Date,
};
