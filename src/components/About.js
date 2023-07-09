import React from 'react';
import { Container, Row, Col } from 'reactstrap';
export default function About()  {

		return (
			<Container className="about_container w-100">
					<Row>
						<Col md="7" >

						</Col>
						<Col  md="5" className="profile_picture_section">
								<div className="personal_intro_text">
									<p className="personal_intro_paragraph">
										Good apps make life easier that is why I am passionate about software
										development. I enjoy building nice and original apps with the best practices in
										mind.
									</p>
									<p className="personal_intro_paragraph">
										In my opinion good code is reusable and readable for the next developer who touches it.
									</p>
								</div>
							<img
								id="profile_picture_img"
								src="https://res.cloudinary.com/dfjaln3y4/image/upload/v1595661005/bridgetlandia/blackandwhite_fd4iv5.png"
								alt="me"
							/>
							<div className="profile_motto">
								<p>I like people and machines in this order.</p>
							</div>
						</Col>
					</Row>
			</Container>
		);

}
