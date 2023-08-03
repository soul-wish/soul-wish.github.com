<script context="module">
	import { MY_TWITTER_HANDLE, MY_GITHUB_HANDLE, SITE_TITLE } from '$lib/siteConfig';
</script>

<script>
	import { inject } from '@vercel/analytics';
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	import NowPlaying from '../components/NowPlaying.svelte';
	inject();
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<div class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
	<slot />
</main>

<footer class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
	<div class="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
		<hr class="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
		<NowPlaying />
		<div class="w-full max-w-2xl grid grid-cols-3 gap-4 pb-10">
			<div class="flex flex-col space-y-4">
				<a class="text-gray-500 transition hover:text-gray-300" href="/">Home</a>
				<a class="text-gray-500 transition hover:text-gray-300" href="/about">Projects</a>
				<a class="text-gray-500 transition hover:text-gray-300" href="/uses">Uses</a>
			</div>
			<div class="flex flex-col space-y-4">
				<a
					class="text-gray-500 transition hover:text-gray-300"
					target="_blank"
					rel="noopener noreferrer"
					href={'https://x.com/intent/follow?screen_name=' + MY_TWITTER_HANDLE}
				>
					X
				</a>
				<a
					class="text-gray-500 transition hover:text-gray-300"
					target="_blank"
					rel="noopener noreferrer"
					href={'https://github.com/' + MY_GITHUB_HANDLE}
				>
					GitHub
				</a>
				<a
					class="text-gray-500 transition hover:text-gray-300"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/soul_wish"
				>
					Instagram
				</a>
			</div>
			<div class="flex flex-col space-y-4">
				<a class="text-gray-500 transition hover:text-gray-300" href="mailto:soulwish.ls@gmail.com">
					E-mail
				</a>
				<a class="text-gray-500 transition hover:text-gray-300" href="/api/rss.xml" rel="external">
					RSS
				</a>
			</div>
		</div>
	</div>
</footer>
