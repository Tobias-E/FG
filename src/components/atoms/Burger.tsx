import styled from 'styled-components';
/* import {useRecoilState} from 'recoil' */
import { theme } from '../utils';

interface IOpen {
	open: boolean;
	setOpen?: (val: boolean) => void;
}

export const Burger: React.FC<IOpen> = ({ open, setOpen }) => {
	return (
		<>
			<Container open={open} onClick={() => setOpen?.(!open)}>
				<div />
				<div />
				<div />
			</Container>
		</>
	);
};

const Container = styled.button<IOpen>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2.5rem;
	height: 2.5rem;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;
	&:focus {
		outline: none;
	}

	div {
		width: 2.5rem;
		height: 4px;
		position: relative;
		background: ${theme.textColor};
		transform-origin: 1px;
		border-radius: 4px;
		transition: all 0.15s ease-out;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		:nth-child(2) {
			/* transform: ${({ open }) => (open ? 'translateX(-60px)' : 'translateX(0)')}; */
			opacity: ${({ open }) => (open ? '0' : '1')};
		}
		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}

	@media screen and (min-width: ${theme.widthDesktop}) {
		display: none;
	}
`;
