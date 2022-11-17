import { Link } from '@remix-run/react';

import type { FC, ReactElement } from 'react';
import type { Blog } from '~/interfaces/blog';

const BlogCard: FC<Blog> = ({ title, date, description, slug, readTime, tags, previewImgUrl }: Blog): ReactElement => (
	<Link
		to={`/blog/${slug}`}
		className="w-76 md:w-96 flex flex-col gap-5 p-5 bg-slate-600 rounded-md drop-shadow-xl min-h-[500px] flex-wrap">
		<h1 className="text-2xl">{title}</h1>
		<p className="">{description}</p>
		<img className="w-full drop-shadow-xl max-h-52" src={previewImgUrl} alt={title} />
		<span className="text-xs">
			{date} | {readTime} min read
		</span>
		<div className="flex gap-1 items-center w-full flex-wrap">
			{tags.map(tag => (
				<span key={`${slug}-${tag}`} className="bg-slate-700 rounded-2xl px-2 text-xxs cursor-default">
					{tag}
				</span>
			))}
		</div>
	</Link>
);

export default BlogCard;
