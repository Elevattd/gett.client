import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

type ThemeProp = {
	children: JSX.Element;
};

export enum themePalette {
	BG = '#12181b',
	LIME = '#ea7d1e',
	FONT_GLOBAL = "'Roboto Slab', monospace",
}

const theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: themePalette.BG,
			paper: themePalette.BG,
		},
		primary: {
			main: themePalette.LIME,
		},
	},
	typography: {
		fontFamily: themePalette.FONT_GLOBAL,
	},
	components: {
		MuiButton: {
			defaultProps: {
				style: {
					textTransform: 'none',
					boxShadow: 'none',
					borderRadius: '0.5em',
				},
			},
		},
	},
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
