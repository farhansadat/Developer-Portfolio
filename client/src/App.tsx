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
import { useEffect, useState } from "react";

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
  const [showHelpLinks, setShowHelpLinks] = useState(false);

  useEffect(() => {
    const BASE_URL = "https://chatwoot-production-e9f6.up.railway.app";

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: "se1CLxG1RiBG7UBrnVQw8Wb6",
          baseUrl: BASE_URL,
        });

        window.addEventListener("message", (event) => {
          if (typeof event.data === "string" && event.data.includes("::reset_session::")) {
            window.chatwootSDK.reset();
          }
        });
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-gray-950 text-white py-8 sm:py-12 relative">
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

            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6 relative">
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

              {/* Help Center Button */}
              <div className="relative">
                <button
                  className="text-green-400 hover:text-green-300 text-sm focus:outline-none"
                  onClick={() => setShowHelpLinks(!showHelpLinks)}
                >
                  🟢 Help Center
                </button>

                {showHelpLinks && (
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-3 px-5 z-50 w-72 text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setShowHelpLinks(false)}
                  >
                    <a
                      href="https://chatwoot-production-e9f6.up.railway.app/hc/studenthelpcenter/en"
                      className="block py-2 px-3 text-sm text-white hover:bg-gray-800 rounded transition"
                      target="_blank" rel="noopener noreferrer"
                    >
                      ⚡ Student Help Center
                    </a>
                    <a
                      href="https://chatwoot-production-e9f6.up.railway.app/hc/instructor-help-center/en"
                      className="block py-2 px-3 text-sm text-white hover:bg-gray-800 rounded transition"
                      target="_blank" rel="noopener noreferrer"
                    >
                      👨‍🏫 Instructor Help Center
                    </a>
                    <a
                      href="https://chatwoot-production-e9f6.up.railway.app/hc/product-release-notes/"
                      className="block py-2 px-3 text-sm text-white hover:bg-gray-800 rounded transition"
                      target="_blank" rel="noopener noreferrer"
                    >
                      📅 Release Notes
                    </a>
                  </motion.div>
                )}
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Alimullah Sadat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
