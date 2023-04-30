import './index.css';
import { App } from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ThemeConfig } from './config/theme.config';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<ThemeConfig>
			<App />
		</ThemeConfig>
	</Provider>,
	// </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
