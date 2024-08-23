import NavBar from "../components/NavBar";
import LogoContainer from "../components/LogoContainer";
import HomeSmallPage from "../SmallPages/HomeSmallPage";
import AboutUsSmallPage from "../SmallPages/AboutUsSmallPage";
import ContactSmallPage from "../SmallPages/ContactSmallPage";
import ServicesSmallPage from "../SmallPages/ServicesSmallPage";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function HomePage(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 725);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 725);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    <div className={isMobile ? "mainContainerMobile w-auto col h-auto" : "mainContainer w-auto col h-auto"}>
      <NavBar />
      <LogoContainer/> 
      <HomeSmallPage />
      <ServicesSmallPage/>
      <AboutUsSmallPage/>
      <ContactSmallPage/>
      <Footer />
    </div>
    </>
  );
}
export default HomePage;
