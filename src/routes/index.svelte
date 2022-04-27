<script context="module">
	import {
		SITE_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
	export const prerender = true; // index page is most visited, lets prerender
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/listContent.json`);
		// alternate strategy https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
		// Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
		if (res.status > 400) {
			return {
				status: res.status,
				error: await res.text()
			};
		}

		/** @type {import('$lib/types').ContentItem[]} */
		const items = await res.json();
		const latestPosts = items.slice(0, 3);
		return {
			props: { latestPosts },
			cache: {
				maxage: 60 // 1 minute
			}
		};
	}
</script>

<script>
	import FeatureCard from '../components/FeatureCard.svelte';
	export let latestPosts;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/api/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div
	class="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16"
>
	<div class="flex flex-col-reverse sm:flex-row items-start">
		<div class="flex flex-col pr-8">
			<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
				Sergey Lysenko
			</h1>
			<h2 class="text-gray-700 dark:text-gray-200 mb-4">
				{SITE_DESCRIPTION}
			</h2>
			<p class="text-gray-600 dark:text-gray-400 mb-16">
				Always curious about latest trends in web development. Prefer clear code and simple
				solutions for complicated problems.
			</p>
		</div>
		<div class="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
			<span
				style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
				><img
					alt="Sergey Lysenko"
					src="/images/photo.jpg"
					class="rounded-full"
					width="115"
					height="115"
				/></span
			>
		</div>
	</div>

	<section class="mb-2 w-full">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Latest Posts
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			{#each latestPosts as latestPost}
				<FeatureCard
					title={latestPost.data.title}
					href={latestPost.data.slug}
					date={latestPost.data.date}
				/>
			{/each}
		</div>
		<a
			class="mt-8 flex items-center h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200"
			href="/blog"
			>Read all posts
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="ml-1 h-6 w-6"
				><path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
				/></svg
			></a
		>
	</section>
</div>
