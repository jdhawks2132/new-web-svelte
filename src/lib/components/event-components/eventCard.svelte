<script>
	import '../../../assets/styles/events.scss';
	export let event;
</script>

<a
	class="cards"
	href={`/events/${event.name.toLowerCase()}-trainings`}
	alt={`link to ${event.name} training page`}
>
	<h2>{event.name}</h2>
</a>
