
import React, { useState } from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Calculator, Zap, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
}

const ROICalculator: React.FC<Props> = ({ t, lang }) => {
  const icons = [Clock, Zap, TrendingUp, ShieldCheck];
  const [showCalculator, setShowCalculator] = useState(false);

  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [hoursSaved, setHoursSaved] = useState(5);

  const roi = employees * hoursSaved * 52 * (avgSalary / 2080);

  return (
    <>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {t.impacts.map((impact: any, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[3rem] glass border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                      <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">{impact.title}</h3>
                      <div className="text-3xl font-black text-white mb-2 tracking-tighter">{impact.value}</div>
                      <p className="text-blue-400 font-bold text-sm">{impact.sub}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="glass p-12 rounded-[4rem] border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">{t.cta}</h3>
              <button
                onClick={() => setShowCalculator(true)}
                className="btn-premium px-12 py-5 rounded-full font-bold text-lg"
              >
                {t.button}
              </button>
            </div>
          </div>
        </div>
      </section>
      {showCalculator && (
        <div className="fixed mt-20 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-white/10 relative ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <button
              onClick={() => setShowCalculator(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className={`text-2xl font-bold text-white mb-6 flex items-center gap-2 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Calculator className="w-6 h-6 text-blue-400" />
              {lang === "ar" ? "حاسبة العائد على الاستثمار" : "ROI Calculator"}
            </h3>

            <div className="space-y-3">

              <div>
                <label className="text-sm text-slate-400">
                  {lang === "ar" ? "حجم فريق البيانات" : "Data Team Size"}
                </label>
                <input
                  type="number"
                  min="0"
                  value={employees}
                  onChange={(e) => setEmployees(Math.max(0, Number(e.target.value)))}
                  className="w-full mt-1 px-4 py-3 bg-slate-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  {lang === "ar" ? "متوسط الراتب ($)" : "Average Salary ($)"}
                </label>
                <input
                  type="number"
                  min="0"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Math.max(0, Number(e.target.value)))}
                  className="w-full mt-1 px-4 py-3 bg-slate-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  {lang === "ar" ? "الساعات التي يتم توفيرها أسبوعياً" : "Hours Saved Per Week"}
                </label>
                <input
                  type="number"
                  min="0"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Math.max(0, Number(e.target.value)))}
                  className="w-full mt-1 px-4 py-3 bg-slate-800 rounded-xl text-white"
                />
              </div>

            </div>

            <div className="mt-4 text-center">
              <p className="text-slate-400 text-sm mb-2">
                {lang === "ar" ? "العائد السنوي المتوقع" : "Estimated Annual ROI"}
              </p>
              <div className="text-3xl font-bold text-blue-400">
                ${roi.toLocaleString()}
              </div>
            </div>

          </div>
        </div>

      )}
    </>
  );
};

export default ROICalculator;
