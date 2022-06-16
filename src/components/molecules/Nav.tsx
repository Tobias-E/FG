import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Assets, interfaces & states
import { theme, IOpen } from '../utils';
import { burgerState } from '../Recoil';

// Export
export const Nav: React.FC = () => {
	const [open, setOpen] = useRecoilState(burgerState);
	return (
		<NavS open={open}>
			<LinkStyled to='/recipes' onClick={() => setOpen(false)}>
				Recipes
			</LinkStyled>
			<LinkStyled to='/articles' onClick={() => setOpen(false)}>
				Articles
			</LinkStyled>
		</NavS>
	);
};

const NavS = styled.nav<IOpen>`
	display: ${({ open }) => (open ? 'flex' : 'none')};
	position: absolute;
	z-index: 990;
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
		max-height: 100%;
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
		padding: 0 1.5rem;
	}
`;
