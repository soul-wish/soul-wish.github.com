import { error } from '@sveltejs/kit';

// we choose NOT to prerender blog pages because it is easier to edit and see changes immediately
// instead we set cache control headers
// export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, setHeaders }) {
	const slug = params.slug;
	let res = null;
	res = await fetch(`/api/blog/${slug}.json`);
	if (res.status > 400) {
		throw error(res.status, await res.text());
	}
	setHeaders({
		'cache-control': 'public, max-age=60' // increase the max age as you get more confident in your caching
	});
	return {
		json: await res.json(),
		slug
	};
	// } catch (err) {
	// 	console.error('error fetching blog post at [slug].svelte: ' + slug, res, err);
	// 	throw error(500, 'error fetching blog post at [slug].svelte: ' + slug + ': ' + res);
	// }
}
