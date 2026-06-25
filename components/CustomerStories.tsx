
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const CustomerStories: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-40 px-6 bg-white/[0.01]">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.stories.map((story: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] glass border-white/5 flex flex-col"
            >
              <div className="mb-8">
                <Quote className={`w-10 h-10 text-blue-500/20 ${lang === 'ar' ? 'mr-auto' : 'ml-0'}`} />
              </div>
              
              <p className={`text-lg text-white font-medium mb-10 leading-relaxed italic ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                "{story.quote}"
              </p>
              
              <div className="mt-auto">
                <div className={`mb-6 pb-6 border-b border-white/5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div className="text-white font-bold mb-1">{story.author}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-black">{story.title}</div>
                </div>
                
                <div className="space-y-4">
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <div className="text-[10px] font-black text-red-500/50 uppercase tracking-widest mb-1">Challenge</div>
                    <div className="text-sm text-slate-400">{story.challenge}</div>
                  </div>
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <div className="text-[10px] font-black text-blue-500/50 uppercase tracking-widest mb-1">Result</div>
                    <div className="text-sm text-blue-400 font-bold">{story.result}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       {t.stories.length > 3 && (
  <div className="mt-20 text-center">
    <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">
      {t.footer}
      <svg
        className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  </div>
)}
      </div>
    </section>
  );
};

export default CustomerStories;
