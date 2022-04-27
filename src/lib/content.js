import { resolve, basename } from 'path';
import { compile } from 'mdsvex';
import grayMatter from 'gray-matter';
import { promises as fs } from 'fs';

export async function listBlogposts() {
	let content = [];
	for await (const _path of getFiles('posts')) {
		const src = await fs.readFile(_path, 'utf8');
		const data = grayMatter(src);
		content.push({
			content: data.content,
			data: data.data,
			slug: data.data.slug ?? basename(_path, '.md')
		});
	}
	return content;
}

export async function getBlogpost(slug) {
	const _path = resolve('posts', slug + '.md');
	const src = await fs.readFile(_path, 'utf8');
	const data = grayMatter(src);
	const content = (await compile(data.content, {})).code
		// https://github.com/pngwn/MDsveX/issues/392
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, '</code></pre>');
	return { content, data: data.data, slug: data.data.slug ?? basename(_path, '.md') };
}

async function* getFiles(dir) {
	const dirents = await fs.readdir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = resolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* getFiles(res);
		} else {
			yield res;
		}
	}
}
