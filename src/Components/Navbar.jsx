
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar =()=>{
    return (
        <nav className="navbar">
            {}
            <div className="logo-container">
                <img src="images.png" alt="Logo" className="logo" />
                <span className="title">MindCare</span>
            </div>

            {}
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/psychologists" className="nav-link">Psychologists</Link>
                <Link to="/therapies" className="nav-link">Therapies</Link>
            </div>
        </nav>
    );
}
export default Navbar