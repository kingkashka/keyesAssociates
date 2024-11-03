import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";
import { useEffect, useState } from "react";

function NavBar(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 725);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 725);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <nav className="navbar navbar-expand-lg ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="mailto:support@keyesassocbookkeeping.com?subject=New%20Lead%20from%20K%26A&body=Your%20Full%20Name%3A%20%0A%0ACompany%20Name%3A%20%0A%0AType%20of%20Business%3A%20%0A%0APhone%20Number%3A%20%28XXX%29-%20XXX-%20XXXX%20%0A%0ABriefly%20describe%20how%20we%20can%20help%3A%20%0A"
                className="nav-link"
              >
                Email Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://keyestosuccess7.wordpress.com/"
                className="nav-link"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://keyestosuccess.podbean.com/ "
                className="nav-link"
              >
                Podcast
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564204352290"
                className="nav-link"
              >
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/company/keyes-and-associates-bookkeeping-llc"
                className="nav-link"
              >
                Linkedin
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.Instagram.com/gregoraykeyes"
                className="nav-link"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <div className="navBar w-auto">
        <div className="link--container w-auto">
          <a href="#home" className="headerLink">
            Home
          </a>
          <div className="underLinkBorder w-auto"></div>
          <a href="#services" className="headerLink">
            Services
          </a>
          <div className="underLinkBorder w-auto"></div>
          {/* <a href="#pricing" className="headerLink">
            Pricing
          </a>
          <div className="underLinkBorder w-auto"></div> */}
          <a href="#aboutUs" className="headerLink">
            About Us
          </a>
          <div className="underLinkBorder w-auto"></div>
          <a href="#contact" className="headerLink">
            Contact Us
          </a>
          <div className="underLinkBorder w-auto"></div>
          <a
            href="mailto:support@keyesassocbookkeeping.com?subject=New%20Lead%20from%20K%26A&body=Your%20Full%20Name%3A%20%0A%0ACompany%20Name%3A%20%0A%0AType%20of%20Business%3A%20%0A%0APhone%20Number%3A%20%28XXX%29-%20XXX-%20XXXX%20%0A%0ABriefly%20describe%20how%20we%20can%20help%3A%20%0A"
            className="headerLink"
          >
            Email Us
          </a>
          <div className="underLinkBorder w-auto"></div>
          <a
            href="https://keyestosuccess7.wordpress.com/"
            className="headerLink"
          >
            Blog
          </a>
          <div className="underLinkBorder w-auto"></div>
          <a
            href="https://keyestosuccess.podbean.com/"
            className="headerLink"
          >
            Podcast
          </a>
          <div className="underLinkBorder w-auto"></div>
          <div className="w-auto">
          <a
            href="https://www.facebook.com/keyesandassocbookkeeping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook className="socialIcon" />
          </a>
          <span><a
            href="https://www.linkedin.com/company/keyes-and-associates-bookkeeping-llc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="socialIcon" />
          </a></span>
          <span><a
            href="https://www.Instagram.com/gregoraykeyes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="socialIcon" />
          </a></span>
          </div>
          <div className="underLinkBorder w-auto"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
