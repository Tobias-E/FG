import styled from 'styled-components';

// Assets, interfaces & states

// Components
import { Landing, RecipeList } from '../organisms';

export const Home: React.FC = () => {
	return (
		<Main>
			<Landing />
			<RecipeList title={'Nye opskrifter'} id={'new'} />
		</Main>
	);
};

const Main = styled.main`
	padding: 10vh 0 0 0;
`;
