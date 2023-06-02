import React from 'react';
import { Projects } from './components/projects';
import Header from './components/header';
import Welcome from './components/welcome';
import Footer from './components/footer';
import About from './components/about';
import Clouds from './components/clouds';
import {ThemeProvider} from "./hooks/useTheme";

function App() {
	return (
		<ThemeProvider>
		<div className="App">
			<Header />
			<Welcome />
			<About />
			<Projects />
			<Clouds />
			<Footer />
		</div>
		</ThemeProvider>
	);
}

export default App;
