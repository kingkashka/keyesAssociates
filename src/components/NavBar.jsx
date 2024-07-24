import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
    <Link className="headerLink" to={"/"} >
    Accessories
    </Link>
    <Link className="headerLink">
    AED NAvigator
    </Link>
    <Link className="headerLink">
    Classes
    </Link>
    <Link className="headerLink">
    FAQ
    </Link>
    <Link className="headerLink">
    About Us
    </Link>    
        </div>
    )
}
export default NavBar;