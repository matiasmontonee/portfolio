import React from 'react';
import './assets/css/style.css';
import { LanguageProvider } from './context/Language';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ProjectsView from './views/ProjectsView';
import SkillsView from './views/SkillsView';
import ContactView from './views/ContactView';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <LanguageProvider>
        <Cursor />
        <Navbar />
        <HomeView />
        <AboutView />
        <ProjectsView />
        <SkillsView />
        <ContactView />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
