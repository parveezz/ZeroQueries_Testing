
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Terminal, Github, Book, Code2, Cpu, Globe, GitBranch, Layers, Box } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const Developer: React.FC<Props> = ({ t, lang }) => {
  const icons = [Terminal, Book, Code2, Globe, Box, GitBranch, Layers];

  return (
    <section className="py-40 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row justify-between items-end gap-12 mb-24 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
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
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <Book className="w-4 h-4" />
              {t.docsButton}
            </button>
            <button className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all flex items-center gap-2">
              <Github className="w-4 h-4" />
              {t.githubButton}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] glass border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${lang === 'ar' ? 'mr-0' : 'ml-0'}`}>
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {feature.title}
                </h3>
                <pre className={`text-slate-400 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-xl border border-white/5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {feature.desc}
                </pre>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Developer;
