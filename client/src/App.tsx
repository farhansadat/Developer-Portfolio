import { Route, Switch } from "wouter";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import "./github-footer-icon.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import NotFound from "./pages/not-found";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
      
      {/* Footer */}
      {true && (
      <footer className="bg-slate-900 dark:bg-gray-950 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center space-x-2">
                <motion.i 
                  className="fas fa-code text-blue-400 text-xl sm:text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                ></motion.i>
              </div>
            </div>
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
              <a href="https://github.com/farhansadat" className="text-gray-400 hover:text-blue-400 transition-colors text-lg sm:text-xl">
  <i className="fab fa-github"></i>
</a>
              <a href="https://www.linkedin.com/in/alimullahsadat/" className="text-gray-400 hover:text-blue-400 transition-colors text-lg sm:text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/farhan_sadat1532" className="text-gray-400 hover:text-pink-400 transition-colors text-lg sm:text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:farhansadatx@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors text-lg sm:text-xl">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Alimullah Sadat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}

export default App;
