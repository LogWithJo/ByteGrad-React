import { Route, Routes } from 'react-router-dom';
import FancyCounter from './pages/FancyCounter/FancyCounter';
import Home from './pages/home/Home';
import Evento from './pages/Evento';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/fancyCounter" element={<FancyCounter />}></Route>
			<Route path="/evento" element={<Evento />}></Route>
		</Routes>
	);
}
