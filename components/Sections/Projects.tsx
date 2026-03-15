import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../../types";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "ClearSkinn Aesthetics",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project1.webp",
    tags: ["App Design", "UX Research"],
  },
  {
    id: "2",
    title: "Luméa Skin Clinic",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project2.webp",
    tags: ["Branding", "UI Design"],
  },
  {
    id: "3",
    title: "LumaSkin Aesthetics",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project3.webp",
    tags: ["Dashboard", "SaaS"],
  },
  {
    id: "4",
    title: "Élan Aesthetics",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project4.webp",
    tags: ["Web Design", "Shopify"],
  },
  {
    id: "5",
    title: "Luminelle Clinic",
    category: "Aesthetic Wellness Landing Page",
    image: "/images/projects/project5.webp",
    tags: ["Mobile App", "UI/UX"],
  },
  {
    id: "6",
    title: "Radiant Pulse Aesthetics",
    category: "Modern Wellness Landing Page",
    image: "/images/projects/project6.webp",
    tags: ["IoT", "Dashboard"],
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <SectionLabel text="Our Portfolio" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">
            Crafted with Vision, Delivered as
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-dosocket-900 tracking-tight">
            Project
          </h2>
          <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our work reflects a perfect balance of bold creativity & technical
            precision. We don't just make things look great— we make them work
            beautifully.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl mb-4 md:mb-6 aspect-[4/5] bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dosocket-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-4 md:p-6 text-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-2 md:mb-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-dosocket-accent mb-4 md:mb-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100 uppercase tracking-widest font-bold">
                    {project.category}
                  </p>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-dosocket-accent text-dosocket-900 flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500 delay-200 rotate-12 group-hover:rotate-0">
                    <ArrowUpRight size={24} className="md:w-7 md:h-7" />
                  </div>
                </div>
              </div>

              <div className="px-1 md:px-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-dosocket-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            variant="dark-outline"
            onClick={() => navigate("/projects")}
            className="px-6 py-3 text-sm md:text-base"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
