import React from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Assets, interfaces & states
import { theme } from './utils';

// Import Components
import { GlobalStyle } from './utils';
import { Header, Footer, RecipeList } from './organisms';
import { Home, Recipes, Articles } from './pages';
import { Recipe } from './templates';
//import logo from '../assets/logo.svg';

const App: React.FC = () => {
	return (
		<Container className='App'>
			<RecoilRoot>
				<Router>
					<GlobalStyle />
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/recipes' element={<Recipes />} />
						<Route
							path='/recipes/all'
							element={<RecipeList title={'Alle opskrifter'} id={'all'} />}
						/>
						<Route path='/recipes/all/recipe' element={<Recipe />} />
						<Route path='/articles' element={<Articles />} />
					</Routes>
					<Footer />
					{/* <header className='App-header'>
					<Rotate src={logo} className='App-logo' alt='logo'></Rotate>
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</header> */}
				</Router>
			</RecoilRoot>
		</Container>
	);
};

export default App;

const Container = styled.div`
	text-align: center;
	background-color: ${theme.primaryColor};
`;

/* 	.App-logo {
		height: 40vmin;
		pointer-events: none;
	} */

/* 	@media (prefers-reduced-motion: no-preference) {
		.App-logo {
			
		}
	} */

/* 	.App-header {
		background-color: #282c34;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
	}

	.App-link {
		color: #61dafb;
	}
`;

const rotate = keyframes`
from {
	transform: rotate(0deg);
  }
  to {
	transform: rotate(360deg);
  }
`;

const Rotate = styled.img`
	animation: ${rotate} infinite 20s linear; */
