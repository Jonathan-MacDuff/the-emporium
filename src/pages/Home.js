import { NavLink } from "react-router-dom";

function Home() {
    return (
        <main>
            <h1 id="homeHeader">Welcome</h1>
            <div id="homePanelContainer">                
                <NavLink 
                className="homePanel" 
                id="aboutPanel" 
                to="/about"
                >About</NavLink>
                
                <NavLink 
                className="homePanel" 
                id="contactPanel" 
                to="/contact"
                >Contact</NavLink>
                
                <NavLink 
                className="homePanel" 
                id="musingsPanel" 
                to="/musings"
                >Musings</NavLink>
                               
                <NavLink 
                className="homePanel" 
                id="workPanel" 
                to="/work"
                >Work</NavLink>                
            </div>
        </main>
    )
}

export default Home;
