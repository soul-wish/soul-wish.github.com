import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import remarkAbbr from 'remark-abbr';
import adapter from '@sveltejs/adapter-vercel';

// mdsvex config
const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		_: './src/mdsvexlayout.svelte' // default mdsvex layout
	},
	remarkPlugins: [remarkAbbr]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html', '.svx', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
