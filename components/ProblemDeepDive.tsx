
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, Clock } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const ProblemDeepDive: React.FC<Props> = ({ t, lang }) => {
  const icons = [AlertCircle, TrendingDown, Clock];

  return (
    <section className="py-40 px-6 bg-gradient-to-b from-transparent to-red-500/5">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
            >
              {t.headline}
            </motion.h2>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              {t.description}
            </p>
            <p className="text-slate-400 mb-12">
              {t.subDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.stats.map((stat: any, i: number) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                  >
                    <Icon className="w-6 h-6 text-red-500/50 mb-4" />
                    <div className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
            
            <p className="mt-12 text-sm font-bold text-red-500/50 uppercase tracking-[0.2em]">
              {t.footer}
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-[120px] rounded-full" />
            <div className="relative glass p-8 rounded-[3rem] border-white/10 aspect-square flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border-2 border-dashed border-red-500/20 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border-2 border-dashed border-red-500/40 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse" />
                </div>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertCircle className="w-20 h-20 text-red-500 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDeepDive;
