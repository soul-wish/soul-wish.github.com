<script context="module">
	// export const prerender = true; // you can uncomment to prerender as an optimization
	export const hydrate = true;
	import { MY_TWITTER_HANDLE, SITE_URL } from '$lib/siteConfig';
	export async function load({ url, params, fetch }) {
		const slug = params.slug;
		let res = null;
		try {
			res = await fetch(`/api/blog/${slug}.json`);
			if (res.status > 400) {
				return {
					status: res.status,
					error: await res.text()
				};
			}

			return {
				props: {
					json: await res.json(),
					slug
				},
				cache: {
					maxage: 60 // 1 minute
				}
			};
		} catch (err) {
			console.error('error fetching blog post at [slug].svelte: ' + slug, res, err);
			return {
				status: 500,
				error: new Error('error fetching blog post at [slug].svelte: ' + slug + ': ' + res)
			};
		}
	}
</script>

<script>
	import 'prism-themes/themes/prism-shades-of-purple.min.css';

	/** @type {import('$lib/types').ContentItem} */
	export let json; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates
</script>

<svelte:head>
	<title>{json.data.title}</title>
	<meta name="description" content="Sergey Lysenko's blog" />

	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.data.title} />
	<meta name="Description" content={json.data.description} />
	<meta property="og:description" content={json.data.description} />
	<meta name="twitter:card" content={json.data.image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={json.data.title} />
	<meta name="twitter:description" content={json.data.description} />
	{#if json.data.image}
		<meta property="og:image" content={json.data.image} />
		<meta name="twitter:image" content={json.data.image} />
	{/if}
</svelte:head>

<article class="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
	<h1 class="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl ">
		{json.data.title}
	</h1>
	<div class="flex justify-between w-full mt-2 items-center">
		<div class="flex items-center">
			<span
				style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
				><img
					alt="Sergey Lysenko"
					src="/images/photo.jpg"
					class="rounded-full"
					width="24"
					height="24"
					loading="lazy"
				/></span
			>
			<p class="ml-2 text-sm text-gray-700 dark:text-gray-300">Sergey Lysenko</p>
		</div>
		<p class="text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
			{new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(
				new Date(json.data.date)
			)}
		</p>
	</div>
	<div
		class="-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 sm:mx-0 sm:w-full"
	/>

	<div class="prose mt-12 mb-4 w-full max-w-none dark:prose-invert">
		{@html json.content}
	</div>
</article>
