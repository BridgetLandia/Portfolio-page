import React from 'react';
import expensify from '../assets/expensify.png';
import restaurant from '../assets/restaurant-app.png';
import sutimama from '../assets/sutimama.png'
import quiz from '../assets/quiz.jpg'
import { CardDeck, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';




export const Projects = (props) => {
	return (
		<div>
			<Container fluid="md" id="projects_container">
				<Row>
					<div className="my_projects_title">
						<h1>My projects</h1>
					</div>
				</Row>
				<Row className="projects_row">
					<CardDeck>
						<Card className="projects">
							<CardImg top width="100%" />
							<CardBody>
								<CardTitle className="project_title">Trello Clone</CardTitle>
								<CardSubtitle>Made with React Hooks</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
								<Button className="buttons">View</Button>
								<Button className="buttons">GitHub</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg top width="100%" src={restaurant}/>
							<CardBody>
								<CardTitle className="project_title">Restaurant App</CardTitle>
								<CardSubtitle>Made with Vue, Vuex, Firebase</CardSubtitle>
								<CardText>
									Stylish restaurant app for smaller businesses with
									Admin panel for editing the Menu and handling incoming orders.
								</CardText>
								<Button className="buttons">
								<a className="project_links" href="https://fruit-soup.netlify.app/" target="_blank" rel="noopener noreferrer">
										View
								</a>
								</Button>
								<Button className="buttons">GitHub</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg top width="100%" src={expensify} />
							<CardBody>
								<CardTitle className="project_title">Expensify App</CardTitle>
								<CardSubtitle>React Redux</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
								<Button className="buttons">
									<a className="project_links" href="https://elso-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
										View
									</a>
								</Button>
								<Button className="buttons">GitHub</Button>
							</CardBody>
						</Card>
					</CardDeck>
				</Row>
				<Row className="projects_row">
					<CardDeck>
						<Card className="projects">
							<CardImg top width="100%" />
							<CardBody>
								<CardTitle className="project_title">Trello Clone</CardTitle>
								<CardSubtitle>Made with React Hooks</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
								<Button className="buttons">View</Button>
								<Button className="buttons">GitHub</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg top width="100%" src={sutimama} />
							<CardBody>
								<CardTitle className="project_title">Knit and Bake</CardTitle>
								<CardSubtitle>Small business website made with React</CardSubtitle>
								<CardText>
									Small business website with a shop section.
								</CardText>
								<Button className="buttons">
									<a className="project_links" href="https://sutimama-kotodeje.herokuapp.com/" target="_blank" rel="noopener noreferrer">
										View
									</a>
								</Button>
								<Button className="buttons">GitHub</Button>
							</CardBody>
						</Card>
						<Card className="projects">
							<CardImg top width="100%" src={quiz} />
							<CardBody>
								<CardTitle className="project_title">Quiz App</CardTitle>
								<CardSubtitle>Made with React hooks and TypeScript</CardSubtitle>
								<CardText>
									Sleek Quiz App with category and difficulty level picker
									and accomplishment review.
								</CardText>
								<Button className="buttons">
									<a className="project_links" href="https://the-great-quiz.netlify.app" target="_blank" rel="noopener noreferrer">
										View
									</a>
								</Button>
								<Button className="buttons">GitHub</Button>
							</CardBody>
						</Card>
					</CardDeck>
				</Row>
			</Container>
		</div>
	);
};
