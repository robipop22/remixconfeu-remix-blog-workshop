import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './tailwind.css';
import globalStyles from './styles/globals.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Remix DnB Stack',
	viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export function CatchBoundary() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex flex-col justify-center items-center h-screen w-full">
					<h1 className="text-4xl font-bold text-white">We could not find anything :(</h1>
					<Link to="/">Take be back to home</Link>
				</div>
			</body>
		</html>
	);
}
