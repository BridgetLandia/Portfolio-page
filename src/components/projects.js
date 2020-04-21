import React from 'react';
import expensify from '../assets/expensify.png';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

export const Projects = (props) => {
	return (
		<div>
			<Container fluid="md" id="projects_container">
				<Row>
					<div className="my_projects_title">
						<h1>My projects</h1>
					</div>
				</Row>
				<Row>
					<Col md="4">
						<Card className="projects">
							<CardImg top width="100%" />
							<CardBody>
								<CardTitle>Trello Clone</CardTitle>
								<CardSubtitle>Made with React Hooks</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
								<Button className="buttons">View</Button>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="projects">
							<CardImg top width="100%" />
							<CardBody>
								<CardTitle>Pomodoro App</CardTitle>
								<CardSubtitle>Card subtitle</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
								<Button className="buttons">View</Button>
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Card className="projects">
							<CardImg top width="100%" src={expensify} />
							<CardBody>
								<CardTitle>Expensify App</CardTitle>
								<CardSubtitle>React Redux</CardSubtitle>
								<CardText>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</CardText>
								<Button className="buttons">
									<a href="https://elso-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
										View
									</a>
								</Button>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
