import type { Dispatch, SetStateAction } from 'react';
import { IoReload } from 'react-icons/io5';
import { toast } from 'sonner';

type Action = 'reset' | 'decrease' | 'increase';
const actions = {
	reset: 'reset',
	dec: 'decrease',
	inc: 'increase',
} as const;

function ActionButtons({
	specificFunc = actions.reset,
	setNumber,
	number,
}: {
	specificFunc: Action;
	setNumber: Dispatch<SetStateAction<number>>;
	number?: number;
}) {
	function btnFunc(
		specificFunc: Action,
		setNumber: Dispatch<SetStateAction<number>>,
		number: number = 0,
	) {
		switch (specificFunc) {
			case actions.dec:
				setNumber((prev) => (prev <= 0 ? prev : prev - 1));
				if (number <= 0) toast('Limit Exceed!!!', { position: 'top-center' });
				break;
			case actions.inc:
				setNumber((prev) => (prev >= 20 ? prev : prev + 1));
				if (number >= 20) toast('Limit Exceed!!!', { position: 'top-center' });
				break;
			default:
				setNumber(0);
		}
	}
	return (
		<button
			type="button"
			onClick={() => {
				btnFunc(specificFunc, setNumber, number);
			}}
			className={`${specificFunc === actions.dec ? 'border-r border-teal-500' : ''} text-white w-full h-full p-6 cursor-pointer flex items-center justify-center text-2xl transition-colors`}
		>
			{specificFunc === actions.reset ? (
				<IoReload className="text-xl" />
			) : specificFunc === actions.dec ? (
				'-'
			) : (
				'+'
			)}
		</button>
	);
}

export default ActionButtons;
