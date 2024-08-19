import NavBar from "../components/NavBar";
import LogoContainer from "../components/LogoContainer";
import HomeSmallPage from "../SmallPages/HomeSmallPage";
import AboutUsSmallPage from "../SmallPages/AboutUsSmallPage";
import ContactSmallPage from "../SmallPages/ContactSmallPage";
import ServicesSmallPage from "../SmallPages/ServicesSmallPage";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
    <div className="mainContainer">
      <NavBar />
      <LogoContainer/>
      <HomeSmallPage />
      <ServicesSmallPage/>
      <AboutUsSmallPage/>
      {/* <ContactSmallPage/> */}
      <Footer />
    </div>
    </>
  );
}
export default HomePage;
