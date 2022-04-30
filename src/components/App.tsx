import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import { GlobalStyle } from './utils';
import { Header } from './organisms';
import { Home, Recipes, Articles } from './pages';
//import logo from '../assets/logo.svg';

const App: React.FC = () => {
	return (
		<Container className='App'>
			<Router>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/recipes' element={<Recipes />} />
					<Route path='/articles' element={<Articles />} />
				</Routes>

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
		</Container>
	);
};

export default App;

const Container = styled.div`
	text-align: center;
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
