import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function NavBar() {
  return (
    <>
      <div className="navBar">
        {/* <img className="logo" src="/public/images/Bookkeeping-02.jpg" alt="" /> */}
        <div className="link--container">
          <Link className="headerLink" to={"/"}>
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
      <div className="icon--container">
        <a href="">
        <FaLinkedinIn className="socialIcon" />
        </a>
        <a href="">
        <FaFacebookF className="socialIcon" />
        </a>
      </div>
      </div>
    </>
  );
}
export default NavBar;
