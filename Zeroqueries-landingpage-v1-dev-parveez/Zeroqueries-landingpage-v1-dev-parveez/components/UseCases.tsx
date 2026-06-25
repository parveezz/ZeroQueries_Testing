
import React, { useState } from 'react';
import { Language } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const UseCases: React.FC<Props> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 bg-white/[0.01] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white tracking-tighter mb-4"
          >
            {t.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            {t.subheadline}
          </motion.p>
        </div>

        <div className={`glass rounded-[3rem] p-4 flex flex-wrap gap-2 mb-12 max-w-2xl mx-auto border border-white/5 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          {t.cases.map((c: any, i: number) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === i ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500 hover:text-white'}`}
            >
              {c.role}
            </button>
          ))}
        </div>

        <div className="glass rounded-[3rem] p-12 md:p-16 border border-white/5 relative overflow-hidden min-h-[400px]">
          <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-64 h-64 bg-blue-500/5 blur-[100px]`}></div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
              transition={{ duration: 0.3 }}
              className={`relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <h3 className="text-3xl font-bold text-white mb-4">{t.cases[activeTab].role}</h3>
              <p className={`text-slate-400 text-lg mb-10 max-w-xl ${lang === 'ar' ? 'mr-auto' : ''}`}>{t.cases[activeTab].desc}</p>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">{t.commonInquiries}</p>
                {t.cases[activeTab].questions.map((q: string, i: number) => (
                  <div key={i} className={`flex items-center gap-4 group ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-blue-400 border border-white/5 group-hover:border-blue-500/30 transition-all">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-slate-300 italic text-lg leading-none">"{q}"</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
