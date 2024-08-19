import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
function NavBar() {

  return (
    <>
      <div className="navBar">
        {/* <div className="navBar--top">
          <div className="logo--container">
            <img
            className="logo"
            src="/images/Keyes-_-Assoc.-Bookkeeping-03.svg"
            alt=""
          />
          </div>
        </div> */}
        <div className="link--container">
          {/* <Link className="headerLink" to={"/"}>
              Home
              </Link> */}
          {/* <Link className="headerLink" to={"/services"}>
              Services
            </Link> */}
            <a href="#home" className="headerLink">
            Home
          </a>
          <div className="underLinkBorder"></div>
          <a href="#services" className="headerLink">
            Services
          </a>
          <div className="underLinkBorder"></div>
          {/* <Link className="headerLink" to={"/aboutus"}>
              About Us
            </Link> */}
          <a href="#aboutUs" className="headerLink">
            About Us
          </a>
          <div className="underLinkBorder"></div>
          {/* <Link className="headerLink" to={"/contact"}>
            Contact
          </Link> */}
          {/* <a href="#contact" className="headerLink">Contact Us</a>
          <div className="underLinkBorder"></div> */}
          <a href="mailto:keyesandassoc@outlook.com" className="headerLink">Contact Me</a>
          <div className="underLinkBorder"></div>
          <a  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564204352290"><FaSquareFacebook className="socialIcon"/></a>
          <div className="underLinkBorder"></div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
