import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./UI/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Updated: Square-rounded (rounded-2xl) and border logic applied here
  const navbarClasses = isScrolled
    ? "top-4 max-w-5xl mx-auto rounded-2xl bg-dosocket-900/70 backdrop-blur-xl border-transparent shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3 px-6 lg:px-8"
    : "top-0 max-w-full mx-auto bg-transparent py-6 px-6 lg:px-12";

  return (
    <>
      <header className="fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out pointer-events-none w-full px-4 sm:px-6">
        <nav
          className={`pointer-events-auto relative mx-auto transition-all duration-500 ease-in-out flex items-center justify-between w-full ${navbarClasses}`}
        >
          {/* Logo Section */}
          <a
            href="/"
            className="flex items-center gap-2 group relative overflow-hidden z-50"
          >
            <img
              src="/images/logo/secondary.svg"
              alt="Dosocket Logo"
              className="h-7 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* Desktop Links - Updated to rounded-lg to match the new theme */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-dosocket-subtext hover:text-white transition-colors duration-300 group overflow-hidden rounded-lg"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Subtle background glow on hover */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </button>
            ))}
          </div>

          {/* Desktop CTA - Updated to rounded-xl */}
          <div className="hidden md:flex items-center z-50">
            <Button
              variant="outline"
              className="px-6 py-2.5 text-sm font-medium border-dosocket-accent/30 hover:border-dosocket-accent text-white rounded-xl transition-all duration-300"
              onClick={() => handleNavClick("#contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-white hover:text-dosocket-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dosocket-900/95 backdrop-blur-3xl flex flex-col justify-center items-center px-6"
          >
            {/* Ambient Background Glows for Mobile Menu */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dosocket-accent/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col items-center space-y-8 w-full max-w-md relative z-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl sm:text-5xl font-display font-medium text-white hover:text-dosocket-accent transition-colors duration-300 tracking-tight"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="w-full pt-8 mt-4 border-t border-white/10 flex justify-center"
              >
                {/* Mobile CTA - Updated to rounded-xl */}
                <Button
                  className="w-full sm:w-auto px-12 py-4 text-lg rounded-xl"
                  onClick={() => handleNavClick("#contact")}
                >
                  Start a Project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
