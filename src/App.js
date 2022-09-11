import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import WhyStrata from './pages/WhyStrata';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/why-strata-intel" element={<WhyStrata />} />
      </Routes>
  
    </div>
  );
}

export default App;
