import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import butterChicken from '../../assets/img/butterchicken.png';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

interface IRecipe {
	title: string;
	src?: string;
}

export const Category = (props: IRecipe) => {
	return (
		<Container>
			<Img src={props.src} />
			<H3>{props.title}</H3>
		</Container>
	);
};

const Container = styled.div`
	width: 40vw;
	min-height: 10rem;
	margin: 0.8rem 0.7rem;
	padding: 1rem 1.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	background-color: ${theme.cardColor};
`;

const Img = styled.img`
	max-width: 80px;
	max-height: 80px;
	margin-bottom: 0.6rem;
`;

const H3 = styled.h3`
	margin: auto;
	font-weight: 300;
	text-align: center;
	text-justify: center;
	line-height: 1.4;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;
