import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import type { LoaderArgs, LinksFunction, MetaFunction, HeadersFunction } from '@remix-run/node';

import { getSpecificBlogData } from '~/utils/github.server';
import { bundledMDX } from '~/utils/mdx.server';

import blogStyles from '~/styles/blog.css';

import MDXContent from '~/components/MDXContent';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: blogStyles }];

export const meta: MetaFunction = ({ data }) => {
	const { frontmatter } = data;
	return {
		title: frontmatter.title,
		description: frontmatter.description,
		keywords: frontmatter.tags.join(', '),
		'og:image': frontmatter.previewImgUrl,
		'twitter:image': frontmatter.previewImgUrl,
	};
};

export const loader = async ({ params }: LoaderArgs) => {
	const { blogSlug } = params;

	const blogContent = await getSpecificBlogData(blogSlug || '');

	const { code, frontmatter } = await bundledMDX(blogContent);

	return json({
		code,
		frontmatter,
	});
};

export const headers: HeadersFunction = () => {
	return {
		'Cache-Control': 'public, max-age=3600000',
	};
};

const BlogRoute = () => {
	const { code, frontmatter } = useLoaderData<typeof loader>();
	const { title, description, date, readTime } = frontmatter;
	return (
		<div>
			<h1 className="text-red-700">{title}</h1>
			<p>{description}</p>
			<p>{date}</p>
			<p>{readTime}</p>
			<div className="blog-container">
				<MDXContent code={code} />
			</div>
			<Link to="/blog" className="bg-blue-300 p-2 mt-4">
				Read More
			</Link>
		</div>
	);
};

export default BlogRoute;
