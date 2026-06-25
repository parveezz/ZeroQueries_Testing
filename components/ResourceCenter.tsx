
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { FileText, BookOpen, PlayCircle, Download, ArrowRight } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const ResourceCenter: React.FC<Props> = ({ t, lang }) => {
  return (
    <section className="py-40 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className={`max-w-2xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              {t.headline}
            </motion.h2>
            <p className="text-xl text-slate-400">
              {t.subheadline}
            </p>
          </div>
          <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2">
            {t.button}
            <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {item.type === 'Webinar' ? <PlayCircle className="w-6 h-6 text-blue-400" /> : <FileText className="w-6 h-6 text-blue-400" />}
                  </div>
                </div>
                <div className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10`}>
                  {item.type}
                </div>
              </div>
              
              <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
