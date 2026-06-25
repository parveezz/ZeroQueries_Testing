
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Check, Minus } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const ComparisonMatrix: React.FC<Props> = ({ t, lang }) => {
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

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {t.matrix.headers.map((header: string, i: number) => (
                  <th key={i} className={`p-8 text-xs font-black uppercase tracking-widest text-slate-500 ${lang === 'ar' ? 'text-right' : 'text-left'} ${i === 3 ? 'text-blue-400' : ''}`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.matrix.rows.map((row: any[], i: number) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  {row.map((cell: string, j: number) => (
                    <td key={j} className={`p-8 text-sm font-medium ${j === 0 ? 'text-white' : 'text-slate-400'} ${j === 3 ? 'text-blue-400 font-bold bg-blue-500/5' : ''} ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.advantages.map((adv: string, i: number) => (
            <div key={i} className={`flex items-center gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-sm font-bold text-white">{adv}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
