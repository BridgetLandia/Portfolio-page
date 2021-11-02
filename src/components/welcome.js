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
			<div className="container_marble">
				<animated.div style={fadein} className="first_line">
					<div>
						<div
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-left"
						>
							<p>Hello World!</p>
						</div>
						<div>
							<p
								className="intro"
								ref={(ref) => {
									setRef(ref);
								}}
								data-aos="fade-right"
							>
								I am Brigitta, a web developer with an eye for UI and UX design. Take a look at my
								projects!
							</p>
						</div>
						<Link to="projects_container" smooth={true} offset={-100} duration={500}>
							<button className="buttons">View My Work</button>
						</Link>
					</div>
				</animated.div>
			</div>
		</div>
	);
}
