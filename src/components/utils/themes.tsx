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
	cardColor: black[200],
	widthTablet: '768px',
	widthDesktop: '1023px',
};
