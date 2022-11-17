import { json } from '@remix-run/node';

import type { LoaderArgs } from '@remix-run/node';

import { useLoaderData, Form } from '@remix-run/react';

import { getAllBlogSData } from '~/utils/github.server';

import BlogCard from '~/components/BlogCard';

import { getBlogsByTitle } from '~/utils/filters';

export const loader = async ({ request }: LoaderArgs) => {
	const allBlogsData = await getAllBlogSData();
	const url = new URL(request.url);

	const query = url.searchParams.get('q');

	if (query) {
		const filteredBlogs = getBlogsByTitle(allBlogsData.blogs, query);
		return json({ blogs: filteredBlogs });
	}

	return json({
		blogs: allBlogsData.blogs,
	});
};

const BlogRoute = () => {
	const { blogs } = useLoaderData<typeof loader>();

	return (
		<div className="w-full min-h-screen justify-start flex flex-col gap-5 px-20 py-5 bg-secondary items-center md:items-start">
			<h1>Blog</h1>
			<Form method="get" action="/blog" className="flex gap-4">
				<input className="text-gray-800 rounded-sm" name="q" placeholder="Search..." type="text" />
				<button className="bg-primary text-white rounded-sm px-4 py-2" type="submit">
					Search
				</button>
				<button className="bg-primary text-white rounded-sm px-4 py-2" type="reset">
					Reset
				</button>
			</Form>
			<div className="w-full flex justify-start items-center md:items-start gap-5 flex-col md:flex-row md:flex-wrap">
				{blogs.map(blog => (
					<BlogCard key={blog.slug} {...blog} />
				))}
			</div>
		</div>
	);
};

export default BlogRoute;
