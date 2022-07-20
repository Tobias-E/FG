import { useState } from 'react';
import styled from 'styled-components';

// Material UI
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Assets, interfaces & states
import { theme } from '../utils';

const steps = [
	{
		label: 'Select campaign settings',
		description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
	},
	{
		label: 'Create an ad group',
		description: 'An ad group contains one or more ads which target a shared set of keywords.',
	},
	{
		label: 'Create an ad',
		description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
	},
];

export const Steps: React.FC = () => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box>
			<Stepper orientation='vertical'>
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabelStyled>{step.label}</StepLabelStyled>
						<StepContentStyled TransitionProps={{ in: true }}>
							<TypographyStyled>{step.description}</TypographyStyled>
						</StepContentStyled>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

const StepContentStyled = styled(StepContent)`
	display: block;
	.MuiTypography-root-bXavBU {
		display: flex;
	}
`;

const StepLabelStyled = styled(StepLabel)`
	color: ${theme.textColor};
	&:active {
		color: ${theme.textColor};
	}
	.MuiStepLabel-label-hpWjaz {
		color: ${theme.textColor};
	}
	.MuiSvgIcon-root-ffbdHq {
		color: ${theme.buttonColor};
	}
	.MuiStepIcon-text {
		fill: ${theme.textColor};
		font-weight: 800;
	}
	.MuiStepLabel-label-hpWjaz {
		font-weight: 600;
	}
`;

const TypographyStyled = styled(Typography)`
	color: ${theme.textColor};
`;