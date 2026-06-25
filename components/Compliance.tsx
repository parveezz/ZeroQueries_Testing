
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Lock, CheckCircle2 } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Compliance: React.FC<Props> = ({ t, lang }) => {
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

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {t.certifications.map((cert: string, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              {cert}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className={`text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              Regional Data Residency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.regions.map((region: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl glass border-white/5"
                >
                  <div className="text-2xl font-black text-white mb-2">{region.name}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{region.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-12 rounded-[3rem] glass border-white/10 bg-gradient-to-br from-blue-500/5 to-transparent">
            <h3 className={`text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              Security Infrastructure
            </h3>
            <ul className="space-y-6">
              {t.features.map((feature: string, i: number) => (
                <li key={i} className={`flex gap-4 items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className={`text-slate-300 font-medium ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-12 w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              {t.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
