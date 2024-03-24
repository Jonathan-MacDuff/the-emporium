import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/musings">Musings</NavLink> */}
        </nav>
    )

};

export default NavBar;
