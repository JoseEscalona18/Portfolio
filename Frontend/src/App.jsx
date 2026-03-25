import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load sections for better performance
const HeroSection = React.lazy(() => import('./components/sections/HeroSection'));
const AboutSection = React.lazy(() => import('./components/sections/AboutSection'));
const SkillsSection = React.lazy(() => import('./components/sections/SkillsSection'));
const ProjectsSection = React.lazy(() => import('./components/sections/ProjectsSection'));
const ExperienceSection = React.lazy(() => import('./components/sections/ExperienceSection'));
const ContactSection = React.lazy(() => import('./components/sections/ContactSection'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

function Home() {
  return (
    <div className="flex flex-col w-full">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div></div>}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="proyecto/:id" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div></div>}>
              <ProjectDetail />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
