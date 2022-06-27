<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`http://localhost:3000/api/v1/events`);
		const events = await res.json();

		if (res.ok) {
			return {
				props: {
					events
				}
			};
		}
		return {
			status: 301,
			redirect: {
				path: '/events'
			}
		};
	}
</script>

<script>
	import Masthead from '$lib/components/mastead.svelte';
	import EventParentCard from '$lib/components/event-components/eventParentCard.svelte';
	export let events;
</script>

<svelte:head>
	<title>Events | Texas School Safety Center</title>
	<meta name="description" content="Events for Texas School Safety" />
	<meta name="keywords" content="Texas School Safety, Texas School Safety Events" />
</svelte:head>

<div class="content">
	<Masthead text={'Events'} />
</div>

<div class="content">
	<div class="event-index-list">
		{#each events as event}
			<EventParentCard {event} />
		{/each}
	</div>
</div>
