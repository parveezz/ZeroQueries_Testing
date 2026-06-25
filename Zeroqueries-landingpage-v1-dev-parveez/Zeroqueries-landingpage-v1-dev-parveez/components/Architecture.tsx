
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Shield, Cpu, Lock, Globe, List, Database } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Architecture: React.FC<Props> = ({ t, lang }) => {
  const icons = [Database, Cpu, Lock, Shield, List, Globe];

  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            {t.headline}
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.specs.map((spec: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] glass border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${lang === 'ar' ? 'mr-0' : 'ml-0'}`}>
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {spec.title}
                </h3>
                <p className={`text-slate-400 leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {spec.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
