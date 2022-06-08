<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`http://localhost:3000/api/v1/events/${id}`);
		const trainings = await res.json();

		if (res.ok) {
			return {
				props: {
					trainings
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
	import EventCard from '$lib/components/event-components/eventCard.svelte';
	import EventHomeButton from '$lib/components/event-components/eventHomeButton.svelte';
	export let trainings;
</script>

<svelte:head>
	<title>Event Trainings | Texas School Safety Center</title>
	<meta name="description" content="{trainings.name} for Texas School Safety" />
	<meta name="keywords" content="Texas School Safety, Texas School Safety {trainings.name}" />
</svelte:head>

<div class="content">
	{#if trainings.length > 0}
		<Masthead text={trainings[0].event.name} />
	{/if}
</div>

{#if trainings.length > 0}
	<div class="event-list">
		{#each trainings as training}
			<EventCard {training} />
		{/each}
	</div>
{:else}
	<div class="no-trainings">
		<h1>There are Currently No Trainings Scheduled</h1>
		<h3>Check Back Soon!</h3>
	</div>
{/if}

<EventHomeButton />
