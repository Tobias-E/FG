import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import BG from '../../assets/img/LandingBackground.jpg';
import { ReactComponent as CtaIcon } from '../../assets/icons/cta.svg';

export const Landing: React.FC = () => {
	return (
		<Container>
			<Blur>
				<H1>
					En verden af <br /> enkle opskrifter
				</H1>
				<P>Find opskrifter til bagværk, dagligsmad & de helt store middage.</P>
			</Blur>
			<CTA href='#new'>
				Find inspiration <CtaIcon />
			</CTA>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-image: url(${BG});
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	z-index: 1;
`;

const Blur = styled.div`
	margin: 20vh 4rem 20vh 4rem;
	border-radius: 10px;
	&:after {
		content: '';
		border-radius: 20px;
		top: 20vh;
		left: 3.5rem;
		height: 15rem;
		width: 75vw;
	}
`;

const H1 = styled.h1`
	font-weight: 500;
	text-align: left;
`;
const P = styled.p`
	font-weight: 200;
	text-align: left;
	line-height: 1.6;
`;

const CTA = styled.a`
	width: 70vw;
	align-self: center;
	padding: 1rem 2.5rem;
	margin: 0 0 6rem 0;
	border-radius: 50px;
	border: none;
	background-color: ${theme.buttonColor};
	color: ${theme.textColor};
	font-size: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	text-decoration: none;
`;
