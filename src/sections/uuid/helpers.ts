import { v4 } from 'uuid';

export { v1 as generateUuidV1, v3 as generateUuidV3, v5 as generateUuidV5 } from 'uuid';

// @ts-expect-error crypto.randomUUID is a quite new method
export const generateUuidV4 = () => crypto && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : v4();
