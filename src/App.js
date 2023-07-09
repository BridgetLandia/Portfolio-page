import React from 'react';
import { Projects } from './components/Projects';
import NavbarComponent from './components/NavbarComponent';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import {ThemeProvider} from "./hooks/useTheme";

function App() {
	return (
		<ThemeProvider>
		<div className="App">
			<NavbarComponent  />
			<Welcome />
			<Skills />
			<Projects />
			<About />
			<Footer />
		</div>
		</ThemeProvider>
	);
}

export default App;
