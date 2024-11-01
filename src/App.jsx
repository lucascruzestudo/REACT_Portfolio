import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"

function App() {
  return (
    <>
      <div className="relative w-full min-h-full">
      <div className="absolute top-0 left-0 z-[-2] w-full min-h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.4),rgba(59,130,246,0.15))]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}


export default App