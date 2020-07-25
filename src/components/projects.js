import React from 'react';

import {
	CardDeck,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Container,
	Row
} from 'reactstrap';

export const Projects = (props) => {
	return (
		<div className="projects_container_wrapper">
			<Container fluid="md" id="projects_container">
				<Row className="my_projects_title">
					<div>
						<h1>My projects</h1>
					</div>
				</Row>
				<Row>
					<CardDeck className="projects_row">
						<Card className="projects">
							<CardImg
								top
								width="100%"
								id="Tooltip"
								src="https://res.cloudinary.com/dfjaln3y4/image/upload/v1595674898/bridgetlandia/restaurant-app_njrcbn.png"
							/>
							<CardBody>
								<CardTitle className="project_title">Restaurant App</CardTitle>
								<CardSubtitle className="project_subtitle">Made with Vue, Vuex, Firebase</CardSubtitle>
								<CardText>
									Restaurant app for smaller businesses with admin panel to edit the Menu and handle
									incoming orders.
								</CardText>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://fruit-soup.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live
									</a>
								</Button>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://github.com/BridgetLandia/restaurant-app"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg
								top
								width="100%"
								src="https://res.cloudinary.com/dfjaln3y4/image/upload/v1595674903/bridgetlandia/expensify_m8nayq.png"
							/>
							<CardBody>
								<CardTitle className="project_title">Expensify App</CardTitle>
								<CardSubtitle className="project_subtitle">
									Made with React, Redux, Firebase
								</CardSubtitle>
								<CardText>
									Keep track of your expenses, add, edit, delete, filter them. Use your google account
									to sign in.
								</CardText>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://elso-app.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live
									</a>
								</Button>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://github.com/BridgetLandia/expensify-app"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg
								top
								width="100%"
								src="https://res.cloudinary.com/dfjaln3y4/image/upload/v1595674955/bridgetlandia/quiz_m5bpyz.jpg"
							/>
							<CardBody>
								<CardTitle className="project_title">Quiz App</CardTitle>
								<CardSubtitle className="project_subtitle">
									Made with React hooks and TypeScript
								</CardSubtitle>
								<CardText>
									Quiz App with category and difficulty level picker plus accomplishment review.
								</CardText>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://the-great-quiz.netlify.app"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live
									</a>
								</Button>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://github.com/BridgetLandia/Quiz-app"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg
								top
								width="100%"
								src="https://res.cloudinary.com/dfjaln3y4/image/upload/v1595674911/bridgetlandia/sutimama_vwregy.png"
							/>
							<CardBody>
								<CardTitle className="project_title">Knit and Bake</CardTitle>
								<CardSubtitle className="project_subtitle">Made with React, React-router</CardSubtitle>
								<CardText>Small business website with a shop section.</CardText>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://sutimama-kotodeje.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live
									</a>
								</Button>
								<Button className="buttons">
									<a
										className="project_links"
										href="https://github.com/BridgetLandia/Knit-Style"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</Button>
							</CardBody>
						</Card>
					</CardDeck>
				</Row>
			</Container>
		</div>
	);
};
