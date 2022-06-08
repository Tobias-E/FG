import styled from 'styled-components';

// Assets, interfaces & states
import { theme } from '../utils';
import { ReactComponent as Copyright } from '../../assets/icons/Copyright.svg';
import { ReactComponent as Insta } from '../../assets/icons/Instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/Facebook.svg';
import { ReactComponent as Mail } from '../../assets/icons/Mail.svg';

// Components

// Export
export const Footer: React.FC = () => {
	return (
		<Container>
			<CopyrightContainer>
				<Copyright />
				<I>Fika Gika</I>
			</CopyrightContainer>
			<SoMe>
				<a href='https://www.instagram.com'>
					<Insta />
				</a>

				<a href='https://www.facebook.com'>
					<Facebook />
				</a>
				<a href='mailto: info@fikagika.com'>
					<Mail />
				</a>
			</SoMe>
		</Container>
	);
};

const Container = styled.footer`
	height: 4rem;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${theme.cardColor};
`;

const CopyrightContainer = styled.div`
	width: 30vw;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const I = styled.i`
	align-self: center;
`;

const SoMe = styled.div`
	width: 30vw;
	display: flex;
	justify-content: space-around;
`;
