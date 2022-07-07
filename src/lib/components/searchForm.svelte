<script>
	import { updateSearchTerms } from '../../stores/search.js';
	import { goto } from '$app/navigation';
	let newQuery = '';

	const handleSubmit = (query) => {
		updateSearchTerms(query);
		newQuery = '';
		// goto '/search' unless you are already on the '/search' page
		if (window.location.pathname !== '/search') {
			goto('/search');
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit(newQuery)}>
	<input role="searchbox" type="text" placeholder="Search" bind:value={newQuery} />
	<i class="fa-solid fa-magnifying-glass" />
</form>
