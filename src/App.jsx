import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import { useState, useEffect } from "react"

function App() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  useEffect(() => {
    const rootEl = document.getElementById('root');
    if (!rootEl) return;

    const sections = Array.from(rootEl.querySelectorAll('.snap-section'));
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.intersectionRatio >= 0.6 || entry.isIntersecting) {
          el.classList.add('in-view');
          el.setAttribute('aria-hidden', 'false');
        } else {
          el.classList.remove('in-view');
          el.setAttribute('aria-hidden', 'true');
        }
      });
    }, { root: rootEl, threshold: [0.55, 0.65] });

    sections.forEach((s) => observer.observe(s));

    // ensure one initial active section
    sections.forEach(s => s.classList.remove('in-view'));
    const initiallyVisible = sections.find(s => s.getBoundingClientRect().top >= 0 && s.getBoundingClientRect().top < window.innerHeight);
    if (initiallyVisible) initiallyVisible.classList.add('in-view');

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative w-full min-h-full">
        <div className="absolute top-0 left-0 z-[-2] w-full min-h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.2),rgba(59,130,246,0.05))]"></div>
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar language={language} toggleLanguage={toggleLanguage} />
          <Hero language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>
      </div>
    </>
  );
}

export default App
