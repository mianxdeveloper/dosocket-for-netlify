import React, { useState } from "react";
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionLabel from "../UI/SectionLabel";
import Button from "../UI/Button";

const testimonialsData = [
  {
    id: 1,
    name: "Crist Lily",
    role: "General Manager at Mozil",
    image: "https://picsum.photos/seed/person1/400/500",
    text: "Dosocket didn't just design for us — they delivered innovative solutions that truly drove results. Their creative vision gave us a refined product.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Anderson",
    role: "CTO at TechFlow",
    image: "https://picsum.photos/seed/person2/400/500",
    text: "The team at Dosocket is simply world-class. They took our complex requirements and turned them into a seamless user experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Founder at StartUp X",
    image: "https://picsum.photos/seed/person3/400/500",
    text: "Working with them was a game changer. The level of professionalism and creativity is unmatched in the industry right now.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Director at CreativeInc",
    image: "https://picsum.photos/seed/person4/400/500",
    text: "Exceptional delivery speed and quality. They understood our brand voice immediately and translated it perfectly into the design.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "VP Marketing at Core",
    image: "https://picsum.photos/seed/person5/400/500",
    text: "A truly collaborative partner. They helped us reimagine our digital presence from the ground up.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Get the current active item and the next one for mobile/tablet
  const activeItem = testimonialsData[currentIndex];
  const nextItem =
    testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dosocket-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-dosocket-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <div className="inline-block mb-4">
            <SectionLabel text="Voice of Trust" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-dosocket-900 tracking-tight">
            Client Testimonials
          </h2>
        </div>

        {/* Main Testimonial Card - Compact */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-dosocket-800 to-dosocket-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative shadow-xl">
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-10">
              <Quote size={60} className="text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex text-yellow-400 text-sm mb-4">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 font-light italic">
                "{activeItem.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dosocket-600 flex items-center justify-center text-white font-bold text-xl">
                  {activeItem.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg">
                    {activeItem.name}
                  </h4>
                  <p className="text-dosocket-200 text-sm">{activeItem.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Testimonial Preview - Visible on tablet/desktop */}
        <div className="hidden md:block max-w-4xl mx-auto mt-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-sm">
                {nextItem.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm line-clamp-1">
                  "{nextItem.text.substring(0, 80)}..."
                </p>
              </div>
              <ArrowRight size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Navigation Controls - Compact */}
        <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-dosocket-900 hover:text-white hover:border-dosocket-900 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2 px-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-dosocket-900"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-dosocket-900 hover:text-white hover:border-dosocket-900 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* View All Link */}
        {/* <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-dosocket-700 text-sm font-medium hover:text-dosocket-900 transition-colors group">
            <span>View all testimonials</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
