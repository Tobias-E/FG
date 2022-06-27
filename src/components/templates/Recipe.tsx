import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Assets, interfaces & states
import { theme } from '../utils';
import butterChicken from '../../assets/img/butterchickenBig.png';
import { ReactComponent as Clock } from '../../assets/icons/whiteClock.svg';

/* interface IRecipe {
	title: string;
	time: string;
} */

/* const { TabPane } = Tabs;

const { Step } = Steps; */

export const Recipe: React.FC = () => {
	const [counter, setCounter] = useState(1);

	const increase = () => {
		setCounter((count) => count + 1);
	};
	const decrease = () => {
		if (counter > 1) {
			setCounter((count) => count - 1);
		}
	};

	// Tabs
	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	// Steps
	/* 	const [current, setCurrent] = useState(0);
	const onChange = (value: number) => {
		console.log('onChange::', current);
		setCurrent(value);
	}; */

	return (
		<Main>
			<Img src={butterChicken} />
			<h1>Butter chicken</h1>
			<StickerContainer>
				<Sticker>
					<Clock />
					<h5>1t 45m</h5>
				</Sticker>
				<Sticker>
					<Button onClick={decrease}>-</Button>
					<h4>{counter}</h4>
					<Button onClick={increase}>+</Button>
				</Sticker>
			</StickerContainer>
			<CardContainer className='card-container'>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Ingredienser' />
					<Tab label='Opskrift' />
					<Tab label='Allergier' />
					<Tab label='Info' />
				</Tabs>
				{/* 	<Tabs type='card'>
					<TabPane tab='Ingredienser' key='1'>
						<Ingredient>
							<CheckboxS />
							<p>500 gram - Kyllingebryst</p>
						</Ingredient>
						<Ingredient>
							<CheckboxS />
							<p>500 gram - Kyllingebryst</p>
						</Ingredient>
					</TabPane>
					<TabPane tab='Opskrift' key='2'>
						<Steps current={current} onChange={onChange}>
							<Step
								title='Step 1'
								description='Kom yoghurt i en skål sammen med hakkede tomater og finthakkede hvidløg.'
							/>
							<Step
								title='Step 2'
								description='Skræl en lille knold ingefær og riv den i sammen med garam masale (der er et indisk blandingskrydderi), spidskommen, gurkemeje, koriander og saften af en lime.'
							/>
							<Step title='Step 3' description='Rør det godt sammen.' />
						</Steps>
					</TabPane>
					<TabPane tab='Allergier' key='3'>
						<p>Content of Tab Pane 3</p>
						<p>Content of Tab Pane 3</p>
						<p>Content of Tab Pane 3</p>
					</TabPane>
					<TabPane tab='Info' key='4'>
						<p>Content of Tab Pane 4</p>
						<p>Content of Tab Pane 4</p>
						<p>Content of Tab Pane 4</p>
					</TabPane>
				</Tabs> */}
			</CardContainer>
		</Main>
	);
};

const Main = styled.main`
	padding: 6rem 0;
`;

const Img = styled.img`
	width: 55vw;
	height: 55vw;
`;

const StickerContainer = styled.div`
	padding: 0.3rem 1.8rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Sticker = styled.div`
	width: 28vw;
	height: 2.6rem;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	min-width: 20vw;
	background-color: ${theme.buttonColor};
	border-radius: 50px;
	border: none;
`;

const Button = styled.button`
	background-color: transparent;
	border: none;
	color: ${theme.textColor};
`;

// Tabs
const CardContainer = styled.div`
	padding: 2.5rem 1.5rem;
`;
/* .ant-tabs-nav-list {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.ant-tabs-tab {
		background-color: ${theme.cardColorInactive};
		border-radius: 10px 10px 0 0;
	}
	.ant-tabs-tab-active {
		background-color: ${theme.cardColor};
	}

	.ant-tabs-tab-btn {
		color: ${theme.textColor};
		padding: 1rem 0.5rem;
	}

	.ant-tabs-ink-bar {
		display: none;
	}

	.ant-tabs-tabpane {
		padding: 1rem;
		background-color: ${theme.cardColor};
		border-radius: 5px 5px 10px 10px;
	}

	.ant-tabs-tab-active {
		color: ${theme.cardColor};
	} */

// Checkbox
/* const CheckboxS = styled(Checkbox)`
	padding: 0 0.7rem 0 0.5rem;

	.ant-checkbox-input {
		accent-color: ${theme.checkboxColor};
	}
	.ant-checkbox-input:focus {
		outline: none;
	}
`;

const Ingredient = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	p {
		margin: 0.8rem 0;
	}
`; */
