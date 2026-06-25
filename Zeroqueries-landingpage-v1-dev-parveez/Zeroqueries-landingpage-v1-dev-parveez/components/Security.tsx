
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Shield, Lock, Users, Eye, History } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Security: React.FC<Props> = ({ t, lang }) => {
  const icons = [Lock, Users, Eye, History];
  const colors = ['bg-blue-500', 'bg-cyan-500', 'bg-purple-500', 'bg-emerald-500'];

  return (
    <section id="security" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[3rem] p-12 md:p-20 overflow-hidden border border-white/5"
        >
          {/* Animated Background Element */}
          <div className={`absolute top-0 ${lang === 'ar' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-1/2 h-full from-blue-600/10 to-transparent pointer-events-none`}></div>
          
          <div className={`flex flex-col lg:flex-row gap-16 items-center ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-3/5 relative z-10">
              <div className={`flex items-center gap-3 mb-8 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-blue-600/20 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">{t.headline}</h2>
              </div>
              <p className={`text-xl text-slate-400 mb-12 leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                {t.subheadline}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {t.items.map((item: any, i: number) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <div key={i} className="group">
                      <h3 className={`text-white font-bold mb-3 flex items-center gap-2 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${colors[i % colors.length]} group-hover:scale-150 transition-transform`}></span>
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                        {item.title}
                      </h3>
                      <p className={`text-slate-400 text-sm leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:w-2/5 flex justify-center relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] animate-pulse"></div>
              <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
                 <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: [12, -12, 12] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="w-32 h-32 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center rotate-12"
                    >
                      <Lock className="w-16 h-16 text-white" />
                    </motion.div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
