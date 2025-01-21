/* psychologists.css */
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo and Title Container */}
            <div className="logo-container">
                <img src="images.png" alt="Logo" className="logo" />
                <span className="title">MindCare</span>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/psychologists" className="nav-link">Psychologists</Link>
                <Link to="/therapies" className="nav-link">Therapies</Link>
            </div>
        </nav>
    );
}
