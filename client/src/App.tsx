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
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    (function (d, t) {
      var BASE_URL = "https://chatwoot-production-e9f6.up.railway.app";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: "se1CLxG1RiBG7UBrnVQw8Wb6",
            baseUrl: BASE_URL,
            launcher: { show: false }, // Hide default bubble
          });
        }
      };
    })(document, "script");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>

      {/* Custom Chat Launcher */}
      <a
        onClick={() => window.$chatwoot?.toggle()}
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
      >
        <img
          src="https://img.icons8.com/?size=100&id=CHBf5jmRzl9y&format=png&color=000000"
          alt="Chat"
          className="w-14 h-14 hover:scale-110 transition-transform"
        />
      </a>

      {/* Footer */}
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
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6 relative">
              <a
                href="https://github.com/farhansadat"
                className="text-gray-400 hover:text-blue-400 transition-colors text-lg sm:text-xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alimullahsadat/"
                className="text-gray-400 hover:text-blue-400 transition-colors text-lg sm:text-xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/farhan_sadat1532"
                className="text-gray-400 hover:text-pink-400 transition-colors text-lg sm:text-xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="mailto:farhansadatx@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors text-lg sm:text-xl"
              >
                <i className="fas fa-envelope"></i>
              </a>

              {/* Help Center Dropdown (Fixed) */}
              <div
                className="relative text-gray-400 hover:text-green-400 text-lg sm:text-xl cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex items-center space-x-1">
                  <i className="fas fa-book"></i>
                  <span className="text-sm">Help Center</span>
                  <span className="ml-1 block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </div>
                {showDropdown && (
                  <div className="absolute bottom-full mb-2 left-0 bg-gray-800 text-white rounded-md shadow-lg text-sm z-50 min-w-[220px]">
                    <a
                      href="https://chatwoot-production-e9f6.up.railway.app/hc/studenthelpcenter/en"
                      className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🎓 Student Help Center
                    </a>
                    <a
                      href="https://chatwoot-production-e9f6.up.railway.app/hc/instructor-help-center"
                      className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👨‍🏫 Instructor Help Center
                    </a>
                    <a
                      href="https://chatwoot-production-e9f6.up.railway.app/hc/product-release-notes"
                      className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📝 Release Notes
                    </a>
                  </div>
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
