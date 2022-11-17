import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import type { FC, ReactElement } from 'react';

import type { MDXContentPRops } from './props';

const MDXContent: FC<MDXContentPRops> = ({ code }: MDXContentPRops): ReactElement => {
	const Component = useMemo(() => getMDXComponent(code), [code]);

	return <Component />;
};

export default MDXContent;
