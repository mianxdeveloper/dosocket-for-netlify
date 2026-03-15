import React, { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import SectionLabel from "../UI/SectionLabel";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-dosocket-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-dosocket-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-dosocket-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with modern typography */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-dosocket-50 px-4 py-2 rounded-full mb-6 border border-dosocket-100">
              <Sparkles size={16} className="text-dosocket-600" />
              <SectionLabel text="Let's Connect" />
            </div>
            <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dosocket-900 mb-6 tracking-tight">
              Get in <span className="text-dosocket-600">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>

          {/* Modern Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-10 lg:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <div
                  className={`absolute -top-3 left-4 px-2 bg-white text-sm transition-all duration-200 ${
                    focusedField === "name" || formData.name
                      ? "text-dosocket-600"
                      : "text-gray-400"
                  }`}
                >
                  Full Name
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="John Doe"
                  className="w-full px-6 py-5 bg-transparent border-2 border-gray-200 rounded-2xl focus:border-dosocket-600 focus:outline-none transition-all duration-300 text-lg placeholder-gray-300"
                />
                {/* Decorative element */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-dosocket-400 opacity-0 group-focus-within:opacity-100 transition-opacity" />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div
                  className={`absolute -top-3 left-4 px-2 bg-white text-sm transition-all duration-200 ${
                    focusedField === "email" || formData.email
                      ? "text-dosocket-600"
                      : "text-gray-400"
                  }`}
                >
                  Email Address
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="hello@example.com"
                  className="w-full px-6 py-5 bg-transparent border-2 border-gray-200 rounded-2xl focus:border-dosocket-600 focus:outline-none transition-all duration-300 text-lg placeholder-gray-300"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <div
                  className={`absolute -top-3 left-4 px-2 bg-white text-sm transition-all duration-200 ${
                    focusedField === "phone" || formData.phone
                      ? "text-dosocket-600"
                      : "text-gray-400"
                  }`}
                >
                  Phone Number
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-5 bg-transparent border-2 border-gray-200 rounded-2xl focus:border-dosocket-600 focus:outline-none transition-all duration-300 text-lg placeholder-gray-300"
                />
              </div>

              {/* Submit Button with modern design */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl bg-dosocket-900 px-8 py-5 text-white transition-all duration-300 hover:bg-dosocket-800 hover:shadow-2xl hover:shadow-dosocket-900/25 active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-lg font-medium">
                    Send Message
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-dosocket-700 to-dosocket-600 transition-transform duration-500" />
                </button>
              </div>

              {/* Subtle privacy note */}
              <p className="text-center text-sm text-gray-400 mt-6">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>

          {/* Modern decorative elements */}
          <div className="flex justify-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-dosocket-200" />
            <div className="w-2 h-2 rounded-full bg-dosocket-300" />
            <div className="w-2 h-2 rounded-full bg-dosocket-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
