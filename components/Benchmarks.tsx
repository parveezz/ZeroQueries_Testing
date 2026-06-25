
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Zap, Users, Database, Activity, Server } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Benchmarks: React.FC<Props> = ({ t, lang }) => {
  const icons = [Zap, Users, Database, Activity];

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
            {t.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.metrics.map((metric: any, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] glass border-white/5"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-6" />
                  <h3 className={`text-sm font-black text-white uppercase tracking-widest mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {metric.title}
                  </h3>
                  <ul className="space-y-2">
                    {metric.items.map((item: string, j: number) => (
                      <li key={j} className={`text-xs text-slate-400 flex items-center gap-2 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                        <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="p-12 rounded-[3.5rem] glass border-white/10 bg-gradient-to-br from-blue-500/5 to-transparent flex flex-col">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.environment.title}</h3>
            </div>
            <ul className="space-y-6 ">
              {t.environment.items.map((item: string, i: number) => (
                <li key={i} className={`flex gap-4 items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className={`text-slate-300 font-medium ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{item}</span>
                </li>

              ))}
            </ul>
            <p className="mt-10 text-sm text-slate-400 leading-relaxed">
              {t.para}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;
