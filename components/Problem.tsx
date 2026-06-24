
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { AlertCircle, Clock, Users, Database } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Problem: React.FC<Props> = ({ t, lang }) => {
  const icons = [Clock, Users, Database, AlertCircle];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-20 items-center ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
             <div className={`w-16 h-1 bg-blue-500 mb-8 rounded-full ${lang === 'ar' ? 'mr-0 ml-auto' : ''}`}></div>
             <h2 className={`text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
               {t.headline}
             </h2>
             <p className={`text-xl text-slate-400 leading-relaxed mb-6 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
               {t.description}
             </p>
             <p className={`text-lg text-slate-400 leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
               {t.subDescription}
             </p>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.commonProblems.map((problem: string, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors ${lang === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className={`text-lg font-bold text-white mb-3 tracking-tight ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {problem}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
