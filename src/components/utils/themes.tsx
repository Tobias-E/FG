import { createTheme } from '@mui/material/styles';
import { black, white, orange } from './colors';
//import { primaryFont, headerFont } from './typography';

// Interfaces
interface Itheme {
	[key: string]: any;
}

export const theme: Itheme = {
	primaryColor: black[100],
	textColor: white[100],
	buttonColor: orange[100],
	checkboxColor: orange[200],
	cardColor: black[200],
	cardColorInactive: black[300],
	widthTablet: '768px',
	widthDesktop: '1023px',
};

export const mtheme = createTheme({
	palette: {
		primary: {
			main: orange[100],
		},
	},
	bg: {
		main: black[100],
	},
	text: {
		main: white[100],
	},
});
