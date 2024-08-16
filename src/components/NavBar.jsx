import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="logo--container">
          <img
            className="logo"
            src="/images/Keyes-_-Assoc.-Bookkeeping-03.svg"
            alt=""
          />
        </div>
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
          {/* <div className="icon--container">
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564204352290">
              <FaLinkedinIn className="socialIcon" />
            </a>
            <a href="https://www.linkedin.com/in/keyes-and-associates-4b4738322?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7d3B0Oa%2FTdeJhfNdkH2X%2Bw%3D%3D">
              <FaFacebookF className="socialIcon" />
            </a>
          </div> */}
      </div>
    </>
  );
}
export default NavBar;
