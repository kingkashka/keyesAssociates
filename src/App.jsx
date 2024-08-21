import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from '/src/Pages/HomePage.jsx'
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  );
}

export default App;
