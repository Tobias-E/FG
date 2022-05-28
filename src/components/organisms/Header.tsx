import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import logo from '../../assets/logo.svg';

// Components
import { Burger } from '../atoms';
import { Nav } from '../molecules';

// Export
export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Link to='/'>
				<Img src={logo} alt='Logo' />
			</Link>
			<Nav />
			<Burger />
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	width: 100vw;
	height: 10vh;
	padding: 1rem 1.7rem;
	border: 2px solid red;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${theme.primaryColor};
	@media screen and (min-width: ${theme.widthDesktop}) {
		height: 4rem;
	}
`;

const Img = styled.img`
	max-height: 5rem;
	width: 5rem;
`;
