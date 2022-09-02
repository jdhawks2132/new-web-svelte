<script>
	import EventCardButton from './eventCardButton.svelte';
	export let training;
	const d = new Date(training.date_start);
	let year = d.getUTCFullYear();
	let month = d.getUTCMonth();
	let day = d.getUTCDate();
	let trainingNow = new Date(year, month, day, 17);
	let today = new Date().getTime();
	const isPast = today > trainingNow.getTime();
	const isVirtual = training.in_person === false;

	const formatDate = (date) => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		};
		return new Date(date).toLocaleDateString('en-US', options);
	};

	const classAssignment = (past, virtual) => {
		if (past) {
			return 'past';
		} else if (!past && virtual) {
			return 'virtual';
		} else if (!past && !virtual) {
			return 'in-person';
		}
	};

	const parseURL = (url) => {
		return url.split('=')[1];
	};
</script>

{#if training.enabled}
	<div id={parseURL(training.forms_url)} class="event-card">
		<h2 class={`event-header ${classAssignment(isPast, isVirtual)}`}>
			{formatDate(training.date_start)}
		</h2>
		<p class={`event-time ${classAssignment(isPast, isVirtual)}`}>{training.time}</p>
		<div>
			{#if isVirtual}
				<div class="virtual-address">
					<i class="fas fa-globe no-margin-top" />
					<p>Virtual Training</p>
					<EventCardButton {isPast} {training} />
				</div>
			{/if}
			<div />
		</div>
		{#if training.in_person}
			<div class="in-person-address">
				{#if !isPast}
					<a href={training.maps_url}><i class="fas fa-map-marker-alt" /></a>
				{/if}
				<div class="event-address">
					<p>{training.event_location_name}</p>
					<p>{training.street}</p>
					<p>{training.city}, {training.state} {training.zip}</p>
				</div>
				<div>
					<EventCardButton {isPast} {training} />
				</div>
			</div>
		{/if}
	</div>
{/if}
