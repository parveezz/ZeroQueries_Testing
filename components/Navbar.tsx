import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { Language } from '../translations';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  onNavigate: (view: View, hash?: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
  solidBg?: boolean;
}

const Navbar: React.FC<Props> = ({ onNavigate, lang, setLang, t, solidBg }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: t.product, href: '#features' },
    { name: t.solutions, href: '#solution' },
    { name: t.pricing, href: '#pricing' },
    { name: t.partners, href: '/partners.html' },
    { name: lang === 'ar' ? 'المدونة' : 'Blog', href: '/blog.html' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href === '/partners.html') {
      e.preventDefault();
      onNavigate('partners');
    } else if (href === '/blog.html') {
      e.preventDefault();
      onNavigate('blog');
    } else if (href.startsWith('#')) {
      e.preventDefault();
      onNavigate('home', href.substring(1));
    }
  };

  const isRtl = lang === 'ar';

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-4 sm:px-6">
        <div className={`max-w-7xl mx-auto rounded-[2rem] px-4 sm:px-8 py-2 h-16 mt-2 flex justify-between items-center transition-all duration-500 hover:border-white/20 ${solidBg ? 'bg-[#030014] border border-white/10 shadow-lg' : 'glass'}`}>
          <div
            onClick={() => {
              setIsOpen(false);
              onNavigate('home');
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src="/Home/ZQ_APP_icon.png"
              alt="ZeroQueries Logo"
              width="120"
              height="120"
              className="w-24 h-auto group-hover:scale-110 transition-transform duration-300"
            />

            <span
              className="text-[22px] font-extrabold tracking-wide hidden sm:block 
      bg-gradient-to-r from-white via-slate-200 to-slate-400 
      bg-clip-text text-transparent 
      group-hover:from-white group-hover:to-white 
      transition-all duration-300"
            >
              ZeroQueries
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-2 text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'en' ? 'عربي' : 'English'}</span>
              </button>
              <a href="https://chat.zeroqueries.com">
                <button
                  className="text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
                >
                  {t.signIn}
                </button>
              </a>
              <button
                onClick={() => onNavigate('demo')}
                className="bg-white text-black px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-105 cursor-pointer"
              >
                {t.demo}
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon toggles drawer */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-[90] pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-6 mt-4">
              {links.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-bold text-slate-300 hover:text-white transition-colors text-start"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div className="h-px bg-white/10 w-full" />
              
              <div className="flex flex-col gap-4 items-start">
                <a
                  href="https://chat.zeroqueries.com"
                  className="text-lg font-bold text-slate-300 hover:text-white transition-colors text-start"
                  onClick={() => setIsOpen(false)}
                >
                  {t.signIn}
                </a>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('demo');
                }}
                className="w-full bg-white text-black py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 cursor-pointer"
              >
                {t.demo}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
