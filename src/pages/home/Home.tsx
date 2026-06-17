import { type Dispatch, type SetStateAction, useState } from 'react';
import { IoReload } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
} from '@/components/ui/card';

const info = [
	{ id: 1, name: 'fancyCounter', url: <FancyCounter /> },
	{ id: 2, name: 'evento' },
	{ id: 3, name: 'corp-comment' },
	{ id: 4, name: 'petsoft' },
	{ id: 5, name: 'rmtdev' },
	{ id: 6, name: 'trekbag' },
	{ id: 7, name: 'word-analytics' },
];

function Home() {
	return (
		<div className="grid grid-cols-2 p-10 gap-10">
			{info.map((project) => (
				<Card key={project.id}>
					<CardHeader className="flex justify-center items-center overflow-hidden h-full">
						{project.url}
					</CardHeader>
					<CardContent>{project.name}</CardContent>
					<CardAction className="flex justify-center items-center w-full">
						<Button>
							<Link to={`/${project.name}`}>view project</Link>
						</Button>
					</CardAction>
				</Card>
			))}
		</div>
	);
}

export default Home;

function FancyCounter() {
	const [number, setNumber] = useState(0);
	const functions: string[] = ['reset', 'decrease', 'increase'];
	return (
		<main className="bg-emerald-400 w-full flex justify-center items-center flex-col gap-4">
			<div className="bg-teal-600 rounded-lg flex flex-col gap-4 items-center shadow-2xl">
				<div className="capitalize text-2xl font-bold p-6">fancy counter</div>
				<Btn func={functions[0]} set={setNumber} />
				<div>{number}</div>
				<div className="flex border-t border-teal-500 items-center w-full justify-center">
					{functions.slice(1, 3).map((func: string) => (
						<Btn key={func} func={func} set={setNumber} />
					))}
				</div>
			</div>
		</main>
	);
}

function Btn({
	func,
	set,
}: {
	func: string;
	set: Dispatch<SetStateAction<number>>;
}) {
	const actions = {
		reset: 'reset',
		dec: 'decrease',
		inc: 'increase',
	} as const;

	function handleClick(func: string) {
		switch (func) {
			case actions.dec:
				set((prev) => prev - 1);
				break;
			case actions.inc:
				set((prev) => prev + 1);
				break;
			default:
				set(0);
		}
	}
	return (
		<div
			className={`${func === 'decrease' ? 'border-r border-teal-500' : ''} text-white w-full h-full p-6 cursor-pointer flex items-center justify-center text-2xl transition-colors`}
		>
			<button
				type="button"
				onClick={() => {
					handleClick(func);
				}}
			>
				{func === 'reset' ? (
					<IoReload className="text-xl" />
				) : func === 'decrease' ? (
					'-'
				) : (
					'+'
				)}
			</button>
		</div>
	);
}
