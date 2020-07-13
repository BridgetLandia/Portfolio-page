import React, { useState } from 'react';
import useInputState from './useInputState'
import emailjs from 'emailjs-com';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

function Footer(props) {
	const {
		className
	  } = props;
	const [ valueName, handleChangeName, resetName ] = useInputState("");
	const [ valueEmail, handleChangeEmail, resetEmail ] = useInputState("");
	const [ valueMessage, handleChangeMessage, resetMessage ] = useInputState("");
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

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
		resetName();
		resetEmail();
		resetMessage();
		}
		
	return (
		<section id="contact">
			<div className="footer">
				<div className="info">
					<h2>Contact Info</h2>
				</div>
				<form name="contact_form" onSubmit={sendEmail}>
					<div className="form">
						<input type="hidden" name="contact_number" />
						<input className="contact" type="text" name="user_name" value={valueName} onChange={handleChangeName} placeholder="Your Name" />
						<input className="contact" type="text" name="user_email" value={valueEmail} onChange={handleChangeEmail} placeholder="E-mail" />
						<textarea className="message" type="text" name="message" value={valueMessage} onChange={handleChangeMessage} placeholder="Your Message" />
						<input className="buttons" id="send_button" type="submit" value="Send" onClick={toggle}/>
					</div>
				</form>
				<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Thank you for your Message!</ModalHeader>
				<ModalBody>
				  <p>I will contact you as soon as possible.</p>
				  <p>Have a great day!</p>
				</ModalBody>
				<ModalFooter>
				  <Button className="buttons" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			  </Modal>
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

export default Footer