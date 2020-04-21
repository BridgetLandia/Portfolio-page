import React from 'react';
import { Projects } from './components/projects';
import Header from './components/header';
import Welcome from './components/welcome';
import Footer from './components/footer';
import About from './components/about';
import Clouds from './components/clouds';

function App() {
	return (
		<div className="App">
			<Header />
			<Welcome />
			<About />
			<Projects />
			<Clouds />
			<Footer />
		</div>
	);
}

export default App;
