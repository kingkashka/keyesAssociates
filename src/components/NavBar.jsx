import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
function NavBar() {

  return (
    <>
      <div className="navBar w-auto">
        <div className="link--container w-auto">
            <a href="#home" className="headerLink">
            Home
          </a>
          <div className="underLinkBorder"></div>
          <a href="#services" className="headerLink">
            Services
          </a>
          <div className="underLinkBorder"></div>
          <a href="#aboutUs" className="headerLink">
            About Us
          </a>
          <div className="underLinkBorder"></div>
          <a href="#contact" className="headerLink">Contact Us</a>
          <div className="underLinkBorder"></div>
          <a href="mailto:KeyesandAssoc@outlook.com?subject=New%20Lead%20from%20K%26A&body=Your%20Full%20Name%3A%20%0A%0ACompany%20Name%3A%20%0A%0AType%20of%20Business%3A%20%0A%0APhone%20Number%3A%20%28XXX%29-%20XXX-%20XXXX%20%0A%0ABriefly%20describe%20how%20we%20can%20help%3A%20%0A" className="headerLink">Email Us</a>
          <div className="underLinkBorder"></div>
          <a  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564204352290"><FaSquareFacebook className="socialIcon"/></a>
          <div className="underLinkBorder"></div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
