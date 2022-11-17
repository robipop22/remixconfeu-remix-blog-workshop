import { bundleMDX } from 'mdx-bundler';

export const bundledMDX = async (mdxSource: string) => {
	const result = await bundleMDX({
		source: mdxSource,
	});

	return result;
};
