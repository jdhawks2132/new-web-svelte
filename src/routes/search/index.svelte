<script>
	import { onMount } from 'svelte';
	import Masthead from '$lib/components/mastead.svelte';
	let newQuery = '';

	let results = null;
	let searchedFor = null;

	const handleSubmit = (query) => {
		fetch('http://localhost:3000/api/v1/search/' + query)
			.then((response) => response.json())
			.then((data) => (results = data));

		searchedFor = query;
		newQuery = '';
	};
</script>

<svelte:head>
	<title>Search | Texas School Safety Center</title>
	<meta name="description" content="About Texas School Safety" />
	<meta name="keywords" content="Texas School Safety, Texas School Safety About" />
</svelte:head>

<div class="content">
	<Masthead text={'Search Page'} />
	<form class="search-form" on:submit|preventDefault={handleSubmit(newQuery)}>
		<input role="searchbox" type="text" placeholder="Search" bind:value={newQuery} />
		<i class="fa-solid fa-magnifying-glass" />
	</form>

	{#if results !== null && results.length > 0}
		<h2 class="searched-for">Showing Results for {searchedFor}</h2>
		{#each results as term}
			<!-- render a search term as a clickable card element -->
			<div class="card">
				<a href={term.location} target="_blank" rel="noopener noreferrer"><h3>{term.title}</h3></a>
				<p>{term.location}</p>
				<p>Weight: {term.weight}</p>
			</div>
		{/each}
	{:else if results !== null && results.length === 0}
		<p class="searched-for">No results for <strong>{searchedFor}</strong>, please try again</p>
	{:else}
		<p class="searched-for">Please Enter a Search Term</p>
	{/if}
</div>

<style>
	/* style the search-term as a modern card */
	.card {
		background-color: #fff;
		border-radius: 0.5rem;

		margin: 1rem 0;
		padding: 1rem;
		border: 1px solid #ccc;
		border-bottom: 2px solid maroon;
	}

	.card a {
		color: #000;
		text-decoration: none;
	}

	.card a:hover {
		color: maroon;
		text-decoration: none;
	}

	.card p {
		color: lightgray;
	}

	.searched-for {
		text-align: center;
		margin: 1rem 0;
	}

	.search-form {
		margin: 1rem 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.search-form input {
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		padding: 0.5rem;
		margin: 0 0.5rem;
	}
</style>
