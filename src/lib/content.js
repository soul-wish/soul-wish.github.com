import { resolve } from 'path';
import { compile } from 'mdsvex';

export async function listBlogposts() {
	let content = [];
	const modules = import.meta.globEager('/posts/*.md');
	Object.entries(modules).forEach(([_, module]) => {
		const { metadata } = module;
		content.push({
			data: metadata
		});
	});

	return content;
}

export async function getBlogpost(slug) {
	const modules = import.meta.globEager(`/posts/*.md`);
	const module = modules[resolve(`/posts/${slug}.md`)];
	const { metadata } = module;
	console.log('module', module);
	const { html } = module.default.render();
	// const content = (await compile(html, {})).code;
	// html
	// 	.replace(/>{@html `<code class="language-/g, '><code class="language-')
	// 	.replace(/<\/code>`}<\/pre>/g, '</code></pre>');
	return { content: html, data: metadata };

	// const _path = resolve('posts', slug + '.md');
	// const src = await fs.readFile(_path, 'utf8');
	// const data = grayMatter(src);
	// // const content = (await compile(data.content, {})).code
	// 	// https://github.com/pngwn/MDsveX/issues/392
	// 	.replace(/>{@html `<code class="language-/g, '><code class="language-')
	// 	.replace(/<\/code>`}<\/pre>/g, '</code></pre>');
	// return { content, data: data.data, slug: data.data.slug ?? basename(_path, '.md') };
}

// async function* getFiles(dir) {
// 	const dirents = await fs.readdir(dir, { withFileTypes: true });
// 	for (const dirent of dirents) {
// 		const res = resolve(dir, dirent.name);
// 		if (dirent.isDirectory()) {
// 			yield* getFiles(res);
// 		} else {
// 			yield res;
// 		}
// 	}
// }
