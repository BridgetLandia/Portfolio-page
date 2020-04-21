import React from 'react';
import { Trail, animated } from 'react-spring/renderprops';
import me from '../assets/blackandwhite.png';

export default class About extends React.PureComponent {
	state = { toggle: true, items: [ 'item1', 'item2', 'item3', 'item4', 'item5' ] };
	toggle = () => this.setState((state) => ({ toggle: !state.toggle }));
	render() {
		const { toggle, items } = this.state;
		return (
			<div className="cool">
				<div
					style={{
						backgroundColor: 'black',
						position: 'relative',
						width: '100%',
						height: '100%'
					}}
				>
					<div id="probe_text">
						<div id="Welcome">
							<div className="wrapper_welcome">
								<h2>Welcome Stranger!</h2>
								<div id="welcome_text">
									I enjoy building nice and original things. Reaching that with high performance and
									User experience in mind. Solving problems with software is my passion. Google is my
									best friend and I count pixels in my dreams.
								</div>
								<div id="welcome_text">
									I enjoy building nice and original things. Reaching that with high performance and
									User experience in mind. Solving problems with software is my passion. Google is my
									best friend and I count pixels in my dreams.
								</div>
								<div id="click">
									If you wanna see me balck and white, just Click on the Bright-side.
								</div>
							</div>
						</div>
					</div>
					<div id="bubble">
						<div className="profil">
							<img id="blackandwhite" src={me} alt="me" />
						</div>
					</div>

					<Trail
						native
						reverse={toggle}
						initial={null}
						items={items}
						from={{ x: -1 }}
						to={{ x: toggle ? 100 : 0 }}
					>
						{(item) => ({ x }) => (
							<animated.div
								className="box"
								onClick={this.toggle}
								style={{
									transform: x.interpolate((x) => `translate3d(${x}%,0,0)`)
								}}
							/>
						)}
					</Trail>
				</div>
			</div>
		);
	}
}
