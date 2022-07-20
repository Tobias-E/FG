import styled from 'styled-components';

// Material UI
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Assets, interfaces & states
import { theme } from '../utils';

export const Checkboxes: React.FC = () => {
	return (
		<FormGroup>
			<FormControlLabel control={<CheckboxStyled color='primary' />} label='Mel' />
			<FormControlLabel control={<CheckboxStyled color='primary' />} label='Vand' />
			<FormControlLabel control={<CheckboxStyled color='primary' />} label='Sukker' />
			<FormControlLabel control={<CheckboxStyled color='primary' />} label='Salt' />
		</FormGroup>
	);
};

const CheckboxStyled = styled(Checkbox)`
	color: ${theme.buttonColor};
`;
