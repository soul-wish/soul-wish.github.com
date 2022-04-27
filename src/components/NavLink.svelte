<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	class="hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-800 transition-all {isActive
		? 'text-gray-800 dark:text-gray-200 font-semibold'
		: 'text-gray-600 dark:text-gray-400'}"
	{href}
	><span class="capsize"><slot /> </span>
</a>
