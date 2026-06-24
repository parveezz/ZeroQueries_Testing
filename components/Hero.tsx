
import React, { useEffect, useState } from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';

interface Props {
  onCta: () => void;
  t: any;
  lang: Language;
}

const Hero: React.FC<Props> = ({ onCta, t, lang }) => {
  const [displayText, setDisplayText] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const fullText = t.tagline;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 5000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: Messaging */}
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-center lg:${lang === 'ar' ? 'text-right' : 'text-left'}`}
        >
          {/* <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            {lang === 'en' ? 'Conversational Data Intelligence' : 'ذكاء البيانات المحادثي'} */}
          {/* </div> */}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.1] mb-10">
            {t.headline.split(' ').map((word: string, i: number) => (
              word.toLowerCase() === 'ai' || word === 'ذكاء' ? <span key={i} className="premium-gradient">{word} </span> : word + ' '
            ))}
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-light mx-auto lg:mx-0">
            {t.subheadline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto lg:mx-0">
            {t.benefits.map((benefit: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
            <button
              onClick={onCta}
              className="btn-premium px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs w-full sm:w-auto"
            >
              {t.ctaDemo}
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="group flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-colors"
            >
              {t.ctaHow}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <Play className={`w-4 h-4 fill-current ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

          <div className="relative glass rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 hover:border-blue-500/30">
            <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">zeroqueries-engine-v2.5</span>
            </div>

            <div className="p-8 sm:p-12 space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400 flex-shrink-0">USER</div>
                <div className="text-white text-xl md:text-2xl font-medium tracking-tight leading-snug min-h-[3.5rem] md:min-h-[4rem]">
                  {displayText}<span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse"></span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-3 text-blue-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  {lang === 'en' ? 'Processing Insights...' : 'جاري معالجة البيانات...'}
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-2xl border border-white/5">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">{lang === 'en' ? 'Revenue' : 'الإيرادات'}</div>
                      <div className="text-white font-bold">$2.4M</div>
                    </div>
                    <div className="glass p-4 rounded-2xl border border-white/5">
                      <div className="text-[10px] text-slate-500 uppercase mb-1">{lang === 'en' ? 'Growth' : 'النمو'}</div>
                      <div className="text-green-400 font-bold">+18.2%</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl px-6">

          <div className="relative w-full max-w-5xl">

            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-7 right-0 text-slate-300 hover:text-white transition text-2xl"
              aria-label="Close video"
            >
              ✕
            </button>

            {/* Video Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">

              <video
                src="/Home/home-video.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>
      )}
    </section>
  );
};

export default Hero;
