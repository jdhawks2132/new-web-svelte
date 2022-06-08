<script>
	export let isPast;
	export let training;
</script>

{#if isPast}
	<p class="event-status past">PAST</p>
{:else if training.full_or_closed === 'OPEN'}
	<a href={training.forms_url}><p class="event-status open">{training.full_or_closed}</p></a>
{:else}
	<p class="event-status closed">{training.full_or_closed}</p>
{/if}
