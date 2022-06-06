import styled from 'styled-components';

// Assets, interfaces & states

// Components
import { Landing, NewRecipes } from '../organisms';

export const Home: React.FC = () => {
	return (
		<Main>
			<Landing />
			<NewRecipes />
		</Main>
	);
};

const Main = styled.main`
	padding: 10vh 0 0 0;
`;
