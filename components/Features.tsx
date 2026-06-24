
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { BrainCircuit, ShieldCheck, MessageSquareText } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Features: React.FC<Props> = ({ t, lang }) => {
  const icons = [BrainCircuit, ShieldCheck, MessageSquareText];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-4"
          >
            {t.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-medium max-w-xl mx-auto text-lg"
          >
            {t.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((f: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group p-10 rounded-[3rem] transition-all duration-700 hover:bg-white/[0.02] border border-white/5 hover:border-blue-500/20"
              >
                <div className={`w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg ${lang === 'ar' ? 'mr-0' : ''}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {f.title}
                </h3>
                <p className={`text-slate-400 text-lg leading-relaxed font-light ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {f.desc}
                </p>
                
                <div className={`mt-10 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-1000 ${lang === 'ar' ? 'mr-auto' : 'ml-0'}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
