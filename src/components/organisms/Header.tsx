import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { theme } from '../utils';
import logo from '../../assets/logo.svg';
import { Burger } from '../atoms/Burger';

// Interface
interface IOpen {
	open: boolean;
	setOpen?: (val: boolean) => void;
}

// Export
export const Header: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<HeaderStyled>
			<Link to='/'>
				<Img src={logo} alt='Logo' />
			</Link>
			<Nav open={open}>
				<LinkStyled to='/recipes' onClick={() => setOpen(false)}>
					Recipes
				</LinkStyled>
				<LinkStyled to='/articles' onClick={() => setOpen(false)}>
					Articles
				</LinkStyled>
			</Nav>
			<Burger open={open} setOpen={setOpen} />
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
`;

const Img = styled.img`
	max-height: 5rem;
	width: 5rem;
`;

const Nav = styled.nav<IOpen>`
	border: 2px solid blue;
	display: ${({ open }) => (open ? 'flex' : 'none')};
	position: absolute;
	z-index: 100;
	top: 10vh;
	left: 0;
	width: 100vw;
	height: 90vh;
	padding: 1.5rem 0;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	background-color: ${theme.primaryColor};

	@media screen and (min-width: ${theme.widthDesktop}) {
		position: static;
		display: flex;
		height: 5vh;
		flex-direction: row;
		justify-content: flex-end;
	}
`;

const LinkStyled = styled(Link)`
	text-decoration: none;
	color: ${theme.textColor};
	font-size: 34px;
	font-weight: 600;
	padding: 1.5rem;

	@media screen and (min-width: ${theme.widthDesktop}) {
		font-size: 18px;
	}
`;
