import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';

// Components
import { RecipeListItem } from '../molecules';

interface IRecipeList {
	title: string;
	id: string;
}

export const RecipeList = (props: IRecipeList) => {
	return (
		<Section id={props.id}>
			<H2>{props.title}</H2>
			<RecipeListItem
				title='Butter Chicken india style'
				time='1t 45m'
				link={'/recipes/all/recipe'}
			/>
			<RecipeListItem title='Butter Chicken india style' time='1t 45m' link={'recipe'} />
			<RecipeListItem title='Butter Chicken india style' time='1t 45m' link={'recipe'} />
			<RecipeListItem title='Butter Chicken india style' time='1t 45m' link={'recipe'} />
			<RecipeListItem title='Butter Chicken india style' time='1t 45m' link={'recipe'} />
			<RecipeListItem title='Butter Chicken india style' time='1t 45m' link={'recipe'} />
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
