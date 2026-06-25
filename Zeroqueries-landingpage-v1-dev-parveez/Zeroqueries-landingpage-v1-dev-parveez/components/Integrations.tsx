
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';

interface Props {
  t: any;
  lang: Language;
}

const Integrations: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-40 px-6 bg-white/[0.01] border-y border-white/5">
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
            {t.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.categories.map((cat: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={lang === 'ar' ? 'text-right' : 'text-left'}
            >
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-8">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item: string, j: number) => (
                  <li key={j} className="text-slate-400 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.4em]">
            {t.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
