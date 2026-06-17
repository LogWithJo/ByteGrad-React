import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import App from './App.tsx';

createRoot(document.getElementById('youssef')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='dark'>
			<BrowserRouter>
				<Toaster />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
