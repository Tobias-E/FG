import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';

// Components

// Export
export const Footer: React.FC = () => {
	return (
		<Container>
			<H3>Footer</H3>
		</Container>
	);
};

const Container = styled.footer`
	display: flex;
	background-color: ${theme.primaryColor};
`;

const H3 = styled.h3`
	align-self: center;
`;
