import NavBar from "../components/NavBar";
import LogoContainer from "../components/LogoContainer";
import HomeSmallPage from "../SmallPages/HomeSmallPage";
import AboutUsSmallPage from "../SmallPages/AboutUsSmallPage";
import ContactSmallPage from "../SmallPages/ContactSmallPage";
import ServicesSmallPage from "../SmallPages/ServicesSmallPage";
import SetupSmallPage from "../SmallPages/SetupSmallPage";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";

function HomePage(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 725);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 725);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hiddenSectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenSectionsRef.current.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenSectionsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
    <div className={isMobile ? "mainContainerMobile w-auto col h-auto" : "mainContainer w-auto col h-auto"}>
      <NavBar />
      <LogoContainer/> 
      <HomeSmallPage />
      <ServicesSmallPage/>
      <SetupSmallPage/>
      <AboutUsSmallPage/>
      <ContactSmallPage/>
      <Footer />
    </div>
    </>
  );
}
export default HomePage;
