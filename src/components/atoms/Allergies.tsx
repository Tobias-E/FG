// import { useState } from 'react';
import styled from 'styled-components';

// Assets, interfaces & states
import { AllergySVG } from '../../assets/icons/allergi';

// Export
export const Allergies: React.FC = () => {
	return (
		<div>
			<IconContainer>
				<Icon>
					<Img src={AllergySVG.fish} />
					<P>Fisk</P>
				</Icon>
				<Icon>
					<Img src={AllergySVG.shellfish} />
					<P>Skaldyr</P>
				</Icon>
				<Icon>
					<Img src={AllergySVG.egg} />
					<P>Æg</P>
				</Icon>
				<Icon>
					<Img src={AllergySVG.laktose} />
					<P>Laktose</P>
				</Icon>
			</IconContainer>
			<H4>Tips til at gøre retten allergivenlig</H4>
			<ul>
				<Li>Brug laktosefri fløde</Li>
				<Li>Fjern skaldyren</Li>
			</ul>
		</div>
	);
};

const IconContainer = styled.div`
	padding: 0 0.2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Icon = styled.div`
	margin: 0.5rem 0.4rem;
	display: flex;
	flex-direction: column;
`;

const Img = styled.img`
	max-height: 3.8rem;
	width: 3.8rem;
`;

const P = styled.p`
	margin: 0.4rem auto 0 auto;
`;

const H4 = styled.h4`
	text-align: start;
	margin: 2rem 0 1rem 0;
`;

const Li = styled.li`
	text-align: left;
`;
