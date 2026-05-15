import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

// Placeholder pages (create full pages later)
const Placeholder = ({ title }) => (
  <div className="min-h-screen bg-black flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="font-['Outfit'] font-black text-5xl text-white mb-4">{title}</h1>
      <p className="text-gray-500">Coming soon — page under construction.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/about"    element={<Placeholder title="About" />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
