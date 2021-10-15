import Home from './home/Home.svelte';
import Uuid from './sections/uuid/Uuid.svelte';
import Nanoid from './sections/nanoid/Nanoid.svelte';
import Date from './sections/Date.svelte';

export const routes = {
  '/': Home,
  '/uuid': Uuid,
  '/nanoid': Nanoid,
  '/date': Date,
};
