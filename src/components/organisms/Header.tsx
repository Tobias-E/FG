import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useResetRecoilState } from 'recoil';

// Assets, interfaces & states
import { theme } from '../utils';
import logo from '../../assets/logo.svg';
import { burgerState } from '../Recoil';

// Components
import { Burger } from '../atoms';
import { Nav } from '../molecules';

// Export
export const Header: React.FC = () => {
	const resetState = useResetRecoilState(burgerState);
	return (
		<HeaderStyled>
			<Link to='/' onClick={resetState}>
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
	position: fixed;
	top: 0px;
	z-index: 1000;
	box-shadow: 0 10px 20px ${theme.primaryColor};
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
