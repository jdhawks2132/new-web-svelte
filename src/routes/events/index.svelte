<script>
	import Masthead from '$lib/components/mastead.svelte';
	import { events } from '../../stores/events.js';
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
	
	<ul>
		<li class="event-list">
			{#each $events as event}
				<a
					href={`/events/${event.id}`}
					alt={`link to ${event.name} trainings`}
					eventName={event.name}>{event.name}</a
				>
			{/each}
		</li>
	</ul>
</div>
