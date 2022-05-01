import styled from 'styled-components';

export const Home: React.FC = () => {
	return (
		<Container>
			<H1>Home</H1>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const H1 = styled.h1`
	font-weight: 900;
`;
