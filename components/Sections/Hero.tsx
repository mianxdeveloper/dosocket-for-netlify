import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FancyButton from "../UI/FancyButton";
import Button from "../UI/Button";

const Hero: React.FC = () => {
  const words = [
    "Global Brands",
    "Innovators",
    "Visionaries",
    "Market Leaders",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];

  // Animation variants for a smoother, central entrance
  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 15, stiffness: 150 },
    },
    exit: {
      opacity: 0,
      y: -30,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center py-20 lg:py-32 overflow-hidden bg-dosocket-900">
      {/* Custom Background Mix with #A4FEEB Accent Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Glow */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[120px] opacity-[0.08] md:opacity-[0.06]"
          style={{ backgroundColor: "#A4FEEB" }}
        />
        {/* Bottom Left Glow */}
        <div
          className="absolute -bottom-32 -left-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[150px] opacity-[0.06] md:opacity-[0.04]"
          style={{ backgroundColor: "#A4FEEB" }}
        />
        {/* Center subtle depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-dosocket-900/50 blur-[100px] z-10" />
      </div>

      {/* Main Container with improved padding for breathing room */}
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          {/* Main Title Stack */}
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] leading-[0.9] text-white tracking-tighter mb-8 md:mb-12">
            BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              IMPACT.
            </span>
          </h1>

          {/* Animated Sub-headline */}
          <div className="flex flex-col items-center justify-center mb-10 md:mb-14">
            <span className="text-dosocket-subtext text-xl sm:text-2xl md:text-3xl font-light mb-3">
              The partner of choice for
            </span>

            <div className="h-12 sm:h-16 relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex gap-x-[2px] sm:gap-x-1"
                >
                  {currentWord.split("").map((char, i) => (
                    <motion.span
                      key={`${currentWord}-${i}`}
                      variants={letterVariants}
                      transition={{ delay: i * 0.04 }}
                      className={`font-display font-bold text-3xl sm:text-5xl md:text-6xl text-dosocket-accent ${
                        char === " " ? "mr-4" : ""
                      }`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <p className="text-dosocket-muted text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 opacity-90">
            We bridge the gap between bold ideas and digital reality.
            Specialized in crafting high-performance ecosystems that scale your
            vision globally.
          </p>

          {/* Centered Actions */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-center justify-center w-full max-w-md mx-auto sm:max-w-none">
            <FancyButton
              variant="primary"
              className="w-full sm:w-auto min-w-[200px] text-lg py-4"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start a Project
            </FancyButton>

            <Button
              variant="accent-outline"
              className="w-full sm:w-auto min-w-[200px] text-lg py-4"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
