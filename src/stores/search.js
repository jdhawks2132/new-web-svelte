import { writable } from 'svelte/store';

export const searchTerm = writable('');

export const updateSearchTerms = (query) => {
	searchTerm.set(query);
};
