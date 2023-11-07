import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faBriefcase, faPlane, faUser, faUsers, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import logo from "./logo_s.png";
import Button from 'react-bootstrap/Button';
function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/" className="list">
                    <img src={logo} alt="Logo" width="150" height="30" />
                </Link>
            </div>

            <ul>
                <Link to="/services" className="list">
                    <Button size="sm">
                    <FontAwesomeIcon icon={faCogs} /> Services
                    </Button >
                </Link>
                <Link to="/industries" className="list">
                    <Button size="sm">
                    <FontAwesomeIcon icon={faBriefcase} /> Industries
                    </Button>
                </Link>
                <Link to="/insights" className="list">
                    <FontAwesomeIcon icon={faPlane} /> Insights
                </Link>
                <Link to="/about" className="list">
                    <FontAwesomeIcon icon={faUser} /> About
                </Link>
                <Link to="/careers" className="list">
                    <FontAwesomeIcon icon={faUsers} /> Careers
                </Link>
                <Link to="/contact" className="list">
                    <FontAwesomeIcon icon={faEnvelope} /> Contact
                </Link>
            </ul>
            <ul>
                <Link to="/login" className="list">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
                <Link to="/signup" className="list">
                    <FontAwesomeIcon icon={faUserPlus} /> Signup
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
