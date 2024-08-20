import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillSection';
import ProjectsSection from './components/ProjectsSection';
import { ContactUs } from './components/ContactUs';
import FooterSection from './components/FooterSection';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutMe />} />
        
       </Routes>
       <FooterSection />
       </ThemeProvider>
    </>
  );
}

export default App;
