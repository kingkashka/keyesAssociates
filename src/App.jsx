import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from '/src/Pages/HomePage.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
