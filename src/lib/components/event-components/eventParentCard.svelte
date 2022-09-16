<script>
	export let event;
</script>

<a class="grid-card-link" href={`/events/${event.id}`} alt={`link to ${event.name} trainings`}>
	<div class="event-grid">
		<div class="event-grid-image">
			<img src={event.img_url} alt={`${event.name} thubnail`} />
		</div>
		<div class="event-grid-text">
			<div class="event-grid-header">
				<h2>{event.name}</h2>
			</div>
			<div class="event-grid-desc">
				<p>{event.desc}</p>
			</div>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
