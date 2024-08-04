import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
    <Link className="headerLink" to={"/"} >
    Home
    </Link>
    <Link className="headerLink" to={"/services"}>
    Services
    </Link>
    <Link className="headerLink" to={"/aboutus"}>
    About Us
    </Link>    
    <Link className="headerLink" to={"/contact"}> 
    Contact
    </Link>
        </div>
    )
}
export default NavBar;