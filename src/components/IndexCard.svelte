<script>
	// href={item.slug} title={item.data.title} date={item.data.date}
	export let href = '#';

	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a
	sveltekit:prefetch
	class="w-full text-gray-900 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-yellow-100"
	{href}
	><div class="mb-8 w-full">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="mb-2 w-full flex-auto text-lg font-medium md:text-xl">
				{title}
			</h4>
			<p class="w-44 mb-4 text-left text-gray-500 md:text-right md:mb-0">{stringData}</p>
		</div>
		<p class="text-gray-600 dark:text-gray-400">
			<slot />
		</p>
	</div></a
>
