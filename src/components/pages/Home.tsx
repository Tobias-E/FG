import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import butterChicken from '../../assets/img/butterchicken.png';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

// Components
import { Landing, NewRecipes } from '../organisms';

export const Home: React.FC = () => {
	return (
		<Container>
			<Landing />
			<NewRecipes />
		</Container>
	);
};

const Container = styled.main`
	padding: 10vh 0 0 0;
`;
