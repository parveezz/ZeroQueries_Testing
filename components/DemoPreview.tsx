
import React, { useState } from 'react';
import { Language } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Search, Terminal, BarChart3 } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const DemoPreview: React.FC<Props> = ({ t, lang }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAsk = (i: number) => {
    setActiveQuestion(i);
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <h3 className={`text-xs font-black text-slate-400 uppercase tracking-widest mb-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {t.cta}
            </h3>
            {t.questions.map((q: string, i: number) => (
              <button 
                key={i}
                onClick={() => handleAsk(i)}
                className={`w-full p-6 rounded-2xl border transition-all text-sm font-medium flex items-center gap-4 ${activeQuestion === i ? 'bg-blue-500/10 border-blue-500/50 text-white' : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20'} ${lang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeQuestion === i ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-400'}`}>
                  <Search className="w-4 h-4" />
                </div>
                {q}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="glass rounded-[3rem] border-white/10 overflow-hidden aspect-video relative flex flex-col">
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  ZeroQueries Sandbox
                </div>
              </div>
              
              <div className="flex-1 p-12 flex flex-col items-center justify-center text-center relative">
                <AnimatePresence mode="wait">
                  {isProcessing ? (
                    <motion.div 
                      key="processing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-6" />
                      <p className="text-blue-400 font-bold animate-pulse">{t.livePreview}</p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full h-full flex flex-col items-center justify-center"
                    >
                      <BarChart3 className="w-24 h-24 text-blue-500/20 mb-8" />
                      <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                        {t.outputNote}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10">
              <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                <p className="text-white font-bold mb-1">{t.footer}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black">No credit card required</p>
              </div>
              <button className="btn-premium px-10 py-4 rounded-full font-bold text-sm whitespace-nowrap">
                {t.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
