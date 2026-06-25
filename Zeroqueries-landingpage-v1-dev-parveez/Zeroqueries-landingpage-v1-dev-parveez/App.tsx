
import React, { useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const Problem = React.lazy(() => import('./components/Problem'));
const Solution = React.lazy(() => import('./components/Solution'));
const Features = React.lazy(() => import('./components/Features'));
const Footer = React.lazy(() => import('./components/Footer'));
const ProblemDeepDive = React.lazy(() => import('./components/ProblemDeepDive'));

const Process = React.lazy(() => import('./components/Process'));
const Security = React.lazy(() => import('./components/Security'));
const Architecture = React.lazy(() => import('./components/Architecture'));
const Benchmarks = React.lazy(() => import('./components/Benchmarks'));
const UseCases = React.lazy(() => import('./components/UseCases'));
const IndustrySolutions = React.lazy(() => import('./components/IndustrySolutions'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Comparison = React.lazy(() => import('./components/Comparison'));
const ComparisonMatrix = React.lazy(() => import('./components/ComparisonMatrix'));
const ROICalculator = React.lazy(() => import('./components/ROICalculator'));
const CustomerStories = React.lazy(() => import('./components/CustomerStories'));
const FAQ = React.lazy(() => import('./components/FAQ'));

const DemoRequest = React.lazy(() => import('./pages/DemoRequest'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Partners = React.lazy(() => import('./pages/Partners').then(module => ({ default: module.Partners })));
const Blog = React.lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
import { Language, translations } from './translations';

const LazySection: React.FC<{ children: React.ReactNode; minHeight?: string }> = ({ children, minHeight = '200px' }) => {
  const [inView, setInView] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full" style={{ minHeight }}>
      {inView ? (
        <React.Suspense fallback={
          <div className="flex items-center justify-center w-full" style={{ minHeight }}>
            <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          {children}
        </React.Suspense>
      ) : null}
    </div>
  );
};

export type View = 'home' | 'demo' | 'auth' | 'partners' | 'blog';

const App: React.FC = () => {
  const [overlay, setOverlay] = useState<View>('home');
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'en';
  });

  const t = translations[lang];

  const handleNavigate = (view: View, hash?: string) => {
    setOverlay(view);
    if (view === 'partners' || view === 'blog') {
      window.scrollTo({ top: 0 });
    } else if (view === 'home') {
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0 });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0 });
      }
    }
  };

  useEffect(() => {
    if (overlay === 'demo' || overlay === 'auth') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [overlay]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    const handleHashAndSearchChange = () => {
      if (window.location.hash === '#demo' || window.location.search.includes('demo=true')) {
        setOverlay('demo');
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    handleHashAndSearchChange();
    window.addEventListener('hashchange', handleHashAndSearchChange);
    return () => window.removeEventListener('hashchange', handleHashAndSearchChange);
  }, []);

  if (overlay === 'partners') {
    return (
      <div className={`relative min-h-screen bg-[#030014] text-slate-200 font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
        <Helmet>
          <title>ZeroQueries | Partner Program</title>
          <meta name="description" content="Join the ZeroQueries Partner Program. Empower your clients with Conversational Intelligence and unlock new recurring revenue streams." />
        </Helmet>
        <Navbar
          onNavigate={handleNavigate}
          lang={lang}
          setLang={setLang}
          t={t.nav}
          solidBg={true}
        />
        <React.Suspense fallback={<div className="min-h-screen bg-[#030014] flex items-center justify-center"><div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Partners
            lang={lang}
            onBack={() => handleNavigate('home')}
            onBookCall={() => handleNavigate('demo')}
          />
        </React.Suspense>
      </div>
    );
  }


  if (overlay === 'blog') {
    return (
      <div className={`relative min-h-screen bg-[#030014] text-slate-200 font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
        <Helmet>
          <title>ZeroQueries | Blog & Insights</title>
          <meta name="description" content="Read the latest insights on Data Analytics, Natural Language to SQL, and Conversational Intelligence from the ZeroQueries team." />
        </Helmet>
        <Navbar
          onNavigate={handleNavigate}
          lang={lang}
          setLang={setLang}
          t={t.nav}
          solidBg={true}
        />
        <React.Suspense fallback={<div className="min-h-screen bg-[#030014] flex items-center justify-center"><div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Blog
            lang={lang}
            onNavigate={handleNavigate}
          />
        </React.Suspense>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen bg-[#030014] text-slate-200 font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Helmet>
        <title>ZeroQueries | Conversational Intelligence for Enterprise Data</title>
        <meta name="description" content="ZeroQueries is the ultimate Natural Language to SQL platform. Let your business users chat directly with your data warehouse securely." />
      </Helmet>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)"
          }
        }}
      />

      <Navbar
        onNavigate={handleNavigate}
        lang={lang}
        setLang={setLang}
        t={t.nav}
      />

      <main className="relative">
        <Hero onCta={() => setOverlay('demo')} t={t.hero} lang={lang} />

        {/* <TrustBar t={t.trustBar} lang={lang} /> */}

        <section id="problem">
          <LazySection minHeight="250px">
            <Problem t={t.problem} lang={lang} />
          </LazySection>
        </section>

        <section id="problem-deep-dive">
          <LazySection minHeight="300px">
            <ProblemDeepDive t={t.problemDeepDive} lang={lang} />
          </LazySection>
        </section>

        <section id="solution">
          <LazySection minHeight="300px">
            <Solution t={t.solution} lang={lang} />
          </LazySection>
        </section>

        <section id="process">
          <LazySection minHeight="250px">
            <Process t={t.demoFlow} lang={lang} />
          </LazySection>
        </section>

        <section id="features">
          <LazySection minHeight="300px">
            <Features t={t.features} lang={lang} />
          </LazySection>
        </section>

        {/* <Integrations t={t.integrations} lang={lang} /> */}

        <section id="security">
          <LazySection minHeight="300px">
            <Security t={t.security} lang={lang} />
          </LazySection>
        </section>

        {/* <Governance t={t.governance} lang={lang} /> */}

        <section id="architecture">
          <LazySection minHeight="300px">
            <Architecture t={t.architecture} lang={lang} />
          </LazySection>
        </section>

        {/* <Compliance t={t.compliance} lang={lang} /> */}
        <section id="benchmarks">
          <LazySection minHeight="300px">
            <Benchmarks t={t.benchmarks} lang={lang} />
          </LazySection>
        </section>

        <section id="use-cases">
          <LazySection minHeight="300px">
            <UseCases t={t.useCases} lang={lang} />
          </LazySection>
        </section>

        <section id="industry-solutions">
          <LazySection minHeight="300px">
            <IndustrySolutions
              t={t.industrySolutions}
              lang={lang}
              onDemoClick={() => setOverlay('demo')}
            />
          </LazySection>
        </section>

        <section id="pricing">
          <LazySection minHeight="400px">
            <Pricing
              t={t.pricing}
              lang={lang}
              onSelect={() => window.location.href = "https://chat.zeroqueries.com"}
            />
          </LazySection>
        </section>

        <section id="comparison">
          <LazySection minHeight="300px">
            <Comparison t={t.roi} lang={lang} />
          </LazySection>
        </section>

        <section id="comparison-matrix">
          <LazySection minHeight="300px">
            <ComparisonMatrix t={t.comparisonMatrix} lang={lang} />
          </LazySection>
        </section>

        <section id="roi-calculator">
          <LazySection minHeight="300px">
            <ROICalculator t={t.roiCalculator} lang={lang} />
          </LazySection>
        </section>

        <section id="customer-stories">
          <LazySection minHeight="300px">
            <CustomerStories t={t.customerStories} lang={lang} />
          </LazySection>
        </section>

        {/* <DemoPreview t={t.demoPreview} lang={lang} /> */}

        <section id="faq">
          <LazySection minHeight="300px">
            <FAQ t={t.faq} lang={lang} />
          </LazySection>
        </section>

        {/* <Developer t={t.developer} lang={lang} /> */}

        {/* <section id="resource-center">
          <ResourceCenter t={t.resourceCenter} lang={lang} />
        </section> */}

        <section className="py-40 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10 tracking-tighter">
              {t.finalCta.headline}
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              {t.finalCta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setOverlay('demo')}
                className="btn-premium px-12 py-5 rounded-full font-bold text-lg w-full sm:w-auto"
              >
                {t.finalCta.button}
              </button>
            </div>
          </div>
        </section>
      </main>

      <LazySection minHeight="200px">
        <Footer onNavigate={handleNavigate} t={t.footer} lang={lang} />
      </LazySection>

      {/* Premium Responsive Overlay System */}
      {overlay !== 'home' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in"
            onClick={() => setOverlay('home')}
          />
          <div className="relative w-full max-w-4xl glass rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col animate-reveal">
            <button
              onClick={() => setOverlay('home')}
              className={`absolute top-2 ${lang === 'ar' ? 'left-6' : 'right-6'} z-[210] p-2 text-slate-400 hover:text-white transition-colors`}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex-1 overflow-y-auto scrollbar-hide py-12 px-6 sm:px-12">
              <React.Suspense fallback={<div className="flex items-center justify-center min-h-[300px]"><div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
                {overlay === 'demo' ? <DemoRequest onBack={() => setOverlay('home')} lang={lang} /> : <Auth onBack={() => setOverlay('home')} lang={lang} />}
              </React.Suspense>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
