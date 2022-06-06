import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';

// Components
import { Recipe } from '../molecules';

export const NewRecipes = () => {
	return (
		<Section id='new'>
			<H2>Nye opskrifter</H2>
			<Recipe title='Butter Chicken india style' time='1t 45m' />
			<Recipe title='Butter Chicken india style' time='1t 45m' />
			<Recipe title='Butter Chicken india style' time='1t 45m' />
			<Recipe title='Butter Chicken india style' time='1t 45m' />
			<Recipe title='Butter Chicken india style' time='1t 45m' />
			<Recipe title='Butter Chicken india style' time='1t 45m' />
		</Section>
	);
};

const Section = styled.section`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${theme.primaryColor};
	box-shadow: 0px -10px 20px ${theme.primaryColor};
`;
const H2 = styled.h2`
	font-weight: 300;
`;
