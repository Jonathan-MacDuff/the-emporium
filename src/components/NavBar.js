import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav className="NavBar">
            <NavLink to="/" className="NavLink">Home</NavLink>
            <NavLink to="/about" className="NavLink">About</NavLink>
            <NavLink to="/contact" className="NavLink">Contact</NavLink>
            <NavLink to="/musings" className="NavLink">Musings</NavLink>
            <NavLink to="/work" className="NavLink">Work</NavLink>
        </nav>
    )
};

export default NavBar;
