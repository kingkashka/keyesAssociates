import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from '/src/Pages/HomePage.jsx'
import ContactPage from "./Pages/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
      </Routes>
    </>
  );
}

export default App;
