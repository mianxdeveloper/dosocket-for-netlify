import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { ServiceItem } from "../../types";
import SectionLabel from "../UI/SectionLabel";
import { useNavigate } from "react-router-dom";

const servicesData: ServiceItem[] = [
  {
    id: "01",
    number: "001",
    title: "UI/UX Designing",
    description:
      "We craft intuitive and engaging user experiences. From wireframes to high-fidelity prototypes, our design process ensures your product is not only beautiful but functional.",
    tags: ["Design Audits", "UX Research", "Prototyping"],
    linkId: "ui-ux",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-[#0F4A3E] to-[#0F4A3E]",
  },
  {
    id: "02",
    number: "002",
    title: "Web Application",
    description:
      "Scalable, high-performance web applications built for growth. We specialize in creating complex dashboards and enterprise solutions.",
    tags: ["SaaS Design", "React/Next.js", "Dashboard Architecture"],
    linkId: "web-app",
    icon: <Zap className="w-6 h-6" />,
    color: "from-[#0F4A3E] to-[#0F4A3E]",
  },
  {
    id: "03",
    number: "003",
    title: "Web Development",
    description:
      "Robust front-end and back-end development. We write clean, semantic code optimized for speed and SEO.",
    tags: ["Full Stack", "CMS Integration", "API Development"],
    linkId: "web-dev",
    icon: <Shield className="w-6 h-6" />,
    color: "from-[#0F4A3E] to-[#0F4A3E]",
  },
  {
    id: "04",
    number: "004",
    title: "Digital Marketing",
    description:
      "Data-driven strategies to amplify your brand presence. We help you reach your target audience through targeted campaigns.",
    tags: ["SEO & SEM", "Social Media", "Content Strategy"],
    linkId: "digital-marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-[#0F4A3E] to-[#0F4A3E]",
  },
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("01");
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpenService = (e: any) => {
      const serviceTitle = e.detail.title;
      const service = servicesData.find((s) =>
        s.title.toLowerCase().includes(serviceTitle.toLowerCase())
      );
      if (service) {
        setActiveId(service.id);
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("open-service", handleOpenService);
    return () => window.removeEventListener("open-service", handleOpenService);
  }, []);

  const handleServiceClick = (linkId: string) => {
    navigate(`/services?id=${linkId}`);
  };

  return (
    <section
      id="services"
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-dosocket-50/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dosocket-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Elegant and centered */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-dosocket-50 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-dosocket-500 animate-pulse" />
            <SectionLabel text="How we create impact" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-dosocket-900 mb-6 tracking-tight">
            Our <span className="text-dosocket-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Creative, Scalable Digital Solutions for modern brands that want to
            stand out in the digital landscape.
          </p>
        </div>

        {/* Services Grid - Modern card-based layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId("01")}
              onClick={() => handleServiceClick(service.linkId)}
            >
              {/* Card with elegant hover effects */}
              <div
                className={`
                relative bg-white rounded-3xl p-6 sm:p-8 h-full
                border border-gray-100 shadow-lg shadow-gray-100/50
                hover:shadow-xl hover:shadow-gray-200/50
                transition-all duration-500 ease-out
                ${
                  activeId === service.id
                    ? "scale-[1.02] border-dosocket-200"
                    : ""
                }
              `}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500
                `}
                />

                {/* Icon with gradient background */}
                <div
                  className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-2xl
                  bg-gradient-to-br ${service.color} text-white mb-6
                  group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-500
                `}
                >
                  {service.icon}
                </div>

                {/* Service number - subtle */}
                <span className="absolute top-6 right-6 text-sm font-mono text-gray-300">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-dosocket-900 mb-3 group-hover:text-dosocket-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description - truncated for cards */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>

                {/* Tags - minimal */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 2 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-400 text-xs rounded-full">
                      +{service.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Learn more link - stops propagation to prevent double navigation */}
                <div
                  className="inline-flex items-center gap-2 text-dosocket-600 text-sm font-medium group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => handleServiceClick(service.linkId)}
                  >
                    Learn more
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                  />
                </div>

                {/* Bottom gradient line on hover */}
                <div
                  className={`
                  absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${service.color}
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
                `}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
            <span className="text-gray-600">Ready to start your project?</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-dosocket-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-dosocket-800 transition-colors"
            >
              Let's talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
