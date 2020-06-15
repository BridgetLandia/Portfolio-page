import React from 'react';
import emailjs from 'emailjs-com';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

export default function footer() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_ckDFn74I5LyHmMVTfGL9S').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}
	return (
		<section id="contact">
			<div className="footer">
				<div className="info">
					<h2>Contact Info</h2>
				</div>
				<form name="contact_form" onSubmit={sendEmail}>
					<div className="form" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number" />
						<input className="contact" type="text" name="user_name" placeholder="Your Name" />
						<input className="contact" type="text" name="user_email" placeholder="E-mail" />
						<textarea className="message" type="text" name="message" placeholder="Your Message" />
						<input className="buttons" id="send_button" type="submit" value="Send" />
					</div>
				</form>
				<div className="icon_wrapper">
					<a
						href="https://github.com/BridgetLandia?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img className="icons" id="github" src={github} alt="repos" />
					</a>
					<a
						href="https://www.linkedin.com/in/brigitta-t%C3%B3th-5b2a08102"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img className="icons" src={linkedin} alt="linkedin" />
					</a>
					<div>
						<p>Email: bridgetlandia@gmail.com</p>
					</div>
				</div>
				<div className="allRights">
					<p>ALL Rights Reserved @BridgetLandia 2020</p>
				</div>
			</div>
		</section>
	);
}
