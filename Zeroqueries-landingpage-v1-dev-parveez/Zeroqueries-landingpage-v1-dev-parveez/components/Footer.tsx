
"use client";
import React, { useState } from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import toast from "react-hot-toast";

const Footer = ({ t, lang, onNavigate }) => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

  if (!formData.email) {
    toast.error("Please enter your email");
    return;
  }

  const loadingToast = toast.loading("Subscribing...");

  const data = new FormData();
  data.append("form_type", "newsletter");
  data.append("email", formData.email);

  try {
    const response = await fetch(
      "https://zeroqueries.com/api/send_mail.php",
      {
        method: "POST",
        body: data
      }
    );

    const result = await response.json();

    toast.dismiss(loadingToast);

    if (result.success) {
      toast.success("Subscribed successfully!");
      setFormData({ email: "" });
    } else {
      toast.error("Subscription failed");
    }

  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error("Something went wrong");
  }
};
  return (
    <footer className="bg-[#020617] text-slate-300 border-t border-white/5">

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-2">
              {t.newsletter.title}
            </h2>
            <p className="text-slate-300">
              {t.newsletter.para}
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.newsletter.placeholder}
              aria-label="Email address"
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white w-full lg:w-80 focus:outline-none focus:border-blue-500"
            />

            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              {t.newsletter.button}
            </button>
          </div>

        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Logo + Description */}
        <div>
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/Home/ZQ_APP_icon.png"
              alt="ZeroQueries Logo"
              width="120"
              height="120"
              loading="lazy"
              className="w-20 group-hover:scale-110 transition-transform duration-300"
            />

            <span className="text-[22px] font-extrabold tracking-wide hidden sm:block 
  bg-gradient-to-r from-white via-slate-200 to-slate-400 
  bg-clip-text text-transparent 
  group-hover:from-white group-hover:to-white 
  transition-all duration-300">
              ZeroQueries
            </span>
          </div>

          <p className="text-sm leading-relaxed mb-6">
            {t.description}
          </p>

          {/* <div className="flex gap-4">

            <a className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <Linkedin size={18} />
            </a>

            <a className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <Twitter size={18} />
            </a>

            <a className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <Github size={18} />
            </a>

          </div> */}
        </div>

        {/* Footer Links */}
        {Object.entries(t.sections).map(([key, section]: [string, any]) => (
          <div key={key}>
            <h3 className="text-white font-semibold mb-6">
              {section.title}
            </h3>

            <ul className="space-y-3 text-sm">
              {section.links.map((link: any, i: number) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        onNavigate('home', link.href.substring(1));
                      } else if (link.href === '/partners.html') {
                        e.preventDefault();
                        onNavigate('partners');
                      }
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <p className="text-sm text-slate-400">
            {t.copyright}
          </p>

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {t.status}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;