// Interfaces
interface IColor {
	[key: number]: string;
}

// Exports
export const black: IColor = {
	100: '#212121',
	200: '#2D2D2D',
	300: 'rgb(45,45,45, 0.3)',
};
export const white: IColor = {
	100: '#F7F7F7',
	200: '#D9D9D9',
	300: 'rgb(247,247,247, 0.3)',
};
export const orange: IColor = {
	100: '#F08F1E',
	200: 'rgb(218, 126, 30)',
};
