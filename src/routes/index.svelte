<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`http://localhost:3000/api/v1/events`);
		const events = await res.json();
		const topEvents = events.slice(0, 4);

		if (res.ok) {
			return {
				props: {
					topEvents
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
	import Masthead from '$lib/components/mastead.svelte';
	import Subheader from '$lib/components/subheader.svelte';
	import HomePageTile from '$lib/components/homePageTile.svelte';
	export let topEvents;
</script>

<svelte:head>
	<title>Home | Texas School Safety Center</title>
</svelte:head>

<div class="content">
	<Masthead text="Home" />
	<div class="home-grid">
		<div class="featured">
			<h2 class="title">Featured Toolkit</h2>
			<Subheader title="Active Threat Toolkit" subtitle="Resource" />
			<p>
				This toolkit provides resources for districts to complete an Active Threat Annex to their
				Basic Plan, which addresses district actions and responsibility through the five phases of
				Emergency Management. You will find multiple resources linked in this toolkit, including an
				Active Threat Annex template and completion guide to help you complete your annex. You will
				also find relevant TxSSC, state, and federal training courses and resources. Access the
				Toolkit
			</p>
		</div>
		<div class="hero">
			<h2 class="title">Featured Video</h2>
			<img src="https://txssc.txstate.edu/assets/images/video_thumb_srp.jpg" alt="srp video link" />
		</div>
		<article class="art1">
			<Subheader title="Mandatory Drills for Schools" subtitle="Resource" />
			<p>
				As required by Texas Education Code Section 37.114, the TEA Commissioner, in coordination
				with the Texas School Safety Center and State Fire Marshal, has adopted rules for mandatory
				school drills for public school districts and open-enrollment charter schools. The Texas
				School Safety Center has updated the following resources to reflect these new mandates:
				Training, Drilling and Exercising Toolkit and the Drill Guidance for Schools Document.
			</p>
		</article>
		<article class="art2">
			<Subheader title="School Safety and Security Committee Guidelines" subtitle="Resource" />
			<p>
				Texas Education Code specifically describes who shall serve on a School Safety and Security
				Committee, how often they shall meet and what they are charged to implement. This committee
				must actively participate in developing and implementing emergency plans for campuses and
				other facilities. The TxSSC has developed guidelines and FAQs to assist districts with this
				important task. Download the Committee Guidelines
			</p>
		</article>
		<article class="art3">
			<Subheader title="Continuity Of Operations Plan (COOP) for Schools" subtitle="Resource" />
			<p>
				In Texas, school districts are required to have a district multi-hazard emergency operations
				plan (EOP). A vital part of a comprehensive EOP is a Continuity of Operations Plan (COOP),
				which is a guidance document on how to continue operations under adverse conditions. The
				current COVID-19 outbreak has made updating or implementing a district COOP extremely
				important. To support these efforts we have updated the COOP template. Download the COOP
				Template
			</p>
		</article>
		<div class="event-header">
			<h2 class="title">Featured Events</h2>
		</div>
		<div class="home-events-grid">
			{#each topEvents as event}
				<HomePageTile tile={event} />
			{/each}
		</div>
		<div class="tool-header">
			<h2 class="title">Featured Tools</h2>
		</div>
		<div class="home-tools-grid">
			<div>Tool 1</div>
			<div>Tool 2</div>
			<div>Tool 3</div>
			<div>Tool 4</div>
		</div>
	</div>
</div>

<style>
	p {
		font-size: 1.2rem;
		font-family: 'adele', serif;
		font-weight: 500;
		line-height: 1.8;
	}

	.hero > img {
		padding: 20px 0;
		width: 100%;
	}

	.title {
		color: #565656;
		font-size: 1.5rem;
		font-family: 'adele', serif;
		font-weight: 500;
		line-height: 1.8;
		border-bottom: 1px solid #e6e6e6;
	}
</style>
