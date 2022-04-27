import { resolve } from 'path';

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
	const { html } = module.default.render();

	return { content: html, data: metadata };
}
