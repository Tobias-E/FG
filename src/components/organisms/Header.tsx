import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { theme } from '../utils';
import logo from '../../assets/logo.svg';
import { Burger } from '../atoms/Burger';

// Interface

export const Header: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<HeaderStyled>
			<Link to='/'>
				<Img src={logo} alt='Logo' />
			</Link>
			<Nav>
				<LinkStyled to='/recipes'>Recipes</LinkStyled>
				<LinkStyled to='/articles'>Articles</LinkStyled>
			</Nav>
			<Burger open={open} setOpen={setOpen} />
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	width: 100%;
	padding: 0.2rem 2rem;
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

const Nav = styled.nav`
	width: 10rem;
	display: flex;
	justify-content: space-between;
`;

const LinkStyled = styled(Link)`
	text-decoration: none;
	color: ${theme.textColor};
`;
