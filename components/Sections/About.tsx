import React from "react";
import SectionLabel from "../UI/SectionLabel";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-dosocket-50/30 to-transparent rounded-bl-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Centered on mobile, left-aligned on desktop */}
        <div className="text-center md:text-left mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block md:block">
            <SectionLabel text="Who We Are" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-dosocket-900 mt-4 tracking-tight">
            About Us
          </h2>
          <div className="w-20 h-1 bg-dosocket-200 mt-4 mx-auto md:mx-0" />
        </div>

        {/* Content Grid - Reversed on mobile for better flow */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          {/* Image Section - Order changes on mobile */}
          <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
            <div className="relative group">
              {/* Image with height matched to text content */}
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Modern workspace with team collaborating"
                />

                {/* Minimal overlay on hover */}
                <div className="absolute inset-0 bg-dosocket-900/0 hover:bg-dosocket-900/5 transition-colors duration-500" />
              </div>

              {/* Minimal floating element - hidden on mobile */}
              <div className="hidden md:flex absolute -bottom-6 -right-6 w-32 h-32 bg-white border border-gray-200 rounded-2xl items-center justify-center shadow-lg">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="block text-3xl font-light text-dosocket-900 leading-none mb-1">
                    2026
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 leading-none">
                    Founded
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 flex flex-col justify-center h-full">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-light leading-[1.2] text-dosocket-900 tracking-tight">
                We build
                <span className="block font-medium mt-2">
                  exceptional websites
                </span>
                <span className="block mt-1">and digital products.</span>
              </h3>

              <div className="space-y-4 md:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                <p className="border-l-4 border-dosocket-200 pl-4 sm:pl-6">
                  Dosocket is a new agency founded in 2026, driven by a passion
                  to turn your vision into lasting impact and legacy.
                </p>
                <p>
                  We believe in the power of deep immersion. We don't just skim
                  the surface; we dive into the core of your industry to extract
                  insights that drive meaningful innovation. Our goal is to earn
                  your trust through exceptional work.
                </p>
              </div>

              {/* Minimal stats - hidden on smallest screens */}
              <div className="hidden sm:flex gap-8 md:gap-12 pt-4 md:pt-6">
                <div className="text-left">
                  <span className="block text-3xl md:text-4xl font-light text-dosocket-900">
                    100+
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                    Projects
                  </span>
                </div>
                <div className="text-left">
                  <span className="block text-3xl md:text-4xl font-light text-dosocket-900">
                    50+
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                    Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
