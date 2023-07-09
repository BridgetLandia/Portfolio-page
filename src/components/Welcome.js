import React from 'react';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';
import AOS from 'aos';

export default function Welcome() {
	const fadein = useSpring(
		{
			opacity: 0.8,
			from: { opacity: 0 },
			leftMargin: -100
		},
		{
			config: {
				delay: 7000,
				tension: 58,
				friction: 60
			}
		}
	);
		// eslint-disable-next-line
	const [ ref, setRef ] = useState([]);
	useEffect(() => {
		AOS.init({
			duration: 2000
		});
	});
	return (
		<div>
			<div className="clouds_welcome_section">
				<span className="moon"></span>
				<animated.div style={fadein} className="welcome_message_wrapper">
						<div
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-left"
						>
							Hello World!
						</div>
							<div
								ref={(ref) => {
									setRef(ref);
								}}
								data-aos="fade-right"
							>
								I'm Brigitta,<br/> a web developer<br/> with a keen eye for UI/UX design.
							</div>
						<Link to="projects_container" smooth={true} offset={-100} duration={500}>
							<button className="buttons">View My Work</button>
						</Link>
				</animated.div>
			</div>
		</div>
	);
}
