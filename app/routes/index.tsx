import { Link } from '@remix-run/react';

const Index = () => (
	<div className="flex justify-start items-center pt-20 h-screen w-screen flex-col text-center">
		<h1 className="text-7xl pb-10">Welcome To Remix</h1>
		<h2>Let's build something! 👨‍💻</h2>
		<Link to="/blog" className="bg-blue-300 p-2 mt-4">
			Check out my cool blog
		</Link>
	</div>
);

export default Index;
