import { writable } from 'svelte/store'

export const events = writable([]);

const fetchEvents = async () => {
  const url = 'http://localhost:3000/api/v1/events/';
  const response = await fetch(url);
  const data = await response.json();
  events.set(data);
}

fetchEvents();