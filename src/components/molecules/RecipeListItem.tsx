import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Assets, interfaces & states
import { theme } from '../utils';
import butterChicken from '../../assets/img/butterchicken.png';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

interface IRecipe {
	title: string;
	time: string;
	link: string;
}

export const RecipeListItem = (props: IRecipe) => {
	return (
		<RecipeLink to={props.link}>
			<TextBox>
				<H3>{props.title}</H3>
				<Time>
					<Clock />
					<H4Orange>{props.time}</H4Orange>
				</Time>
			</TextBox>
			<Img src={butterChicken} />
		</RecipeLink>
	);
};
const RecipeLink = styled(Link)`
	width: 86vw;
	margin: 1rem 1.7rem;
	padding: 1rem 1.2rem;
	display: flex;
	flex-direction: row;
	border-radius: 10px;
	background-color: ${theme.cardColor};
`;

const H3 = styled.h3`
	margin: 0.4rem 0;
	padding-right: 10px;
	font-weight: 300;
	text-align: start;
	line-height: 1.4;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const H4Orange = styled.h4`
	padding-left: 8px;
	margin: 0;
	justify-items: center;
	text-align: center;
	color: ${theme.buttonColor};
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const Time = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Img = styled.img`
	max-width: 100px;
	max-height: 100px;
`;
