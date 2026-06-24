
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Building2, HeartPulse, ShoppingBag, Laptop, Landmark, Truck } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
  onDemoClick: () => void;
}

const IndustrySolutions: React.FC<Props> = ({ t, lang, onDemoClick }) => {
  const icons = [Landmark, HeartPulse, ShoppingBag, Laptop, Building2, Truck];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.industries.map((industry: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] glass border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${lang === 'ar' ? 'mr-0' : 'ml-0'}`}>
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {industry.title}
                </h3>
                <p className={`text-slate-400 leading-relaxed text-sm ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {industry.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onDemoClick}
            className="btn-premium px-12 py-5 rounded-full font-bold text-lg"
          >
            {t.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
