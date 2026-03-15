import React, { useState } from "react";
import { Mail, Phone, User, Send } from "lucide-react";
import SectionLabel from "../UI/SectionLabel";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="space-y-6">
            <SectionLabel text="Contact" />
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Ready to start
              <span className="block text-dosocket-600">your project?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Let's discuss your ideas and turn them into reality. We're just a
              message away.
            </p>

            {/* Simple stats */}
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-dosocket-900">24h</div>
                <div className="text-sm text-gray-400">Response time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dosocket-900">100%</div>
                <div className="text-sm text-gray-400">Client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:border-dosocket-600 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400"
                />
              </div>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:border-dosocket-600 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400"
                />
              </div>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:border-dosocket-600 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-dosocket-900 text-white py-4 rounded-xl font-medium hover:bg-dosocket-800 transition-colors flex items-center justify-center gap-2 group mt-8"
              >
                Send message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
