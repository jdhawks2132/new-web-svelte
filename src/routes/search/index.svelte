<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`http://localhost:3000/api/v1/search_terms`);
		const termsList = await res.json();

		if (res.ok) {
			return {
				props: {
					termsList
				}
			};
		}
		return {
			status: 301,
			redirect: {
				path: '/'
			}
		};
	}
</script>

<script>
	import { searchTerm, updateSearchTerms } from '../../stores/search';
	import { goto } from '$app/navigation'
	import Masthead from '$lib/components/mastead.svelte';
	console.log($searchTerm);
	export let termsList;
	const searchTermsList = termsList.filter((term) =>
		term.term.toLowerCase() === $searchTerm.toLowerCase() ? term : null
	);
	console.log(searchTermsList);
</script>

<svelte:head>
	<title>Search | Texas School Safety Center</title>
	<meta name="description" content="About Texas School Safety" />
	<meta name="keywords" content="Texas School Safety, Texas School Safety About" />
</svelte:head>

<div class="content">
	<Masthead text={'Search Results'} />
	{#if searchTermsList.length > 0}
		{#each searchTermsList as term}
			<div class="search-term">
				<h2>{term.title}</h2>
				<a href={term.location}>{term.location}</a>
				<p>Weight: {term.weight}</p>
			</div>
		{/each}
	{:else}
		<div class="search-term">
			<h2>No results found</h2>
		</div>
	{/if}
</div>
