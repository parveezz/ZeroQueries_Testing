
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Search, Code, ShieldCheck, BarChart4 } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Process: React.FC<Props> = ({ t, lang }) => {
  const icons = [Search, Code, ShieldCheck, BarChart4];

  return (
    <section className="py-32 px-6 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-4"
          >
            {t.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-400 font-medium text-lg"
          >
            {t.exampleQuery}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden lg:block -translate-y-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {t.platformSteps.map((step: string, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group text-center lg:text-start"
                >
                  <div className={`mb-8 relative flex justify-center lg:justify-start ${lang === 'ar' ? 'lg:justify-end' : ''}`}>
                    <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl border border-white/5 relative z-10">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className={`absolute -top-6 ${lang === 'ar' ? 'left-0' : 'right-0'} text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none`}>
                      0{i+1}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {step}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <span className="px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold">
            {t.instant}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
