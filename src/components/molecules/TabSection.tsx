import { useState } from 'react';
import styled from 'styled-components';

// Material UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Assets, interfaces & states
import { theme } from '../utils';

// Components
import { Checkboxes, Steps, Allergies } from '../atoms';

// Interface
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export const TabSection: React.FC = () => {
	function TabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		);
	}

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Card>
			<BoxStyled sx={{ width: '100%' }}>
				<Tabs value={value} onChange={handleChange} textColor='primary' centered>
					<TabStyled label='Ingredienser' {...a11yProps(0)} />
					<TabStyled label='Opskrift' />
					<TabStyled label='Allergier' />
				</Tabs>
				<TabPanel value={value} index={0}>
					<Checkboxes />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Steps />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Allergies />
				</TabPanel>
			</BoxStyled>
		</Card>
	);
};

const Card = styled.div`
	padding: 2.5rem 4vw;
`;

const BoxStyled = styled(Box)`
	padding: 0.3rem;
	border-radius: 12px;
	background-color: ${theme.cardColor};
`;
const TabStyled = styled(Tab)`
	color: ${theme.textColor};
	border-radius: 12px 12px 0 0;
`;
