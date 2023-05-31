import React from 'react';

export default class About extends React.PureComponent {
	render() {
		return (
			<div className="about_container">
					<div id="personal_intro_text_wrapper">
								<div className="personal_intro_text">
									<p>
										Good apps make life easier that is why I am passionate about software
										development. I enjoy building nice and original apps with the best practices in
										mind.
									</p>
									<p>I love being creative and I truly thrive when faced with a challenging problem to solve.</p>
								</div>
							</div>
						<div className="profile_picture_section">
							<img
								id="profile_picture_img"
								src="https://res.cloudinary.com/dfjaln3y4/image/upload/v1595661005/bridgetlandia/blackandwhite_fd4iv5.png"
								alt="me"
							/>
						</div>
			</div>
		);
	}
}
