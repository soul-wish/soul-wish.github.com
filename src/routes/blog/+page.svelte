<script>
	import IndexCard from '../../components/IndexCard.svelte';

	export let data;

	let inputEl;
	function focusSearch(e) {
		if (e.key === '/' && inputEl) inputEl.select();
	}

	$: items = data.items;

	$: list = items
		.filter((item) => {
			if (search) {
				return item.data.title.toLowerCase().includes(search.toLowerCase());
			}
			return true;
		})
		.slice(0, isTruncated ? 2 : items.length);

	let isTruncated = items?.length > 20;
	let search;
</script>

<svelte:window on:keyup={focusSearch} />

<section class="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
		Blog
	</h1>
	<p class="mb-4 text-gray-600 dark:text-gray-400">
		I've been using my blog as a digital garden since 2016. In total, I've written {items.length} articles
		on my blog. Use the search below to filter by title.
	</p>
	<div class="relative mb-4 w-full">
		<input
			aria-label="Search articles"
			type="text"
			bind:value={search}
			bind:this={inputEl}
			placeholder="Search..."
			class="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
		/><svg
			class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</div>
	{#if !search}
		<h3 class="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			All Posts
		</h3>
	{/if}
	{#if list.length}
		<ul class="">
			{#each list as item}
				<li class="mb-8">
					<IndexCard
						href={item.data.slug}
						title={item.data.title}
						stringData={new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(
							new Date(item.data.date)
						)}
					>
						{item.data.description}
					</IndexCard>
				</li>
			{/each}
		</ul>
		{#if isTruncated}
			<div class="flex justify-center">
				<button
					on:click={() => (isTruncated = false)}
					class="inline-block rounded bg-blue-100 p-4 text-lg font-bold tracking-tight text-black hover:text-yellow-900 dark:bg-blue-900 dark:text-white hover:dark:text-yellow-200 md:text-2xl"
				>
					Load More Posts...
				</button>
			</div>
		{/if}
	{:else if search}
		<div class="prose dark:prose-invert">
			No posts found for
			<code>{search}</code>.
		</div>
		<button class="p-2 bg-slate-500" on:click={() => (search = '')}>Clear your search</button>
	{:else}
		<div class="prose dark:prose-invert">No blogposts found!</div>
	{/if}
</section>
