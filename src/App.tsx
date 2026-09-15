import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Approach from './components/Approach';
import Applications from './components/Applications';
import Deployment from './components/Deployment';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';
import useReveal from './hooks/useReveal';

// Module scope keeps the reference stable across renders for useActiveSection.
const SECTION_IDS = ['hero', 'objective', 'approach', 'applications', 'deployment', 'leadership', 'contact'];

const App: React.FC = () => {
  const activeSection = useActiveSection(SECTION_IDS);
  useReveal();

  return (
    <div className="min-h-screen bg-paper">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Objective />
        <Approach />
        <Applications />
        <Deployment />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
