import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import htmlicon from '../assets/html5.svg';
import booticon from '../assets/bootstrap.svg';
import cssicon from '../assets/css.svg';
import react from '../assets/reactlogo.word.svg';
import mongodb from '../assets/mongodb.svg';
import vuejs from '../assets/vuejs.svg';
import vuetify from '../assets/vuetify.svg';
import nodejs from '../assets/nodejs.svg';
import AOS from 'aos';
import bird4 from '../assets/bird4.svg';
import bird5 from '../assets/bird5.svg';
import bird6 from '../assets/bird6.svg';
import tailwind from '../assets/tailwind.png'

export default function Skills() {
	// eslint-disable-next-line
	const [ ref, setRef ] = useState([]);
	useEffect(() => {
		AOS.init({
			duration: 2000
		});
	});

	return (
		<section>
			<div className="clouds">
				<Container className="skills">
					<Row className="section_title mx-0">
						<h3
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-left"
							className="stack"
						>
							Skills
						</h3>

					</Row>
					<Row className="d-flex justify-content-between mx-0">
						<Col sm="4" text="center" className="skill-box mx-0">
							<img
								ref={(ref) => {
									setRef(ref);
								}}
								data-aos="fade-right"
								className="skill_icon"
								src={bird6}
								alt=""
							/>
							<div>
								<h3>User Friendly</h3>
							</div>
							<div className="skills_text px-2">
								I always try to follow intuitive design patterns and make easily understandable UI
								elements for the perfect UX experience.
							</div>
						</Col>
						<Col sm="4" className="skill-box mx-0">
							<img
								ref={(ref) => {
									setRef(ref);
								}}
								data-aos="fade-right"
								className="skill_icon"
								src={bird4}
								alt=""
							/>
							<div>
								<h3>Creative</h3>
							</div>
							<div className="skills_text px-2">
								I like to experiment with different colors, shapes and movements. Tweeking small details
								is a good way to engage your audience.
							</div>
						</Col>
						<Col sm="4" className="skill-box mx-0">
							<img
								ref={(ref) => {
									setRef(ref);
								}}
								data-aos="fade-left"
								className="skill_icon"
								src={bird5}
								alt=""
							/>
							<div>
								<h3>Problem Solver</h3>
							</div>
							<div className="skills_text px-2">
								Finding the optimal technology is crucial for me in every
								project. I believe in applying complexity only when necessary.
							</div>
						</Col>
					</Row>

					<Row className="section_title mx-0">
						<h3
							ref={(ref) => {
								setRef(ref);
							}}
							data-aos="fade-left"
							className="stack"
						>
							Stacks
						</h3>
					</Row>
					<section className="stack_section">
					<Row className="stack_row">
						<Col>
							<img className="stack_icon" src={react} alt="React logo" />
						</Col>
						<Col>
							<img className="stack_icon" src={htmlicon} alt="Html icon" />
						</Col>
						<Col>
							<img className="stack_icon" src={booticon} alt="Bootstrap icon" />
						</Col>
						<Col>
							<img className="stack_icon" src={cssicon} alt="Css icon" />
						</Col>
					</Row>
					<Row className="stack_row">
						<Col>
							<img className="stack_icon" src={mongodb} alt="React logo" />
						</Col>
						<Col>
							<img className="stack_icon" src={vuetify} alt="Html icon" />
						</Col>
						<Col>
							<img className="stack_icon" src={vuejs} alt="Bootstrap icon" />
						</Col>
						<Col>
							<img className="stack_icon" src={nodejs} alt="Css icon" />
						</Col>
					</Row>
					<Row className="stack_row">
						<Col>
							<img  className="stack_icon_resize" src={tailwind} alt="React logo" />
						</Col>
					</Row>
					</section>
				</Container>
			</div>
		</section>
	);
}
