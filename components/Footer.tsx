import React, { useRef, useState } from "react";
import SocialIcons from "./UI/SocialIcons";

const Footer: React.FC = () => {
  const brandName = "Dosocket";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse move to determine proximity to each letter
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Simple logic: determine which letter index is closest based on width subdivision
    // A more complex version would calculate exact distance, but index-based is cleaner for this layout
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthPerChar = rect.width / brandName.length;
    const index = Math.floor(x / widthPerChar);

    setHoveredIndex(Math.max(0, Math.min(brandName.length - 1, index)));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <footer className="bg-black pt-24 pb-12 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Logo replacing the animated text */}
        <div className="flex justify-center mb-12">
          <img
            src="/images/logo/primary.svg"
            alt="Dosocket Logo"
            style={{ filter: "brightness(0) invert(0.2)" }}
            className="h-32 w-auto md:h-48 hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
          {/* Left Column: Logo, Subheading, Socials */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              {/* Replaced text with logo */}
              <img
                src="/images/logo/secondary.svg"
                alt="Dosocket Logo"
                className="h-5 w-auto mb-4"
              />
              <p className="text-dosocket-muted text-sm max-w-xs">
                Crafting digital experiences that inspire and innovate. Your
                partner in future-ready solutions.
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <SocialIcons />
            </div>
          </div>

          {/* Middle Column: Links (Optional, keeping for structure) */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-lg text-white mb-6">
              Explore
            </h3>
            <ul className="space-y-4 text-sm text-dosocket-muted">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-dosocket-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-dosocket-accent transition-colors"
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-dosocket-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-dosocket-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
            <a
              href="mailto:dosocketagency@gmail.com"
              className="px-8 py-3 rounded-[0.8em] border border-dosocket-accent text-dosocket-accent text-sm hover:bg-dosocket-accent hover:text-dosocket-900 hover:border-dosocket-accent transition-all duration-300 hover:-translate-y-1 text-center w-full md:w-auto"
            >
              dosocketagency@gmail.com
            </a>
            <a
              href="tel:+8801756028551"
              className="px-8 py-3 rounded-[0.8em] border border-dosocket-accent text-dosocket-accent text-sm hover:bg-dosocket-accent hover:text-dosocket-900 hover:border-dosocket-accent transition-all duration-300 hover:-translate-y-1 text-center w-full md:w-auto"
            >
              +92 3346020251
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/5">
          <div className="flex gap-8 text-xs text-white/40 mb-4 md:mb-0">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span>2026, Dosocket - All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
