import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ActionButtons from './ActionButtons';

type Action = 'reset' | 'decrease' | 'increase';
const actions = {
	reset: 'reset',
	dec: 'decrease',
	inc: 'increase',
} as const;

function FancyCounter() {
	const [number, setNumber] = useState(0);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowDown') {
				setNumber((prev) => (prev <= 0 ? prev : prev - 1));
				if (number <= 0) toast('Limit Exceed!!!', { position: 'top-center' });
			} else if (e.key === 'ArrowUp') {
				setNumber((prev) => (prev >= 20 ? prev : prev + 1));
				if (number >= 20) toast('Limit Exceed!!!', { position: 'top-center' });
			} else if (e.key === 'r' || e.key === 'R') {
				setNumber(0);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [number]);
	return (
		<main className="bg-emerald-400 flex h-screen w-screen justify-center items-center flex-col gap-4">
			<div className="bg-teal-600 rounded-lg flex flex-col gap-4 items-center shadow-2xl">
				<div className="capitalize text-2xl font-bold p-6">fancy counter</div>
				<ActionButtons specificFunc={actions.reset} setNumber={setNumber} />
				<div>{number}</div>
				<div className="flex border-t border-teal-500 items-center w-full justify-center">
					{Object.values(actions)
						.slice(1, 3)
						.map((specificFunc: Action) => (
							<ActionButtons
								key={specificFunc}
								specificFunc={specificFunc}
								setNumber={setNumber}
								number={number}
							/>
						))}
				</div>
			</div>
		</main>
	);
}

export default FancyCounter;
