import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import Button from "react-bootstrap/Button";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const[scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    

    return (
        <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/#home">
                    <img src={logo} alt= "Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className="navbar-text-container" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <span  className="navbar-text-left">
                        {/* <Link>test</Link> */}
                        <Nav.Link href="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </span>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""/></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                            <a href="#"><img src={navIcon3} alt=""/></a>
                        </div>
                        <Nav.Link href="connect" onClick={() => onUpdateActiveLink('connect')}>
                            <Button>Let's Connect</Button>
                        </Nav.Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}