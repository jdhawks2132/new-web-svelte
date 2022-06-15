<script>
	export let tile;
</script>

<div>
	<a href={`/events/${tile.id}`} aria-label={`Link to ${tile.name}`}>
		<img src={tile.img_url} alt={`Link to ${tile.name}`} />
	</a>
</div>

<style>
	a {
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
	}

	img {
		height: 100%;
	}
</style>
