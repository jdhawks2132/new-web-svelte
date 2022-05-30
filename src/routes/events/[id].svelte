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
	import { goto } from '$app/navigation';
	export let trainings;
	let today = new Date().getTime();
</script>

<svelte:head>
	<title>Event Trainings | Texas School Safety Center</title>
	<meta name="description" content="{trainings.name} for Texas School Safety" />
	<meta name="keywords" content="Texas School Safety, Texas School Safety {trainings.name}" />
</svelte:head>

<div>
	<ul>
		{#if trainings.length > 0}
			{#each trainings as training}
				<li>
					<h2>{training.date_start}</h2>
					<h3>{training.time}</h3>
					{#if today > new Date(training.date_start).getTime()}
						<p>PAST</p>
					{:else if training.full_or_closed === 'OPEN'}
						<a href={training.forms_url}><button>{training.full_or_closed}</button></a>
					{:else}
						<p>{training.full_or_closed}</p>
					{/if}
				</li>
			{/each}
		{:else}
			<h2>There are Currently No Trainings Scheduled</h2>
			<h3>Check Back Soon!</h3>
		{/if}
		<li>
			<button alt="return to events page" on:click={() => goto('/events')}
				>Return to Events Page</button
			>
		</li>
	</ul>
</div>
