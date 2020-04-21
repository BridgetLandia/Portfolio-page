import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logo.png';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';

const Header = (props) => {
	const [ collapsed, setCollapsed ] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);
	const fadeinme = useSpring(
		{ opacity: 1, marginTop: 0, from: { opacity: 0 } },
		{
			config: {
				tension: 260,
				friction: 240
			}
		}
	);
	return (
		<animated.div style={fadeinme}>
			<Navbar id="mainNavbar" dark expand="md" fixed="top">
				<Link to="projects_container" smooth={true} offset={-100} duration={500}>
					<NavItem className="nav-brand">
						<img id="logo" src={logo} alt="logo" />

						<span />
					</NavItem>
				</Link>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav className="ml-auto" navbar>
						<Link
							className="nav-link"
							to="cool"
							activeClass="active"
							smooth={true}
							offset={-100}
							duration={500}
						>
							<NavItem onClick={toggleNavbar} className="nav-item">
								About
							</NavItem>
						</Link>
						<NavItem className="nav-item">
							<NavLink className="nav-link" href="/components/">
								CV
							</NavLink>
						</NavItem>
						<Link
							className="nav-link"
							to="skills"
							activeClass="active"
							smooth={true}
							offset={-100}
							duration={500}
						>
							<NavItem onClick={toggleNavbar} className="nav-item">
								Skills
							</NavItem>
						</Link>
						<Link
							className="nav-link"
							to="projects_container"
							activeClass="active"
							smooth={true}
							offset={-100}
							duration={500}
						>
							<NavItem onClick={toggleNavbar} className="nav-item">
								Projects
							</NavItem>
						</Link>
						<NavItem className="nav-item">
							<NavLink
								href="https://github.com/BridgetLandia?tab=repositories"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</NavLink>
						</NavItem>
						<Link className="nav-link" to="contact" smooth={true} offset={-100} duration={500}>
							<NavItem className="nav-item" onClick={toggleNavbar}>
								Contact
							</NavItem>
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</animated.div>
	);
};

export default Header;
