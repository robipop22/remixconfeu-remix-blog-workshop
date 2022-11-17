import type { Blog } from '~/interfaces/blog';

export const getBlogsByTitle = (blogs: Blog[], title: string): Blog[] => {
	return blogs.filter(blog => blog.title.toLowerCase().includes(title.toLowerCase()));
};
