
import React from 'react';
import { Language, translations } from '../translations';

interface Props {
  onBack: () => void;
  lang: Language;
}

const Auth: React.FC<Props> = ({ onBack, lang }) => {
  const t = translations[lang].auth;

  return (
    <div className={`max-w-md mx-auto py-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className="text-center mb-10">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-45">
          <span className="text-white font-black text-lg tracking-tighter -rotate-45">ZQ</span>
        </div>
        <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-1">{t.title}</h2>
        <p className="text-slate-400 text-sm font-medium">{t.subtitle}</p>
      </div>

      <div className="space-y-4">
        <button className={`w-full py-4 glass border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-white font-bold hover:bg-white/5 transition-all text-xs uppercase tracking-widest ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.288-3.312 2.552-7.12 2.552-6.392 0-11.432-5.112-11.432-11.432s5.04-11.432 11.432-11.432c3.416 0 5.856 1.352 7.64 3.056l-2.152 2.152c-1.248-1.184-2.92-2.136-5.488-2.136-4.904 0-8.832 3.992-8.832 8.896s3.928 8.896 8.832 8.896c2.688 0 4.216-1.08 5.232-2.096.672-.672 1.12-1.616 1.32-2.92h-6.552z"/>
          </svg>
          {t.google}
        </button>
        
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-[10px] text-slate-700 font-black uppercase tracking-[0.2em]">{t.or}</span>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <form className="space-y-4">
          <input type="email" className={`w-full glass bg-white/5 px-5 py-4 rounded-2xl text-white text-sm outline-none transition-all placeholder:text-slate-800 ${lang === 'ar' ? 'text-right' : 'text-left'}`} placeholder={t.email} />
          <input type="password" className={`w-full glass bg-white/5 px-5 py-4 rounded-2xl text-white text-sm outline-none transition-all placeholder:text-slate-800 ${lang === 'ar' ? 'text-right' : 'text-left'}`} placeholder={t.password} />
          <button className="w-full py-4 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-[0.2em]">
            {t.submit}
          </button>
        </form>
      </div>

      <div className="mt-10 text-center">
        <button 
          onClick={onBack}
          className="text-[10px] text-slate-400 font-bold hover:text-white transition-colors uppercase tracking-[0.2em]"
        >
          {t.noSession}
        </button>
      </div>
    </div>
  );
};

export default Auth;
