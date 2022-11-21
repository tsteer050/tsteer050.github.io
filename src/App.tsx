import React from "react";
import Header from "./components/header/Header.tsx";
import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Listen from "./components/listen/Listen.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.scss';


const App = () => {

  const path = useLocation().pathname;
  const currentLocation = path.slice(1);

  return (
      <div className={`App ${currentLocation}`}>
        <div className="filter-div">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="listen" element={<Listen />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>

      </div>
  );
}

export default App;
