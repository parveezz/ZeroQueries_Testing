
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Comparison: React.FC<Props> = ({ t, lang }) => {
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
          <div className="h-1 w-24 bg-blue-500/50 mx-auto rounded-full"></div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Legacy Platform */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[4rem] border border-white/5 bg-white/[0.01] opacity-60 filter grayscale transition-all hover:grayscale-0 hover:opacity-100"
          >
            <h3 className={`text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-12 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {t.legacy.title}
            </h3>
            <ul className="space-y-10">
              {t.legacy.items.map((item: any, i: number) => (
                <li key={i} className={`flex gap-6 items-start ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <XCircle className="w-6 h-6 text-red-500/50 mt-1 shrink-0" />
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="text-lg font-bold text-slate-400 mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ZeroQueries Platform */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[4rem] glass border-white/10 relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-transparent"
          >
            <div className={`absolute top-10 ${lang === 'ar' ? 'left-10' : 'right-10'} px-4 py-1.5 bg-blue-500 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-500/40`}>
              {t.zeroQueries.badge}
            </div>
            <h3 className={`text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-12 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {t.zeroQueries.title}
            </h3>
            <ul className="space-y-10">
              {t.zeroQueries.items.map((item: any, i: number) => (
                <li key={i} className={`flex gap-6 items-start group ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle2 className="w-6 h-6 text-blue-400 mt-1 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-16 pt-10 border-t border-white/5">
               <p className={`text-sm text-slate-500 font-medium italic ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                 "{t.zeroQueries.quote}"
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
