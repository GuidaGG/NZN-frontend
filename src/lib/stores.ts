import { writable } from 'svelte/store';

export const sidetrayVisible = writable(false);
export const activeName = writable('');