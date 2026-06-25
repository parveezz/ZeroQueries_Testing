import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import {
  Check,
  Rocket,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
  Scale,
  MessageSquare,
  Database,
  BarChart3,
  Lock,
  Headphones,
  CloudLightning,
  Percent,
  CheckCircle2
} from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
  onSelect: () => void;
}

const Pricing: React.FC<Props> = ({ t, lang, onSelect }) => {
  const isAr = lang === 'ar';

  const allPlansIcons = [
    <MessageSquare className="w-5 h-5 text-blue-400" />,
    <Database className="w-5 h-5 text-blue-400" />,
    <BarChart3 className="w-5 h-5 text-blue-400" />,
    <Lock className="w-5 h-5 text-blue-400" />,
    <Headphones className="w-5 h-5 text-blue-400" />,
    <CloudLightning className="w-5 h-5 text-blue-400" />
  ];

  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case 'rocket':
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6">
            <Rocket className="w-8 h-8" />
          </div>
        );
      case 'trending':
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white mb-6">
            <TrendingUp className="w-8 h-8" />
          </div>
        );
      case 'building':
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
            <Building2 className="w-8 h-8" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header section */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6"
          >
            {t.headline.split('.').map((part: string, idx: number) => {
              if (idx === 1 && part.trim()) {
                return <span key={idx} className="text-[#9333ea]">. {part}</span>;
              }
              return part;
            })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            {t.subheadline}
          </motion.p>
        </div>

        {/* Pricing columns grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Card 1: All Plans Include */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] p-8 md:p-10 border border-white/5 flex flex-col justify-center"
          >
            <h3 className={`text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-400 ${isAr ? 'text-right' : 'text-left'}`}>
              {t.allPlansInclude.title}
            </h3>
            <ul className="space-y-6">
              {t.allPlansInclude.features.map((item: string, i: number) => (
                <li key={i} className={`flex items-start gap-4 ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                    {allPlansIcons[i] || <Check className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-300 leading-snug">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cards 2-4: Starter, Growth, Enterprise plans */}
          {t.plans.map((plan: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className={`relative group p-px rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${plan.highlight ? 'bg-gradient-to-b from-[#40196f] to-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.1)]' : 'bg-white/5'}`}
            >
              <div className="h-full bg-[#030014]/95 rounded-[2.45rem] p-8 md:p-10 flex flex-col justify-between">

                <div className={`mb-8 flex flex-col items-center text-center relative`}>
                  {plan.badge && (
                    <span className="absolute -top-14 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                      {plan.badge}
                    </span>
                  )}
                  {getPlanIcon(plan.icon)}
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mb-6 font-light">{plan.description}</p>

                  <div className="w-full border-t border-white/5 my-2" />

                  <div className="flex flex-col items-center justify-center mt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-white tracking-tighter">{plan.price}</span>
                      {plan.period && <span className="text-slate-400 font-bold text-sm">{plan.period}</span>}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">{plan.billedInfo}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className={`flex items-center gap-3 text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors tracking-tight ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}>
                      <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-pink-500' : 'text-blue-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onSelect}
                  className={`w-full py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 hover:scale-[1.02] ${plan.highlight ? 'bg-gradient-to-r from-[#40196f] to-pink-500 text-white shadow-2xl shadow-pink-500/20' : 'glass text-white border-white/10 hover:bg-white/5'}`}
                >
                  <span>{plan.button}</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Footer features row */}
        <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.footerFeatures.map((feat: any, idx: number) => {
            const getFooterIcon = (icon: string) => {
              switch (icon) {
                case 'users':
                  return <Users className="w-5 h-5 text-blue-400" />;
                case 'shield':
                  return <ShieldCheck className="w-5 h-5 text-blue-400" />;
                case 'scale':
                  return <Scale className="w-5 h-5 text-blue-400" />;
                case 'check':
                  return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
                case 'discount':
                  return <Percent className="w-5 h-5 text-blue-400" />;
                default:
                  return null;
              }
            };
            return (
              <div key={idx} className={`flex items-start gap-3 ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0">
                  {getFooterIcon(feat.icon)}
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider mb-0.5">{feat.title}</div>
                  <p className="text-[10px] text-slate-400 leading-tight font-light">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
