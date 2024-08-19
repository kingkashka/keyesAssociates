import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
          <a href="#contact" className="headerLink">Contact Us</a>
          <div className="underLinkBorder"></div>
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
