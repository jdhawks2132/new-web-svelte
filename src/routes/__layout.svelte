<script>
	import '../assets/styles/global.scss';
	import Navbar from '../lib/components/nav/navbar.svelte';
	import Footer from '../lib/components/nav/footer.svelte';
	import Header from '../lib/components/nav/header.svelte';
</script>

<Header />
<Navbar />
<main>
	<slot />
</main>
<Footer />

<style>
</style>
