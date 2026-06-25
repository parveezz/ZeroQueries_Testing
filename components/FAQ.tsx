
import React, { useState } from 'react';
import { Language } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const FAQ: React.FC<Props> = ({ t, lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-4"
          >
            {t.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-medium"
          >
            {t.subheadline}
          </motion.p>
        </div>

        <div className="space-y-4">
          {t.items.map((faq: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group transition-all duration-500 ${openIndex === i ? 'bg-white/[0.03]' : 'bg-white/[0.01] hover:bg-white/[0.02]'} rounded-3xl border border-white/5`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full px-8 py-8 flex items-center justify-between ${lang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <span className={`font-bold text-lg md:text-xl transition-colors duration-500 ${openIndex === i ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-500'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`px-8 pb-10 text-slate-400 text-lg leading-relaxed font-light ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
