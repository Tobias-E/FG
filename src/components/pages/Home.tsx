import styled from 'styled-components';

// Assets, interfaces & states
// import { theme } from '../utils';

// Components
import { Landing } from '../organisms';

export const Home: React.FC = () => {
	return (
		<Container>
			<Landing />
		</Container>
	);
};

const Container = styled.main`
	padding: 10vh 0 0 0;
`;
