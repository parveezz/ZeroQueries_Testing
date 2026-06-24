
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';

interface Props {
  t: any;
  lang: Language;
}

const TrustBar: React.FC<Props> = ({ t, lang }) => {
  return (
    <div id="partners" className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-2">
            {t.headline}
          </p>
          <p className="text-xs text-slate-600">
            {t.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {t.logos.map((logo: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-black text-white tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
