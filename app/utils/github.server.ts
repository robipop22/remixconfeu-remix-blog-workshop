import type { AllBlogsResponse } from '~/interfaces/blog';

const { Octokit } = require('octokit');

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

export const getAllBlogSData = async (): Promise<AllBlogsResponse> => {
	try {
		const { data } = await octokit.rest.repos.getContent({
			mediaType: {
				format: 'raw',
			},
			owner: 'robipop22',
			repo: 'remixconfeu-remix-blog-workshop',
			path: 'blog/allBlogs.json',
		});
		return JSON.parse(data);
	} catch (error) {
		return {
			blogs: [],
			error: 'something went wrong',
		};
	}
};

export const getSpecificBlogData = async (slug: string): Promise<string> => {
	try {
		const { data } = await octokit.rest.repos.getContent({
			mediaType: {
				format: 'raw',
			},
			owner: 'robipop22',
			repo: 'remixconfeu-remix-blog-workshop',
			path: `blog/content/${slug}/index.mdx`,
		});
		return data;
	} catch (error) {
		return '';
	}
};
