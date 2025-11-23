import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ToTopButton from "./components/ui/ToTopButton";
import "./App.css";


function App() {

  
  return (
    <Layout>

      <HeroSection />

      <div className="grid md:grid-cols-2 gap-4 ml-4 mr-4" id="about">
      
      <About/>
      <TechStack />


      </div>

      <div id="projects">
      <Projects />
      </div>

      <div id="contact">
          <h2 className="text-emerald-500 dark:text-yellow-400 text-center underline
            font-bold tracking-wide mb-3 md:mb-5 text-3xl drop-shadow-[0_0_15px_currentColor] font-mono
            mt-3 md:mt-5">
            Contact()
          </h2>
      <Contact />
      </div>

      <ToTopButton />

    </Layout>
  )
}

export default App
