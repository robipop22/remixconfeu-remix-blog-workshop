export interface Blog {
	title: string;
	date: string;
	description: string;
	tags: string[];
	slug: string;
	content: string;
	readTime: number;
	previewImgUrl?: string;
}

export interface AllBlogsResponse {
	blogs: Blog[];
	error: string | null;
}

export interface FrontMatter {
	[key: string]: any;
}

export interface BlogMetaData {
	frontmatter: FrontMatter;
}
