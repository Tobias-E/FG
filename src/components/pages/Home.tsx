import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import BG from '../../assets/img/LandingBackground.jpg';
import { ReactComponent as CtaIcon } from '../../assets/icons/cta.svg';

// Components

export const Home: React.FC = () => {
	return (
		<Container>
			<Landing>
				<Blur>
					<H1>En verden af enkle opskrifter</H1>
					<P>Find opskrifter til bagværk, dagligsmad & de helt store middage.</P>
				</Blur>
				<CTA>
					Find inspiration <CtaIcon />
				</CTA>
			</Landing>
		</Container>
	);
};

const Container = styled.main`
	padding: 10vh 0 0 0;
`;

const Landing = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-image: url(${BG});
	background-repeat: no-repeat;
`;

const Blur = styled.div`
	backdrop-filter: blur(2px);
	padding: 12rem 4rem 14rem 4rem;
`;

const H1 = styled.h1`
	font-weight: 500;
	color: ${theme.textColor};
	text-align: left;
`;
const P = styled.p`
	font-weight: 200;
	color: ${theme.textColor};
	text-align: left;
	line-height: 1.6;
`;

const CTA = styled.button`
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
`;
