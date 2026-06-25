import React, { useState, useEffect } from 'react';
import { Language, translations } from '../translations';
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Share2, Bookmark, ChevronRight, MessageSquare, Zap, Database, Shield, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { getBlogData } from './blogData';
import Footer from '../components/Footer';

interface Props {
  lang: Language;
  onNavigate: (id: string) => void;
  heading?: string;
  paragraph?: string;
}

export const Blog: React.FC<Props> = ({ lang, onNavigate, heading, paragraph }) => {
  const isAr = lang === 'ar';
  const t = translations[lang];

  // Default to list view
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dummyPosts = getBlogData(isAr);

  const post = selectedPost ? dummyPosts.find(p => p.id === selectedPost) : null;

  const renderContentBlock = (block: any, idx: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            key={idx}
            className="text-base md:text-lg text-white/90 leading-relaxed font-light"
          >
            {block.text}
          </motion.p>
        );
      case 'heading':
        return (
          <motion.h2
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={idx}
            className="text-2xl md:text-3xl font-bold text-white mt-16 mb-8"
          >
            {block.text}
          </motion.h2>
        );
      case 'quote':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={idx}
            className="my-16 relative"
          >
            <div className="absolute -top-6 -left-6 text-white/5">
              <Quote size={80} className={isAr ? "rotate-180" : ""} />
            </div>
            <blockquote className="relative z-10 text-xl md:text-2xl font-medium text-slate-300 italic leading-snug border-l-2 border-[#8b5cf6] pl-6 ml-4">
              "{block.text}"
              {block.author && (
                <footer className="text-sm text-slate-500 mt-4 not-italic font-normal flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-slate-700"></div>
                  {block.author}
                </footer>
              )}
            </blockquote>
          </motion.div>
        );
      case 'highlight':
        const Icon = block.icon === 'Zap' ? Zap : block.icon === 'Database' ? Database : Shield;
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={idx}
            className="my-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#8b5cf6]">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{block.title}</h3>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed pl-10">
              {block.text}
            </p>
          </motion.div>
        );
      case 'split_section':
        return (
          <div key={idx} className="my-16">
            <div className="flex flex-col space-y-6">
              {block.subContent.map((subBlock: any, subIdx: number) => {
                if (subBlock.type === 'heading') {
                  return <h2 key={subIdx} className="text-2xl md:text-3xl font-bold text-white mt-2 mb-2">{subBlock.text}</h2>;
                }
                if (subBlock.type === 'paragraph') {
                  return <p key={subIdx} className="text-base md:text-lg text-white/90 leading-relaxed font-light">{subBlock.text}</p>;
                }
                return null;
              })}
            </div>
          </div>
        );
      case 'cta':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={idx}
            className={`my-16 text-center space-y-6 py-10 border-y border-white/10`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{block.text}</h3>
            <button className="text-[#8b5cf6] font-bold text-lg hover:text-white transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-[#8b5cf6]">
              {isAr ? 'تحدث معنا' : 'Schedule a Partner Discussion'}
            </button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`text-slate-200 min-h-screen overflow-x-hidden font-sans ${isAr ? 'text-right' : 'text-left'} selection:bg-blue-500/30`}>


      <div className="pt-24 pb-12 px-6 max-w-[120rem] mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex flex-col mb-16">

                {/* Heading and Paragraph */}
                <div className="mb-12">
                  <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight ${isAr ? 'text-right' : 'text-left'}`}>
                    {heading || (isAr ? 'يبدأ ابتكار البيانات من هنا' : 'Data Innovation Starts Here')}
                  </h1>
                  <p className={`text-base md:text-lg text-slate-400 leading-relaxed font-normal max-w-3xl whitespace-pre-line ${isAr ? 'text-right ml-auto' : 'text-left'}`}>
                    {paragraph || (isAr ? 'استفد من قوة الذكاء الاصطناعي التخاطبي لدينا. احصل على رؤى لدفع أعمالك إلى الأمام في المشهد التنافسي اليوم. مكّن فريقك من إطلاق الإمكانات الحقيقية لبيانات مؤسستك من خلال إمكانات الذكاء الاصطناعي والتعلم الآلي المتقدمة، والمصممة للسرعة والأمان.' : 'Tap into the power of our conversational intelligence and no-code data platform.\nGet insights to drive your business forward in today\'s competitive landscape. Empower your team to unlock the true potential of your organization\'s data with advanced AI and ML capabilities, designed for speed, security, and effortless scalability.')}
                  </p>
                </div>

                {/* Filter Tags & Search Bar */}
                <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8`}>

                  {/* Filter tags */}
                  <div className={`flex flex-wrap items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                    {['All', 'Product', 'Engineering', 'Data', 'Security', 'Partnerships'].map(filter => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-colors ${activeFilter === filter ? 'bg-[#40196f] text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 shadow-sm'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Search Bar */}
                  <div className={`flex items-center gap-3 w-full lg:w-auto ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="relative w-full lg:w-72 mt-4 lg:mt-0">
                      <div className={`absolute inset-y-0 ${isAr ? 'right-0 pr-4' : 'left-0 pl-4'} flex items-center pointer-events-none`}>
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder={isAr ? "البحث في المدونات..." : "Search blogs..."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full bg-[#0a0a0a] border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#40196f]/50 text-white placeholder-slate-500 transition-shadow ${isAr ? 'text-right pr-12 pl-4' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                {dummyPosts
                  .filter(p => activeFilter === 'All' || p.category === activeFilter)
                  .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((post, idx) => {
                    return (
                      <div
                        key={post.id}
                        onClick={() => setSelectedPost(post.id)}
                        className={`flex flex-col cursor-pointer w-full group`}
                      >
                        <div className={`mb-3 flex items-center ${isAr ? 'justify-end' : 'justify-start'}`}>
                          <div className={`text-[#8b5cf6] text-xs font-bold uppercase tracking-wider`}>
                            {post.category}
                          </div>
                        </div>
                        <h3 className={`text-2xl font-bold text-white mb-3 leading-snug ${isAr ? 'text-right' : 'text-left'} group-hover:text-[#8b5cf6] transition-colors`}>
                          {post.title}
                        </h3>
                        <p className={`text-base text-slate-400 mb-4 flex-grow leading-relaxed line-clamp-3 ${isAr ? 'text-right' : 'text-left'}`}>
                          {post.excerpt}
                        </p>
                        <div className={`text-sm text-slate-500 font-medium flex items-center gap-2 mt-auto ${isAr ? 'justify-end' : 'justify-start'}`}>
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ) : (
            <motion.article
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[90rem] mx-auto"
            >
              <nav className={`mb-16 flex items-center justify-between ${isAr ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setSelectedPost(null)}
                  className={`group flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] hover:bg-white/5 border border-white/10 rounded-full text-sm font-bold text-slate-300 hover:text-white transition-all shadow-sm ${isAr ? 'flex-row-reverse' : ''}`}
                >
                  <div className="group-hover:-translate-x-1 transition-transform">
                    {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  </div>
                  <span>{isAr ? 'العودة للمدونة' : 'Back to Blog'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <button className="p-2.5 rounded-full bg-[#0a0a0a] border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors shadow-sm">
                    <Bookmark size={18} />
                  </button>
                  <button className="p-2.5 rounded-full bg-[#0a0a0a] border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors shadow-sm">
                    <Share2 size={18} />
                  </button>
                </div>
              </nav>

              {post && (
                <>
                  <Helmet>
                    <title>{post.title} | ZeroQueries Blog</title>
                    <meta name="description" content={post.excerpt} />
                  </Helmet>
                  <article className="max-w-3xl mx-auto">
                    <header className="mb-8 pt-4 lg:pt-8">
                      {/* Title */}
                      <h1 className={`text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-8 ${isAr ? 'text-right' : 'text-left'}`}>
                        {post.title}
                      </h1>
                      
                      {/* Author Block */}
                      <div className={`flex items-center gap-4 mb-8 ${isAr ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-full bg-[#40196f] flex items-center justify-center shrink-0">
                          <User size={24} className="text-white" />
                        </div>
                        <div className={`flex flex-col ${isAr ? 'items-end' : 'items-start'}`}>
                          <div className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                            <span className="font-bold text-white text-base">Gen AI @ ZeroQueries</span>
                            <button className="px-3 py-1 rounded-full border border-white/20 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                              {isAr ? 'متابعة' : 'Follow'}
                            </button>
                          </div>
                          <div className={`flex items-center gap-2 text-sm text-slate-400 mt-1 ${isAr ? 'flex-row-reverse' : ''}`}>
                            <span>{post.readTime}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats / Actions Row */}
                      <div className={`flex items-center justify-between py-4 border-y border-white/10 mb-10 ${isAr ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex items-center gap-6 ${isAr ? 'flex-row-reverse' : ''}`}>
                          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                            <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="text-sm font-medium">132</span>
                          </button>
                          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                            <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            <span className="text-sm font-medium">3</span>
                          </button>
                        </div>
                        <div className={`flex items-center gap-5 ${isAr ? 'flex-row-reverse' : ''}`}>
                          <button className="text-slate-400 hover:text-white transition-colors group"><Bookmark size={20} className="group-hover:-translate-y-0.5 transition-transform" /></button>
                          <button className="text-slate-400 hover:text-white transition-colors group"><svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
                          <button className="text-slate-400 hover:text-white transition-colors group"><Share2 size={20} className="group-hover:-translate-y-0.5 transition-transform" /></button>
                        </div>
                      </div>
                    </header>

                    <div className={`prose prose-invert prose-lg max-w-none space-y-8 ${isAr ? 'text-right' : 'text-left'} text-slate-300`}>
                      {post.content?.map((block, idx) => renderContentBlock(block, idx))}
                    </div>
                  </article>

                </>
              )}
            </motion.article>
          )}
        </AnimatePresence>
      </div>
      <Footer onNavigate={onNavigate} t={t.footer} lang={lang} />
    </div>
  );
};
