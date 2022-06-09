<script>
	import '../../../assets/styles/nav-footer.scss';
	import SearchForm from '$lib/components/searchForm.svelte';
</script>

<nav class="navbar">
	<ul>
		<li><a href="/tools" alt="link to tools page">TOOLS</a></li>
		<li><a href="/events" alt="link to events page">EVENTS</a></li>
		<li><a href="/videos" alt="link to videos page">VIDEOS</a></li>
		<li><a href="/research" alt="link to the research page">RESEARCH</a></li>
		<li><a href="/about" alt="link to the about page">ABOUT</a></li>
		<li>
			<a
				href="https://sslp.txssc.txstate.edu/"
				alt="link to school safety learning portal"
				target="_blank"
				rel="noopener noreferrer">LEARNING PORTAL</a
			>
		</li>
		<li>
			<a
				href="http://registry.txssc.txstate.edu/"
				alt="link to txssc registry webpage"
				target="_blank"
				rel="noopener noreferrer">REGISTRY</a
			>
		</li>
		<li>
			<SearchForm />
		</li>
	</ul>
</nav>
