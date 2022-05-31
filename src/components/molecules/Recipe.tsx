import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import butterChicken from '../../assets/img/butterchicken.png';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

export const Recipe = () => {
	return (
		<NewRecipe>
			<TextBox>
				<H3>Butter Chicken india style</H3>
				<Time>
					<Clock />
					<H4Orange>1t 45m</H4Orange>
				</Time>
			</TextBox>
			<Img src={butterChicken} />
		</NewRecipe>
	);
};

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

const NewRecipe = styled.div`
	width: 86vw;
	margin: 1rem 1.7rem;
	padding: 1rem 1.2rem;
	display: flex;
	flex-direction: row;
	border-radius: 10px;
	background-color: ${theme.cardColor};
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
