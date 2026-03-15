import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import Button from "./UI/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Complete project data for all 6 projects
const projectsData = {
  "1": {
    title: "ClearSkinn Aesthetics",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project1-detail.webp",
    description:
      "ClearSkin Aesthetics is a high-end aesthetic clinic in Birmingham, UK, specializing in skincare, anti-aging, and cosmetic treatments. The landing page project focused on creating a modern, professional, and visually luxurious online presence that highlights the clinic’s services, builds trust, and drives client consultations.",
    tools: ["Figma", "React", "Tailwind CSS", "Framer Motion", "HubSpot"],
    liveLink: "https://clearskinn.netlify.app",
    breakdown:
      "Hero Section: Full-width video/photo overlay, animated heading and CTA buttons to drive bookings. About Section: Highlighted clinic ethos and approach with sliding images and text. Services Section: Interactive cards showing treatments like Botox, Fillers, Skin Rejuvenation, Laser Treatments. Before & After Section: Slider to showcase real client transformations. Testimonials Section: Rotating cards with client reviews for trust building. CTA / Booking Section: Highlighted “Book Now” button with hover effect and optional inline form. Footer / Contact: Clinic address, map embed, social links with hover animations.",
    caseStudy: {
      problem:
        "The clinic had minimal online presence and lacked a modern, professional website. Potential clients could not easily explore services or book consultations online. Existing competitors used generic templates that did not convey luxury or professionalism.",
      solution:
        "Designed a full landing page with a clean, modern layout. Structured sections: Hero, About, Services, Before & After, Testimonials, CTA/Booking, Contact/Map. Added smooth animations and hover interactions for modern UX ",
      results: [
        "127% increase in consultation bookings within 2 months",
        "65% reduction in bounce rate on treatment pages",
        "4.9/5 patient satisfaction score for website experience",
      ],
    },
  },
  "2": {
    title: "Luméa Skin Clinic",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project2-detail.webp",
    description:
      "Luméa Skin Clinic is a premium aesthetic clinic in Birmingham, UK, specializing in advanced skincare, injectables, laser treatments, and non-surgical facial enhancements. The landing page project focused on building a refined, editorial-style digital presence that communicates clinical expertise, subtle luxury, and trust. The goal was to create a structured, conversion-focused layout that feels modern and high-end while maintaining medical credibility.",
    tools: [
      "React Native",
      "Node.js",
      "MongoDB",
      "TensorFlow Lite",
      "Apple HealthKit",
    ],
    liveLink: "https://lumeaskin.netlify.app/",
    breakdown:
      "The hero section features full width, high end clinic imagery paired with a bold editorial headline and two clear CTA buttons focused on consultation booking, enhanced by subtle motion effects that create a refined first impression. The about section presents the clinic’s philosophy, medical expertise, and personalized care approach in a structured two column layout supported by relevant imagery. The services section uses an interactive grid of treatment cards including Botox and Anti Wrinkle treatments, Dermal Fillers, Laser Skin Resurfacing, Advanced Facials, and Skin Tightening, with refined hover interactions that add depth without distraction. The before and after section incorporates a clean comparison slider to showcase real client transformations, maintaining a minimal design that keeps focus on results and credibility. The process section outlines a four step visual journey covering consultation, skin assessment, customized treatment, and aftercare plan, designed to build trust and reduce uncertainty. The testimonials section displays rotating testimonial cards that highlight client satisfaction and subtle, natural results within an elegant, distraction free layout. The CTA and booking section introduces a high contrast booking area with a prominent Book Consultation button and an optional inline appointment form to ensure frictionless conversion, while the footer and contact area includes the clinic address, embedded map, contact details, and social links in a structured layout with subtle hover effects for visual consistency.",
    caseStudy: {
      problem:
        "The clinic lacked a strong digital identity and structured online presence. Services were not clearly organized or explained. Competitor websites relied on generic beauty templates. No clear conversion pathway guiding users toward booking.",
      solution:
        "Designed a fully custom landing page with a clean, typography-driven layout. Structured sections: Hero, About, Services, Before & After, Process, Testimonials, CTA/Booking, Contact/Map. Focused on strong visual hierarchy, generous white space, and premium typography. Added subtle animations and smooth interactions to enhance modern UX",
      results: [
        "85% user retention after 90 days (industry avg: 30%)",
        "2.5M+ workouts logged in first 6 months",
        "Featured as 'App of the Day' in 12 countries",
      ],
    },
  },
  "3": {
    title: "LumaSkin Aesthetics",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project3-detail.webp",
    description:
      "LumaSkin Aesthetics is a premium aesthetic clinic specializing in advanced skin rejuvenation, anti-aging, and holistic wellness treatments. The landing page project focused on creating a modern, professional, and visually luxurious online presence that highlights the clinic’s services, builds trust through proof, and drives client consultations.",
    tools: ["D3.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    liveLink: "https://lumaskinaesthetic.netlify.app/",
    breakdown:
      "The hero section features high resolution model imagery enhanced with subtle clinical skin mapping overlays, an animated headline, and a pulsing CTA button to encourage immediate consultation bookings. The about section communicates the clinic’s ethos, Beauty Meets Wellness, using elegant serif typography and controlled sliding image transitions that reinforce sophistication and trust. The services section presents interactive cards with custom iconography highlighting treatments such as Skin Rejuvenation, Laser Therapy, Dermal Fillers, and Medical Facials, allowing users to quickly understand offerings while preserving a premium visual tone. The before and after section includes a custom built interactive slider that lets users drag to view real time skin transformations, strengthening credibility and trust. The testimonials section displays rotating testimonial cards with client avatars and star ratings to provide strong social proof in an elegant, distraction free format. The CTA and booking section is designed in a dual column layout with a streamlined appointment form on the left and clinic contact details on the right to reduce friction and increase conversions. The footer consolidates the clinic address, an embedded interactive map, and social media links with subtle hover animations for visual consistency.",
    caseStudy: {
      problem:
        "The clinic lacked a cohesive online presence that reflected its premium service level, which created a disconnect between the quality of service and how the brand appeared online. Potential clients struggled to clearly visualize treatment results or book consultations without friction. At the same time, competing clinics relied on cold, generic medical templates that failed to communicate the warmth, luxury, and personalized care that define the LumaSkin brand.",
      solution:
        "A complete, conversion focused landing page was designed with a clean, luminous modern layout that aligns with the clinic’s premium positioning. The structure was strategically organized into clear sections including Hero, About, Services, Before and After, Testimonials, CTA and Booking, and Contact with Map to guide users through a logical and persuasive journey. Smooth scroll triggered animations and refined hover states were implemented to create a modern, polished user experience while maintaining clarity and usability.",
      results: [
        "94% of users reported better investment decisions",
        "$500M+ assets managed through the platform",
        "43% increase in user portfolio diversification",
      ],
    },
  },
  "4": {
    title: "Élan Aesthetics",
    category: "Aesthetic Clinic Landing Page",
    image: "/images/projects/project4-detail.webp",
    description:
      "Élan Aesthetics is a luxury, French-inspired aesthetic clinic specializing in high-end transformations and personalized skincare. The landing page project focused on moving away from the cold medical aesthetic typical of the industry to create a Warm Luxury experience that feels both approachable and elite.",
    tools: ["Shopify Plus", "React", "GraphQL", "Stripe", "Google Cloud"],
    liveLink: "https://elanaesthetic.netlify.app/",
    breakdown:
      "The hero section features a high impact split layout with a curved SVG transition, soft gradient blending, and Dancing Script typography to immediately establish an elegant brand voice. The services section presents an interactive four column grid with custom iconography, where cards respond to hover with subtle scaling and background transitions to create tactile visual feedback. The UVP section adopts a minimalist composition enhanced with thin dividers and Lucide iconography to highlight key differentiators such as Expert Clinicians, Personalized Care, and Modern Technology. The about section uses a sophisticated two column layout with overlapping imagery and refined border frame accents to communicate the clinic’s story of 15 plus years of excellence. The testimonials section displays rotating testimonial cards with client avatars and star ratings in a clean, distraction free layout that strengthens social proof. The CTA and booking section introduces a high contrast promotional band paired with a streamlined contact form to encourage immediate action and reduce friction. The footer consolidates the clinic address, a refined map layout, and social media links with subtle hover animations to ensure visual consistency and a polished finish across the entire experience.",
    caseStudy: {
      problem:
        "The premium aesthetic market is heavily saturated with clinics using generic blue and white clinical templates, making differentiation difficult. Most existing websites feel transactional and fail to communicate the elevated, boutique level experience clients expect from a high end clinic. The lack of visual warmth makes potential clients feel like just another patient instead of a valued guest. As a result, brand recall remains weak because competitor websites lack a distinct and memorable visual identity.",
      solution:
        "A complete landing page was designed using a Warm Luxury modern layout that prioritizes visual storytelling and emotional connection. The structure was carefully organized into Hero, Services, UVP, About, Testimonials, and CTA and Booking sections to guide users through a refined, persuasive journey. Smooth scroll triggered animations and script based typography micro interactions were implemented to elevate the interface while maintaining clarity, usability, and strong conversion focus.",
      results: [
        "250+ verified sustainable brands on platform",
        "15,000 tons of CO2 tracked and offset",
        "4.8/5 average seller rating",
      ],
    },
  },
  "5": {
    title: "Luminelle Clinic",
    category: "Aesthetic Wellness Landing Page",
    image: "/images/projects/project5-detail.webp",
    description:
      "Luminelle Clinic is a high-end medical aesthetic sanctuary that bridges the gap between clinical precision and artistic beauty. The project focused on creating a digital presence that feels authoritative yet ethereal, moving away from the standard clinical white to a more sophisticated, deep-toned luxury experience.",
    tools: ["Flutter", "Firebase", "Google Maps API", "OpenAI API", "Swift"],
    liveLink: "https://luminelleclinic.netlify.app/",
    breakdown:
      "Most aesthetic clinic websites fall into the hospital cliché, relying on sterile white and blue palettes that feel cold and transactional, often triggering anxiety instead of comfort. Many overload users with excessive medical jargon, cluttering the interface and weakening the emotional luxury appeal high end clients expect. The absence of a structured hierarchy such as the 60 30 10 rule creates visual inconsistency, resulting in a disorganized brand image that fails to justify premium pricing or build psychological trust. To address this, I designed a high fidelity landing page built around a disciplined 60 30 10 color system to ensure balance, clarity, and authority. The layout embraces Airy Modernism, using oversized typography, generous whitespace, and fluid transitions to create a calm and premium browsing experience. Deep teal functions as the dominant structural base, soft aqua supports secondary surfaces, and warm gold is reserved strictly for high value conversion elements, maintaining strong visual hierarchy and focus. The hero section uses a refined split layout with high resolution wellness imagery layered under a deep teal gradient overlay for cohesion and readability. Typography features Neue Machina in bold for brand presence, paired with an oversized 8xl heading that commands immediate attention, while a floating Premium Quality badge reinforces exclusivity. The philosophy section follows with a two column layout that communicates the clinic’s purpose through overlapping imagery, 30px rounded corners, and abstract aqua background elements that soften the grid and create a more human centered feel. The services section introduces a four column interactive grid where each treatment card, including services such as Dermal Fillers and Laser Therapy, acts as a micro experience, transitioning on hover from a subtle teal outline to a full soft aqua background with text shifting to deep teal to create tactile feedback.",
    caseStudy: {
      problem:
        "Most aesthetic clinic websites fall into the hospital cliché, relying on sterile white and blue palettes that feel cold and transactional, often triggering anxiety instead of comfort. Many platforms overload users with excessive medical jargon, cluttering the interface and weakening the emotional luxury appeal that high end clients expect. Visual inconsistency is another critical issue, as the absence of a structured hierarchy such as the 60 30 10 rule results in disorganized branding that fails to justify premium pricing or build psychological trust.",
      solution:
        "I designed a high fidelity landing page built around a disciplined 60 30 10 color system to establish visual balance, clarity, and brand authority. The layout embraces Airy Modernism, defined by oversized typography, generous whitespace, and fluid section transitions that create a calm, premium browsing experience. The design system applies deep teal as the dominant structural foundation, soft aqua for supportive surfaces and content blocks, and warm gold strictly for high value conversion elements, ensuring hierarchy remains intentional and conversion focused.",
      results: [
        "1M+ trips planned using Travel Buddy",
        "87% of users discovered at least one hidden gem",
        "4.9/5 rating on both iOS and Android stores",
      ],
    },
  },
  "6": {
    title: "Radiant Pulse Aesthetics",
    category: "Modern Wellness Landing Page",
    image: "/images/projects/project6-detail.webp",
    description:
      "Radiant Pulse Aesthetics is a high-end medical wellness clinic that focuses on high-energy, precision-based beauty treatments. Unlike traditional soft luxury clinics, this project aimed for a Vibrant Clinical feel—blending the authority of a medical institution with the energy of a modern lifestyle brand.",
    tools: ["React", "Node.js", "MQTT", "WebSockets", "Raspberry Pi"],
    liveLink: "https://radiantpulse.netlify.app/",
    breakdown:
      "The hero section, titled Precision Glow Entry, introduces a high impact centered layout anchored by bold brand presence. Typography uses Poppins in bold with a dominant 72px heading that immediately captures attention, while a deep blue gradient layered with subtle aqua overlays creates visual depth and a sense of digital wellness. The vibrant coral Book Consultation button serves as the primary focal point, clearly separated from the background to maximize conversion visibility. The About section, Our Philosophy, uses a two column layout that contrasts clinical expertise with human artistry through overlapping imagery, 30px border radius elements, and a subtle aqua geometric backdrop that breaks the rigid grid and removes the hospital like feel. The Services section, Interactive Clinical Grid, presents a three column layout featuring signature treatments, including procedures such as Dermal Fillers and Laser Therapy, with each card built on a light aqua base; on hover, borders transition to vibrant coral and icons subtly scale to create a tactile pulse effect aligned with the brand energy. The Testimonials section, Radiant Feedback, incorporates an interactive carousel on a clean white foundation, enhanced with oversized 9xl quotation marks in low opacity coral for an editorial aesthetic, while testimonial cards retain the light aqua theme to keep focus on social proof. The Contact and Booking section, Action Path, is structured as a high trust dual layout where the left side in deep blue anchors the user with logistical details such as map and phone information, and the right side presents a crisp, zero friction booking form, finalized with a vibrant coral Send Request button positioned as the ultimate conversion trigger.",
    caseStudy: {
      problem:
        "Most high end aesthetic websites fall into the sleepy luxury trap, relying on muted pastels like pinks and beiges that feel passive and generic, failing to attract a younger, tech savvy audience. There is also a constant tension between trust and energy, where traditional medical websites appear credible but dull, while lifestyle focused beauty platforms feel exciting yet lack clinical authority. On top of that, conversion invisibility becomes a serious issue, as call to action buttons often blend into the interface, increasing bounce rates during the critical booking phase.",
      solution:
        "To solve this, I designed a high fidelity landing page built on a strict 60 30 10 color system using bold primary tones to create instant brand recall and psychological energy. The layout follows a Geometric Modernism approach defined by sharp alignments, strong typographic weights, and high contrast interactions that balance authority with vibrancy. Deep blue functions as the primary structural foundation to communicate medical precision and stability, light aqua is applied across service cards and supporting backgrounds to maintain a breathable clinical feel, and vibrant coral is reserved strictly for pulse points such as CTAs, icons, and hover states to trigger action and represent the visible glow of treatment results.",
      results: [
        "32% average energy savings for users",
        "Supports 50+ device brands",
        "99.9% system uptime with sub-second response",
      ],
    },
  },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Get project data based on ID, fallback to first project if not found
  const project =
    projectsData[id as keyof typeof projectsData] || projectsData["1"];

  // Get next project ID for navigation
  const currentIndex = Object.keys(projectsData).indexOf(id || "1");
  const nextProjectId =
    Object.keys(projectsData)[
      (currentIndex + 1) % Object.keys(projectsData).length
    ];
  const nextProject = projectsData[nextProjectId as keyof typeof projectsData];

  // If project not found, redirect to projects page
  useEffect(() => {
    if (
      id &&
      !projectsData[id as keyof typeof projectsData] &&
      id !== "featured"
    ) {
      navigate("/projects");
    }
  }, [id, navigate]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dosocket-900 font-bold uppercase tracking-widest text-xs mb-12 hover:text-dosocket-700 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </button>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-dosocket-700 font-bold uppercase tracking-[0.2em] text-xs block mb-4">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-display font-bold text-dosocket-900 mb-8 leading-[1.1] tracking-tight">
                  {project.title}
                </h1>
                <p className="text-gray-600 text-xl leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-dosocket-900 font-bold uppercase tracking-widest text-xs mb-6">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full bg-white border border-gray-200 text-dosocket-900 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  Visit Live Site <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden mb-32 shadow-2xl aspect-[16/9]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Detailed Breakdown */}
          <div className="grid lg:grid-cols-12 gap-12 mb-32">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-display font-bold text-dosocket-900 sticky top-32">
                Detailed Breakdown
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 text-xl leading-relaxed">
                {project.breakdown}
              </p>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="bg-dosocket-900 rounded-[4rem] p-10 md:p-20 text-white mb-32">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <span className="text-dosocket-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                  Case Study
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold">
                  Problem & Solution
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div>
                  <h4 className="text-dosocket-accent font-bold uppercase tracking-widest text-xs mb-6">
                    The Problem
                  </h4>
                  <p className="text-dosocket-subtext text-lg leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-dosocket-accent font-bold uppercase tracking-widest text-xs mb-6">
                    Our Solution
                  </h4>
                  <p className="text-dosocket-subtext text-lg leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-20">
                <h4 className="text-dosocket-accent font-bold uppercase tracking-widest text-xs mb-10 text-center">
                  The Results
                </h4>
                <div className="grid md:grid-cols-3 gap-8">
                  {project.caseStudy.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center"
                    >
                      <CheckCircle2
                        size={32}
                        className="text-dosocket-accent mb-6"
                      />
                      <p className="text-dosocket-text font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project CTA */}
          <div className="text-center py-20 border-t border-gray-100">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs block mb-6">
              Next Project
            </span>
            <h2
              className="text-4xl md:text-7xl font-display font-bold text-dosocket-900 mb-12 hover:text-dosocket-700 transition-colors cursor-pointer"
              onClick={() => navigate(`/project/${nextProjectId}`)}
            >
              {nextProject.title}
            </h2>
            <Button
              variant="primary"
              onClick={() => navigate(`/project/${nextProjectId}`)}
            >
              View Next Project
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
