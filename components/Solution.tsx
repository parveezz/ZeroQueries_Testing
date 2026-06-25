
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { MessageSquare, Zap, Shield, BarChart3 } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Solution: React.FC<Props> = ({ t, lang }) => {
  const icons = [MessageSquare, Zap, Shield, BarChart3];

  return (
    <section className="py-32 px-4 bg-[#050b1f] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className={`w-12 h-1 bg-blue-500 mb-8 ${lang === 'ar' ? 'mr-0 ml-auto' : ''}`}></div>
          <h2 className={`text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {t.headline}
          </h2>
          <p className={`text-xl text-slate-400 mb-12 leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {t.description}
          </p>
          <div className="grid grid-cols-1 gap-8">
            {t.steps.map((step: string, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className={`flex gap-6 items-start ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="bg-blue-600/20 p-3 rounded-2xl border border-blue-500/20 flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-300 font-medium">{step}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className={`mt-10 text-blue-400 font-bold text-lg ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {t.noSql}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full relative"
        >
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="relative glass p-2 rounded-[2.5rem] border border-white/5">
            <div className="bg-slate-900 rounded-[2rem] p-8 shadow-inner border border-white/5">
              <div className={`flex items-center gap-4 mb-10 pb-6 border-b border-white/5 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">ZeroQueries AI</div>
                  <div className="text-xs text-blue-400 font-mono">Status: Connected</div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className={`bg-white/5 rounded-2xl p-4 max-w-[80%] border border-white/5 ${lang === 'ar' ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}>
                  <p className={`text-sm text-slate-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {lang === 'en' ? '"Show revenue by region last quarter"' : '"اعرض الإيرادات حسب المنطقة في الربع الماضي"'}
                  </p>
                </div>
                
                <div className={`flex gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">ZQ</div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 max-w-[85%]">
                    <p className={`text-sm text-white mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {lang === 'en' ? 'Revenue grew by 18% in EMEA region.' : 'نمت الإيرادات بنسبة 18% في منطقة أوروبا والشرق الأوسط وأفريقيا.'}
                    </p>
                    <div className={`flex gap-2 h-12 items-end ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="bg-blue-500/40 rounded-sm w-full h-[100%]"></div>
                      <div className="bg-blue-500/30 rounded-sm w-full h-[80%]"></div>
                      <div className="bg-blue-500/20 rounded-sm w-full h-[68%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`mt-12 flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-slate-400 italic ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {lang === 'en' ? 'Asking another question...' : 'طرح سؤال آخر...'}
                </div>
                <button
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transition-transform hover:rotate-90"
                  aria-label="Generate sample query"
                >
                  <Zap className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
