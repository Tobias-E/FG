// Interfaces
/* import ABZ from '../../assets/fonts/ABeeZee-regular.tft';
import ABZitalic from '../../assets/fonts/ABeeZee-italic.tft'; */

interface ItypeScale {
	[key: string]: string;
}

// Exports
/* export const primaryFont: string = ABZ;
export const headerFont: string = ABZitalic; */

export const typeScale: ItypeScale = {
	header1: '1.8rem',
	header2: '1.6rem',
	header3: '1.4rem',
	header4: '1.2rem',
	header5: '1.1rem',
	paragraph: '1rem',
	helperText: '0.8rem',
	copyrightText: '0.7rem',
};
