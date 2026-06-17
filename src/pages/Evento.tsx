import React from 'react';
import { Button } from '@/components/ui/button';

function Evento() {
	const [clickCount, setClickCount] = React.useState(0);
	return (
		<div>
			<div>clickCount: {clickCount}</div>
			<Button
				onClick={() => {
					setClickCount((prev) => prev + 1);
				}}
				onDoubleClick={() => {
					setClickCount((prev) => prev - 1);
				}}
			>
				click me
			</Button>
			<div>
				<div>rules</div>
				<div>1. one click === +</div>
				<div>1. double click === -</div>
			</div>
		</div>
	);
}

export default Evento;
