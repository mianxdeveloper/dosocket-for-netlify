import React, { useState } from "react";
import SectionLabel from "../UI/SectionLabel";
import { Linkedin, Instagram, Globe, X } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  country: string;
  image: string;
  experience: string;
  specialty: string;
  bio: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    portfolio?: string;
    pinterest?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Qasim Ali",
    role: "Co-Founder & UI/UX Designer",
    country: "Pakistan",
    image: "/images/team/qasim.webp",
    experience: "2 Years Exp.",
    specialty: "Product Design",
    bio: "Qasim is a visionary designer with a passion for creating intuitive and beautiful user experiences. He has led design teams for multiple successful startups.",
    socials: {
      linkedin: "https://www.linkedin.com/in/uxui-qasimali/",
      instagram: "https://www.instagram.com/uxui.qasimali/",
      portfolio: "https://qasimaliux.netlify.app/",
    },
  },
  {
    id: "2",
    name: "Abdul Rehman",
    role: "Co-Founder & Sr. Web Dev",
    country: "Pakistan",
    image: "/images/team/abd.jpg",
    experience: "2 Years Exp.",
    specialty: "Full Stack Dev",
    bio: "Abdul Rehman is a technical wizard who specializes in building scalable web applications. His expertise spans across the entire stack, from server management to frontend optimization.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mianxdeveloper/",
      instagram: "https://www.instagram.com/mianxdeveloper/",
      portfolio: "https://abcloud.netlify.app/",
    },
  },
  {
    id: "3",
    name: "Abdul Basit",
    role: "Sr. Lead Gen & HR Manager",
    country: "Pakistan",
    image: "/images/team/basit.webp",
    experience: "2 Years Exp.",
    specialty: "Talent Acquisition",
    bio: "Abdul Basit excels in identifying top talent and driving growth through strategic lead generation. He ensures the team is always staffed with the best minds.",
    socials: {
      linkedin: "https://www.linkedin.com/in/abdul-basit-4983a7281",
    },
  },
  {
    id: "4",
    name: "MD. Ahosun Habib",
    role: "Sr. Digital Marketing",
    country: "Bangladesh",
    image: "/images/team/rohan.webp",
    experience: "2 Years Exp.",
    specialty: "SEO & Campaigns",
    bio: "Ahosun is a digital marketing strategist who knows how to amplify brand presence. His data-driven approach ensures maximum ROI for marketing campaigns.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mdahosunhabibrohan-125a24336",
      portfolio: "https://ahosunhabibrohan.my.canva.site",
      pinterest: "https://pin.it/rUCCqzNGy",
    },
  },
  {
    id: "5",
    name: "Sameer",
    role: "Video Editing & Sales Senior",
    country: "Pakistan",
    image: "/images/team/sameer.png",
    experience: "3 Years Exp.",
    specialty: "Video Production",
    bio: "Sameer brings stories to life through compelling video editing and drives growth with his sales expertise.",
    socials: {
      linkedin: "https://www.linkedin.com/in/sameer-shayan-174407278/",
      instagram: "https://www.instagram.com/sameershayan.em/",
      portfolio:
        "https://drive.google.com/drive/folders/10GBfwAI7TUgwp0rV1HTAF0vkm7-kCI_M?usp=sharing",
    },
  },
];

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const PinterestIcon = ({ size = 14 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.27 1.041-1.009 2.345-1.503 3.142C9.646 23.83 10.796 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );

  return (
    <section className="py-32 bg-dosocket-800 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          {/* Using a targeted class to force just the text color of the SectionLabel to accent */}
          <div className="flex justify-center mb-6 [&_*]:!text-dosocket-accent">
            <SectionLabel text="Our Team" />
          </div>

          <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight mb-6">
            <span className="text-dosocket-accent">Meet the</span>{" "}
            <span className="text-white bg-dosocket-900 px-4 py-1 rounded-xl transform -rotate-2 inline-block shadow-lg">
              Minds
            </span>
          </h2>
          <p className="text-dosocket-muted text-lg">
            A collective of visionaries, creators, and strategists dedicated to
            redefining the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {teamMembers.map((member) => (
            // Changed background to white (bg-white)
            <div
              key={member.id}
              className="group w-full max-w-[290px] bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="relative mb-4 mx-auto flex justify-center">
                  {/* Removed the border completely */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-center">
                  {/* Text flipped to dark colors to be visible on the white card */}
                  <h3 className="font-bold text-xl text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>

                  <div className="space-y-1 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-xl">
                      {member.country}
                    </span>
                    <p className="text-xs text-gray-500 mt-2">
                      {member.experience}
                    </p>
                    <p className="text-xs font-medium text-dosocket-500">
                      {member.specialty}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex gap-1">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="p-2 text-gray-400 hover:text-dosocket-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className="p-2 text-gray-400 hover:text-dosocket-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                    {member.socials.pinterest && (
                      <a
                        href={member.socials.pinterest}
                        className="p-2 text-gray-400 hover:text-dosocket-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PinterestIcon size={16} />
                      </a>
                    )}
                    {member.socials.portfolio && (
                      <a
                        href={member.socials.portfolio}
                        className="p-2 text-gray-400 hover:text-dosocket-accent transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-sm font-medium text-gray-600 hover:text-dosocket-accent transition-colors"
                  >
                    About
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Changed to white to match the cards */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-6 mb-6">
              {/* Removed the border completely */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-gray-900">
                  {selectedMember.name}
                </h3>
                <p className="text-dosocket-accent/80 font-medium text-sm uppercase tracking-wider">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                {selectedMember.bio}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl">
                  <span className="block text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
                    Experience
                  </span>
                  <span className="font-bold text-gray-900">
                    {selectedMember.experience}
                  </span>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl">
                  <span className="block text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
                    Specialty
                  </span>
                  <span className="font-bold text-gray-900">
                    {selectedMember.specialty}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={selectedMember.socials.portfolio || "#"}
                className="flex-1 bg-dosocket-900 text-white py-3 rounded-xl font-bold text-center hover:bg-dosocket-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </a>
              <div className="flex gap-2">
                {selectedMember.socials.linkedin && (
                  <a
                    href={selectedMember.socials.linkedin}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:border-dosocket-accent hover:text-dosocket-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {selectedMember.socials.instagram && (
                  <a
                    href={selectedMember.socials.instagram}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:border-dosocket-accent hover:text-dosocket-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {selectedMember.socials.pinterest && (
                  <a
                    href={selectedMember.socials.pinterest}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:border-dosocket-accent hover:text-dosocket-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PinterestIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
