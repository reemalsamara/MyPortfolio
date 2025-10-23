import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="RS Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
