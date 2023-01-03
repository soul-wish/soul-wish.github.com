import { listBlogposts } from '$lib/content';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ fetch, setHeaders }) {
	const list = await listBlogposts(fetch);
	list.sort((a, b) => (new Date(a.data.date) > new Date(b.data.date) ? -1 : 1));

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60}` // 1 minute.. for now
	});
	return new Response(JSON.stringify(list), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
}
