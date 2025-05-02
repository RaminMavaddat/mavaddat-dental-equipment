import "normalize.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Contact, About } from "./components/pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Products />} />
        <Route path="/home" element={<Contact />} />
        <Route path="/home" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
