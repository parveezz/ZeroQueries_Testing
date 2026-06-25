import React, { useState } from 'react';
import { Language } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  ArrowRight,
  Briefcase,
  ChevronDown,
  Sparkles,
  Layers,
  TrendingUp,
  DollarSign,
  Download,
  BookOpen,
  HelpCircle,
  FileText,
  Zap,
  ArrowDown
} from 'lucide-react';

interface Props {
  lang: Language;
  onBack: () => void;
  onBookCall: () => void;
}

export const Partners: React.FC<Props> = ({ lang, onBack, onBookCall }) => {
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [downloadingResource, setDownloadingResource] = useState<string | null>(null);

  // Custom states for the interactive booking widget
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactPerson: '',
    email: '',
    country: 'Saudi Arabia',
    services: '',
    customersCount: '5-20',
    industries: '',
    source: '',
    prefDate: '',
    prefTime: ''
  });

  const translations = {
    en: {
      hero: {
        tag: "ZeroQueries Partner Network",
        headline: "Help Customers Unlock The Full Value Of Their Data",
        subheadline: "Organizations invest heavily in applications, databases, analytics platforms, and reporting systems. Yet business users still struggle to get timely answers without analyst support.\n\nZeroQueries helps bridge that gap by enabling natural language access to enterprise data while leveraging existing technology investments.",
        cta: "Schedule Partner Discussion",
        secondaryCta: "Download Partner Overview",
        partnersTypes: [
          "Software Companies",
          "Data Consulting Firms",
          "Analytics Providers",
          "Digital Transformation Partners"
        ],
        partnerNetwork: "GCC Partner Network"
      },
      opportunity: {
        tag: "THE OPPORTUNITY",
        headline: "Most Enterprises Have Data. Few Have Easy Access To Answers.",
        investedTitle: "Organizations have invested millions in:",
        investedItems: [
          "Business Applications (ERP, CRM, HRM)",
          "Modern Data Warehouses & Lakehouses",
          "Analytics & Advanced Platforms",
          "Rigid Performance Dashboards"
        ],
        realityTitle: "Yet business users still depend on:",
        realityItems: [
          "Data Analysts & Specialists",
          "Overwhelmed SQL Writing Teams",
          "Ad-hoc Manual Report Requests",
          "Slow, Complex Dashboard Changes"
        ],
        footer: "This creates delays in decision-making and limits the actual value organizations receive from their technology and data investments."
      },
      whereFits: {
        tag: "WHERE ZEROQUERIES FITS",
        headline: "Designed To Extend Existing Data Investments",
        description: "ZeroQueries complements existing enterprise technology stacks. It does not replace applications, analytics tools, or data platforms. Instead, it provides a business-access layer that enables users to interact with enterprise data through natural language.",
        techStack: {
          applications: { title: "Business Applications", desc: "ERP, CRM, Custom Systems" },
          platforms: { title: "Data Platforms", desc: "Snowflake, Databricks, Azure Data" },
          analytics: { title: "Analytics", desc: "Power BI, Tableau, Looker" },
          zeroqueries: { title: "ZeroQueries", desc: "Natural Language Layer" },
          users: { title: "Business Users", desc: "Instant Access & Answers" }
        }
      },
      whyPartner: {
        tag: "VALUE GENERATION",
        headline: "Why Partners Work With ZeroQueries",
        cards: [
          {
            title: "Create More Customer Value",
            desc: "Help customers access critical information faster without additional complex development effort or custom code."
          },
          {
            title: "Expand Service Offerings",
            desc: "Introduce new natural language data capabilities to your clients without building additional software products from scratch."
          },
          {
            title: "Generate Recurring Revenue",
            desc: "Participate directly in ongoing corporate customer subscription revenue through our attractive partner structure."
          },
          {
            title: "Reduce Delivery Burden",
            desc: "ZeroQueries handles entire customer demonstrations, implementation, database connections, onboarding, and enterprise support."
          },
          {
            title: "Strengthen Customer Relationships",
            desc: "Solve one of the most prominent friction points your clients already face on a daily basis: timely reporting."
          }
        ]
      },
      partnerTypesSection: {
        headline: "Partner Types We Support",
        types: [
          {
            title: "Software Development Partners",
            desc: "Organizations building enterprise applications and industry-focused vertical solutions."
          },
          {
            title: "Data Platform Partners",
            desc: "Organizations implementing modern database infrastructures, data warehouses, and custom lakes."
          },
          {
            title: "Analytics & BI Partners",
            desc: "Organizations helping customers build dashboards or derive key insights from their business data."
          },
          {
            title: "Digital Transformation Partners",
            desc: "Organizations driving comprehensive technology modernization and agile cloud initiatives."
          }
        ]
      },
      howWorks: {
        headline: "How The Partnership Works",
        steps: [
          {
            title: "Identify",
            desc: "Partner identifies customer challenges with reporting delays, complex dashboards, or analyst request queues."
          },
          {
            title: "Introduce",
            desc: "Partner introduces the qualified opportunity to their dedicated ZeroQueries Partner Director."
          },
          {
            title: "Collaborate",
            desc: "We run joint, highly tailored customer engagements, solution sessions, and customized database proof of concepts."
          },
          {
            title: "Deliver",
            desc: "ZeroQueries manages the end-to-end cloud or safe local deployment, roles configuration, and client onboarding."
          },
          {
            title: "Grow",
            desc: "Partner participates in ongoing customer satisfaction and receives transparent recurring subscription revenue share."
          }
        ]
      },
      whatWeProvide: {
        headline: "What ZeroQueries Provides",
        cards: [
          {
            title: "Sales Enablement",
            bullets: [
              "Comprehensive Partner training",
              "Pre-built vertical Use Cases",
              "Enterprise presentations",
              "Live demo support"
            ]
          },
          {
            title: "Technical Support",
            bullets: [
              "Architecture guidance",
              "Secure deployment support",
              "Client onboarding assistance",
              "Database connection standards"
            ]
          },
          {
            title: "Go-To-Market Support",
            bullets: [
              "Joint pipeline opportunities",
              "Co-authored marketing content",
              "Market development resources",
              "Regional customer introductions"
            ]
          },
          {
            title: "Customer Success",
            bullets: [
              "Adoption framework support",
              "Renewal monitoring",
              "License expansion opportunities",
              "Quarterly value reports"
            ]
          }
        ]
      },
      commercial: {
        headline: "Commercial Model",
        title: "Referral Model",
        intro: "Enterprise partners expect transparency. ZeroQueries is designed to be highly rewarding, simple, and transparent.",
        bulletIntro: "Partners introduce qualified opportunities. ZeroQueries manages:",
        managedList: [
          "Enterprise Sales & Demonstrations",
          "Security-focused Implementation",
          "Customer Success & Expansion"
        ],
        desc: "Partners receive recurring participation in subscription revenue for active customer relationships introduced. Specific commercial terms are discussed during partner qualification without any hidden fees.",
        badge: "TRANSPARENT VALUE"
      },
      resources: {
        headline: "Partner Resources",
        subheadline: "Access resources to understand how we support our integrations and joint market initiatives.",
        items: [
          { title: "Partner Program Overview", type: "PDF Document", size: "1.4 MB" },
          { title: "Partner FAQ & Guidelines", type: "PDF Document", size: "940 KB" },
          { title: "ZeroQueries Use Case Library", type: "PDF Booklet", size: "3.2 MB" },
          { title: "Customer Success Case Studies", type: "Zip Archive", size: "4.8 MB" },
          { title: "Security & Architecture Overview", type: "Technical Whitepaper", size: "2.1 MB" }
        ],
        btn: "Download Document",
        downloading: "Preparing download..."
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "What is the main value proposition of ZeroQueries to my existing clients?", a: "ZeroQueries solves the analytics bottleneck by allowing business users to ask questions and get instant answers from databases in plain English or Arabic—without needing to write SQL or wait for data team reports." },
          { q: "Does ZeroQueries replace existing BI platforms like Power BI, Tableau, or Looker?", a: "No. ZeroQueries is designed to extend and complement your existing BI investments. It acts as an ad-hoc access layer for custom business questions that dashboards weren't built to answer instantly." },
          { q: "Are there any upfront fees or subscription costs to join the ZeroQueries Partner Network?", a: "No, joining the ZeroQueries Partner Network is completely free. We do not require any setup fees, training costs, or minimum sales quotas." },
          { q: "What is the typical sales cycle and deployment timeline?", a: "Our sales cycle is typically 2 to 4 weeks. Once qualified, deployment is extremely rapid, connecting safely as a read-only layer to databases in less than an hour." },
          { q: "Who handles client support and implementation after a successful referral?", a: "We handle everything. ZeroQueries is responsible for client demoing, safe database connection, onboarding, and ongoing technical customer support." },
          { q: "How does the recurring revenue participation model work?", a: "Verified partners receive a recurring percentage of the customer's subscription revenue for the entire duration of the active client relationship, paid out quarterly." },
          { q: "Do I need pre-existing deep technical database or SQL knowledge to be a partner?", a: "No. We handle all technical product discussions, safe database integration, and configuration. All you need is an active portfolio of enterprise clients facing reporting delays." },
          { q: "Which regions are supported by the partner program?", a: "We are currently expanding the network across the GCC, focused on Oman, UAE, Saudi Arabia, Qatar, Bahrain, and Kuwait." },
          { q: "Can we configure joint go-to-market activities and localized marketing?", a: "Absolutely. We offer customized marketing resources, joint digital webinars, and regional co-branding materials to help you educate your prospects." },
          { q: "How is client data security and compliance handled during implementation?", a: "ZeroQueries connects securely in read-only mode, and client data never leaves their local cloud environment. Built-in enterprise role-based access keeps database security tight." },
          { q: "Who owns the customer relationship under the referral agreement?", a: "It's a joint relationship. You remain the trusted overall technology or strategy advisor to your clients, while we act as their specialized natural language query layer." },
          { q: "Is there a demo sandbox environment we can use to demonstrate ZeroQueries to clients?", a: "Yes, on qualification, we provide partners with a dedicated demo sandbox and training materials so they can showcase real-time analytics to prospective leads." }
        ]
      },
      booking: {
        title: "Join The Partner Network",
        subtitle: "Schedule a Partner Discussion",
        p: "Select your corporate details and preferred call time. Our partner leadership team will connect with you to review fit and discuss potential opportunities.",
        company: "Company Name",
        website: "Website",
        contact: "Contact Person",
        email: "Email Address",
        country: "Country",
        services: "Primary Services",
        customers: "Number of Clients",
        industries: "Industries Served",
        source: "How Did You Hear About Us?",
        date: "Preferred Date",
        time: "Preferred Time",
        submit: "Schedule Partner Discussion",
        successTitle: "Discovery Application Saved!",
        successDesc: "Thank you for scheduling. A ZeroQueries Partner Director will reach out to you within 24 hours at the email provided to confirm the calendar invite.",
        backBtn: "Return to Homepage",
        enterpriseClass: "Enterprise Ready",
        enterpriseDesc: "Built to integrate with modern enterprise data ecosystems and large-scale database environments."
      },
      final: {
        title: "Explore Whether There Is A Fit",
        subtitle: "We are currently expanding the ZeroQueries Partner Network across Oman, UAE, Saudi Arabia, Qatar, Bahrain, and Kuwait. Schedule a discussion with our partnerships team to learn more.",
        cta: "Schedule Partner Discussion"
      }
    },
    ar: {
      hero: {
        tag: "شبكة شركاء ZeroQueries",
        headline: "ساعد عملائك على إطلاق القيمة الكاملة لبياناتهم",
        subheadline: "تستثمر المؤسسات بكثافة في التطبيقات، وقواعد البيانات، ومنصات التحليل، وأنظمة التقارير. ومع ذلك، لا يزال مستخدمو الأعمال يكافحون للحصول على إجابات في الوقت المناسب دون دعم من المحللين.\n\nيساعد ZeroQueries في سد هذه الفجوة من خلال تمكين الوصول بلغة طبيعية إلى بيانات المؤسسة مع الاستفادة من استثمارات التكنولوجيا الحالية.",
        cta: "جدولة مناقشة الشراكة",
        secondaryCta: "تحميل الدليل العام للشراكة",
        partnersTypes: [
          "شركات البرمجيات",
          "شركات استشارات البيانات",
          "مزودي حلول تحليلات البيانات",
          "شركاء التحول الرقمي"
        ],
        partnerNetwork: "شبكة شركاء دول الخليج العربي"
      },
      opportunity: {
        tag: "الفرصة",
        headline: "معظم المؤسسات تمتلك البيانات. قليلون هم من لديهم وصول سهل للإجابات.",
        investedTitle: "استثمرت المؤسسات الملايين في:",
        investedItems: [
          "تطبيقات الأعمال (أنظمة ERP، CRM، الموارد البشرية)",
          "مستودعات وبحيرات بيانات حديثة",
          "منصات تحليلات متقدمة",
          "لوحات مراقبة أداء جامدة"
        ],
        realityTitle: "ومع ذلك، لا يزال مستخدمو الأعمال يعتمدون على:",
        realityItems: [
          "محللي البيانات والمتخصصين المزدحمين",
          "فرق كتابة استعلامات SQL المثقلة بالمهام",
          "طلبات التقارير اليدوية الفورية والطارئة",
          "تغييرات لوحات المعلومات المعقدة والبطيئة"
        ],
        footer: "هذا يؤدي إلى تأخيرات في صناعة القرار ويحد من القيمة الفعلية التي تجنيها المؤسسات من استثماراتها التقنية."
      },
      whereFits: {
        tag: "أين تقع ZeroQueries",
        headline: "مبني لتوسيع استثمارات البيانات الحالية",
        description: "يكمل ZeroQueries بنيتك التكنولوجية الحالية للمؤسسات. إنه لا يحل محل التطبيقات أو أدوات التحليل أو منصات البيانات. بدلاً من ذلك، يوفر طبقة وصول للأعمال تمكن المستخدمين من التفاعل مع بيانات المؤسسة من خلال اللغة الطبيعية.",
        techStack: {
          applications: { title: "تطبيقات الأعمال", desc: "أنظمة ERP، CRM، والأنظمة المخصصة" },
          platforms: { title: "منصات البيانات", desc: "Snowflake, Databricks, Azure Data" },
          analytics: { title: "التحليلات والـ BI", desc: "Power BI, Tableau, Looker" },
          zeroqueries: { title: "ZeroQueries", desc: "طبقة اللغة الطبيعية للبيانات" },
          users: { title: "مستخدمي الأعمال", desc: "الوصول الفوري والإجابات المباشرة" }
        }
      },
      whyPartner: {
        tag: "إنشاء القيمة",
        headline: "لماذا يعمل الشركاء مع ZeroQueries",
        cards: [
          {
            title: "خلق قيمة أكبر للعميل",
            desc: "ساعد عملائك على الوصول إلى المعلومات الحيوية بشكل أسرع دون أي جهد تطويري معقد إضافي."
          },
          {
            title: "توسيع عروض الخدمات الخاصة بك",
            desc: "قدم قدرات لغة طبيعية متطورة لبيانات عملائك دون الحاجة إلى بناء منتجات برمجية مخصصة من الصفر."
          },
          {
            title: "توليد إيرادات متكررة",
            desc: "شارك مباشرة في إيرادات اشتراكات العملاء المؤسسيين من خلال هيكل الشراكة المجزي لدينا."
          },
          {
            title: "تقليل أعباء التنفيذ والتسليم",
            desc: "يتولى فريق ZeroQueries بالكامل إدارة العروض التوضيحية، والربط والمطابقة، وتهيئة العملاء، والدعم الفني الفائق."
          },
          {
            title: "تعزيز وتقوية علاقتك بالعملاء",
            desc: "قم بحل واحدة من أكبر نقاط الاحتكاك والصعوبات اليومية التي يواجهها عملاؤك باستمرار: الحصول على التقارير."
          }
        ]
      },
      partnerTypesSection: {
        headline: "أنواع الشركاء الذين ندعمهم",
        types: [
          {
            title: "شركاء تطوير البرمجيات",
            desc: "الشركات التي تبني تطبيقات الأعمال والحلول القطاعية المتخصصة كأنظمة إدارة تخطيط الموارد."
          },
          {
            title: "شركاء منصات البيانات",
            desc: "الشركات التي تنفذ وتدير البنى التحتية لقواعد البيانات ومستودعات ومخازن البيانات الحديثة."
          },
          {
            title: "شركاء التحليلات وذكاء الأعمال (BI)",
            desc: "المستشارون والشركات التي تساعد العملاء في بناء لوحات المعلومات واستخلاص الرؤى."
          },
          {
            title: "شركاء التحول الرقمي",
            desc: "الشركات والبيوت الاستشارية التي تقود التحول الرقمي والتحديث التكنولوجي الشامل."
          }
        ]
      },
      howWorks: {
        headline: "كيف تعمل الشراكة معنا",
        steps: [
          {
            title: "التحديد",
            desc: "يحدد الشريك تحديات العميل المتعلقة بتأخر التقارير، أو تعقيد لوحات المعلومات، أو طوابير طلبات المحللين."
          },
          {
            title: "التقديم",
            desc: "يقوم الشريك بتقديم وتعريف الفرصة المؤهلة إلى مدير شركاء ZeroQueries المخصص له."
          },
          {
            title: "التعاون",
            desc: "نعقد جلسات حلول مشتركة وعروض تجريبية مخصصة على عينات من قواعد بيانات العميل لإثبات الفعالية."
          },
          {
            title: "التسليم",
            desc: "يتولى ZeroQueries بالكامل التهيئة الآمنة للخدمة على سحابة العميل أو خوادمه، وتحديد صلاحيات المحادثات."
          },
          {
            title: "النمو",
            desc: "يشارك الشريك في نجاح العميل المستمر ويحصل على نسب مئوية دورية وشفافة من عائدات الاشتراك النشط."
          }
        ]
      },
      whatWeProvide: {
        headline: "ماذا توفر منصة ZeroQueries للشركاء",
        cards: [
          {
            title: "تمكين المبيعات والصفقات",
            bullets: [
              "تدريب شامل ومكثف للشركاء",
              "حالات استخدام وحلول جاهزة حسب القطاعات",
              "عرض تقديمي ومواد تسويقية للمؤسسات",
              "دعم كامل في العروض التوضيحية الحية"
            ]
          },
          {
            title: "الدعم الفني الشامل",
            bullets: [
              "توجيه هيكلي معماري آمن للبيانات",
              "مساعدة متكاملة في التثبيت الآمن",
              "دعم تهيئة وتدريب مستخدمي العميل",
              "معايير اتصال وحماية متوافقة وقراءة فقط"
            ]
          },
          {
            title: "دعم الذهاب إلى السوق (GTM)",
            bullets: [
              "تطوير فرص ومشاريع مشتركة في السوق",
              "صناعة محتوى تسويقي وندوات رقمية مشتركة",
              "موارد تسويقية مصممة خصيصاً للمنطقة",
              "مقدمات ولقاءات عملاء رياديين إقليميين"
            ]
          },
          {
            title: "نجاح وتوسع العملاء",
            bullets: [
              "نماذج نجاح وتوسيع تبني حلول الأعمال",
              "مراقبة وتأمين تجديد الاشتراكات السنوية",
              "اكتشاف فرص ترقية التراخيص وربط قواعد جديدة",
              "تقارير دورية تبرز القيمة المحققة للعملاء"
            ]
          }
        ]
      },
      commercial: {
        headline: "النموذج التجاري",
        title: "نموذج الإحالة وتطوير الأعمال",
        intro: "يتوقع شركاء الأعمال والمؤسسات الشفافية المطلقة. نظام ZeroQueries التجاري مبني ليكون مجزيًا، بسيطًا، وبدون تعقيدات.",
        bulletIntro: "يقوم الشركاء بتقديم الفرص المؤهلة، ويتولى فريق ZeroQueries:",
        managedList: [
          "إدارة مبيعات المؤسسات والعروض التجريبية",
          "التثبيت والربط الآمن المتوافق مع شروط الحوكمة",
          "خدمات نجاح المستفيدين وتوسعة الحلول لاحقاً"
        ],
        desc: "يحصل الشركاء على مشاركة دورية متكررة في إيرادات الاشتراكات النشطة طوال فترة العلاقة التعاقدية مع العملاء الذين تم تقديمهم وزيادة نموهم. نناقش البنود التجارية الدقيقة أثناء تأهيل الشريك بكل شفافية.",
        badge: "شفافية تجارية مطلقة"
      },
      resources: {
        headline: "مصادر ومستندات وعروض الشركاء",
        subheadline: "احصل على المستندات والكتيبات التي توضح مجالات الشراكة، الهيكل التقني، والموارد المشتركة.",
        items: [
          { title: "الدليل التعريفي العام لبرنامج الشركاء", type: "PDF مستند", size: "1.4 ميجابايت" },
          { title: "الأسئلة الشائعة والقواعد التوجيهية للشركاء", type: "PDF مستند", size: "940 كيلوبايت" },
          { title: "حقيبة حالات استخدام وحلول ZeroQueries", type: "PDF كتيب", size: "3.2 ميجابايت" },
          { title: "ملف دراسات ونجاحات العملاء الإقليميين", type: "ملف مضغوط Zip", size: "4.8 ميجابايت" },
          { title: "كتيب الأمان والبنية المعمارية التقنية للبيانات", type: "مستند تقني", size: "2.1 ميجابايت" }
        ],
        btn: "تحميل المستند",
        downloading: "جاري تحضير الملف للتحميل..."
      },
      faq: {
        title: "الأسئلة الشائعة للشركاء والمستشارين",
        items: [
          { q: "ما هي القيمة الأساسية التي تقدمها ZeroQueries لعملائي؟", a: "تحل منصة ZeroQueries مشكلة اختناق التقارير عبر تمكين مستخدمي الأعمال من كتابة السؤال باللغة الطبيعية (عربي/إنجليزي) والحصول على إجابات ورسوم بيانية مباشرة من الجداول بأمان، دون انتظار المحلل أو الالتزام بكتابة SQL." },
          { q: "هل تحل ZeroQueries محل منصات ذكاء الأعمال الحالية مثل Power BI أو Tableau؟", a: "لا، بل صُمم ZeroQueries ليربط ويتكامل مع بنيتك الحالية كقيمة مضافة ومكملة. إنه بمثابة محرك إجابات فورية للاستفسارات السريعة التي لا تتطرق لها لوحات المعلومات الأساسية والجامدة." },
          { q: "هل هناك أي رسوم اشتراك أو تكاليف للانضمام إلى شبكة شركاء ZeroQueries؟", a: "الانضمام إلى البرنامج مجاني تماماً. لا توجد رسوم للمشاركة، ولا رسوم تدريب، ولا حدود مبيعات دورية مفروضة." },
          { q: "ما هي المدة المعتادة لدورة المبيعات والتثبيت؟", a: "تستغرق المبيعات عادة بين أسبوعين إلى ٤ أسابيع. التثبيت والربط سريع للغاية ويتم بآلية القراءة فقط الآمنة في أقل من ساعة من تفعيل الحساب." },
          { q: "من الذي يتولى دعم وتثبيت التقنيات لدى العميل بعد انتهاء الإحالة؟", a: "نحن نتولى كل شيء. ZeroQueries مسؤولة مسؤولية كاملة عن تقديم العروض، التثبيت الآمن، تدريب العملاء، وتوفير الدعم التقني عبر فرق متخصصة." },
          { q: "كيف تعمل آلية مشاركة الأرباح المتكررة للشركاء؟", a: "يحصل الشركاء المؤهلون على نسبة مئوية ربع سنوية دورية من قيمة الإشتركات النشطة للمؤسسات طوال فترة استمرار عمل العميل معنا بنشاط." },
          { q: "هل أحتاج لمعرفة تقنية متقدمة بالقواعد ولغة SQL لأصبح شريكاً؟", a: "لا، نحن نتولى الحوارات المعمارية العميقة والدمج الفني والبرمجة. ما تحتاجه فقط هو علاقات تفاعلية نشطة مع عملاء يعانون من تأخر استخلاص تقارير أعمالهم." },
          { q: "ما هي مناطق التغطية الجغرافية المدعومة ببرنامج الشركاء؟", a: "نتوسع حالياً عبر دول مجلس التعاون الخليجي، بتركيز متكامل على الرياض، مسقط، أبوظبي، دبي، الدوحة، المنامة، والكويت." },
          { q: "هل يمكننا تصميم حملات ذهاب مشتركة للسوق أو تسويق مشترك؟", a: "نعم وبشدة. نوفر موارد مخصصة، ندوات رقمية مشتركة، ومواد تسويقية تحمل الشعارين لمساعدتك في تثقيف عملائك المحتملين بكفاءة." },
          { q: "كيف تتم حماية بيانات العملاء وحوكمتها أثناء تشغيل المنصة؟", a: "تتصل ZeroQueries ببيانات العميل بوضع القراءة فقط الصارم Read-only والمباشر ولا يتم تخزين أو نقل بيانات العميل خارج بيئته السحابية؛ إذ تبقى البيانات مستقرة ببيئة العميل دائماً." },
          { q: "من الذي يملك العلاقة التجارية مع العميل النهائي باتفاقية الإحالة؟", a: "تظل العلاقة مشتركة وجيدة. تحتفظ بموقعك كمستشار تقني استراتيجي عام لدى العميل، في حين نركز نحن على تلبية احتياجاتهم لاستعلامات اللغة الطبيعية اللحظية." },
          { q: "هل تتوفر بيئة تجريبية Sandbox يمكننا عرضها للعملاء بأنفسنا؟", a: "نعم، بمجرد تأهيل الشريك واعتماده، نوفر له وصولاً مخصصاً لبيئة تجريبية جاهزة تبرز كيف يسأل المستخدم العادي ويحصل على إجاباته وجداوله فوراً." }
        ]
      },
      booking: {
        title: "الانضمام إلى شبكة الشركاء",
        subtitle: "جدولة مكالمة مناقشة الشراكة",
        p: "الرجاء تحديد تفاصيل شركتك والوقت المقترح ومجالات تركيزك. سيتواصل معك فريق الشركاء القيادي لدينا لمراجعة آفاق التعاون.",
        company: "اسم الشركة الاستشارية أو المطورة",
        website: "الموقع الإلكتروني الرسمي",
        contact: "اسم ممثل الشريك",
        email: "البريد الإلكتروني المهني",
        country: "الدولة / المقر الرئيسي",
        services: "الخدمات الرئيسية التي تقدمونها",
        customers: "عدد العملاء النشطين حالياً",
        industries: "القطاعات المخدمة بشكل رئيسي",
        source: "كيف تعرفت على شركتنا؟",
        date: "التاريخ المقترح للاجتماع",
        time: "ساعة الاجتماع المفضلة (توقيتك المحلي)",
        submit: "جدولة اللقاء التعريفي للشراكة",
        successTitle: "تم تسجيل طلبك وجدولة اللقاء بنجاح!",
        successDesc: "شكراً لاهتمامك بالانضمام. سيتواصل معك مدير شركاء ZeroQueries خلال ٢٤ ساعة عبر البريد الإلكتروني المهني لتأكيد الاجتماع ومشاركة أجندة النقاش.",
        backBtn: "العودة للرئيسية",
        enterpriseClass: "جاهز ومستقر للمؤسسات كلياً",
        enterpriseDesc: "تم بناؤه ليتكامل كلياً مع البنى التحتية المتطورة لبيانات المؤسسات وقواعد البيانات الكبيرة بامتثال وأمان تام."
      },
      final: {
        title: "اكتشف ما إذا كان هناك توافق مثمر",
        subtitle: "نعمل حالياً على توسيع شبكة شركاء ZeroQueries الفعالين في عُمان، الإمارات العربية المتحدة، المملكة العربية السعودية، قطر، البحرين، والكويت. حدد موعداً مع فريقنا لاستكشاف الشراكة.",
        cta: "جدولة مناقشة الشراكة"
      }
    }
  };

  const curr = translations[lang];
  const isAr = lang === 'ar';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("form_type", "partner");
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key as keyof typeof formData]);
    });

    try {
      const response = await fetch("https://zeroqueries.com/api/send_mail.php", {
        method: "POST",
        body: data,
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        // Scroll to success panel or details
        const element = document.getElementById('discovery-call-panel');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Server error. Please try again.");
    }
  };

  const triggerDownloadSim = (fileName: string) => {
    setDownloadingResource(fileName);
    setTimeout(() => {
      setDownloadingResource(null);
      // Simple custom visual notification/mock download trigger
      const alertMsg = isAr
        ? `تم بدء تحميل المستند بنجاح: ${fileName}`
        : `Successfully triggered mock download for: ${fileName}`;
      alert(alertMsg);
    }, 1500);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('discovery-call-panel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="partners-page-root" className={`bg-slate-50 text-slate-900 min-h-screen  pb-24 overflow-x-hidden font-sans ${isAr ? 'text-right' : 'text-left'}`}>


      {/* HERO SECTION */}
      <section id="partners-hero" className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-[#40196f]/10 text-[#40196f] text-xs font-bold uppercase tracking-widest mb-6">
              {curr.hero.tag}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-none">
              {curr.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-4xl whitespace-pre-line">
              {curr.hero.subheadline}
            </p>

            <div className={`flex flex-wrap gap-4 mb-12 ${isAr ? 'justify-start flex-row-reverse' : ''}`}>
              <button
                id="cta-schedule-discussion"
                onClick={scrollToBooking}
                className="px-8 py-5 bg-[#40196f] text-white hover:bg-brand-violet transition-all duration-300 font-extrabold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-[#40196f]/20 flex items-center gap-2 hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                {curr.hero.cta}
              </button>

              <button
                id="cta-download-overview"
                onClick={() => triggerDownloadSim(curr.resources.items[0].title)}
                className="px-8 py-5 bg-white border border-slate-200 text-slate-700 hover:border-[#40196f]/30 transition-all duration-300 font-extrabold rounded-xl text-sm uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02]"
              >
                <Download className="w-5 h-5 text-slate-400" />
                {curr.hero.secondaryCta}
              </button>
            </div>

            {/* Below Hero Section Trust / Info Banner */}
            <div className={`border-t border-slate-200 pt-8 ${isAr ? 'direction-rtl text-right' : 'text-left'}`}>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                {curr.hero.partnerNetwork}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {curr.hero.partnersTypes.map((type, idx) => (
                  <div key={idx} className={`flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 text-slate-600 font-bold text-xs ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-2 h-2 rounded-full bg-[#40196f]" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION: Enterprise Ready Display Side Block */}
          <div className="lg:col-span-4 hidden lg:block" id="enterprise-ready-block">
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden aspect-square flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#40196f]/[0.03] rounded-full blur-3xl pointer-events-none" />
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#40196f]/5 rounded-2xl border border-[#40196f]/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#40196f]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#40196f]">
                  {isAr ? "دعم كامل" : "COMPLEMENTARY"}
                </span>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                  ISO / SOC2 Ready
                </span>
                <div className="text-xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                  {curr.booking.enterpriseClass}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {curr.booking.enterpriseDesc}
                </p>
              </div>

              <div className={`flex gap-2 items-center text-xs font-bold text-slate-400 ${isAr ? 'flex-row-reverse' : ''}`}>
                <Globe className="w-4 h-4 text-[#40196f]" />
                <span>Oman • UAE • Saudi Arabia • Bahrain • Qatar • Kuwait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Opportunity */}
      <section id="partners-opportunity" className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${isAr ? 'dir-rtl' : ''}`}>

            {/* Opportunity text block */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black text-[#40196f] uppercase tracking-[0.34em] block">
                {curr.opportunity.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {curr.opportunity.headline}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                {curr.opportunity.footer}
              </p>
            </div>

            {/* Visual representation of spent vs reality gap */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Investments Column */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-5">
                    {curr.opportunity.investedTitle}
                  </h3>
                  <ul className="space-y-4">
                    {curr.opportunity.investedItems.map((item, id) => (
                      <li key={id} className={`flex items-center gap-2.5 text-xs font-semibold text-slate-700 ${isAr ? 'flex-row-reverse' : ''}`}>
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                          ✓
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mt-8 border-t border-slate-100 pt-3">
                  Millions Invested
                </div>
              </div>

              {/* Reality Bottlenecks Column */}
              <div className="p-8 rounded-3xl bg-red-500/[0.01] border border-red-500/15 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-red-500/60 uppercase tracking-wider mb-5">
                    {curr.opportunity.realityTitle}
                  </h3>
                  <ul className="space-y-4">
                    {curr.opportunity.realityItems.map((item, id) => (
                      <li key={id} className={`flex items-center gap-2.5 text-xs font-semibold text-slate-700 ${isAr ? 'flex-row-reverse' : ''}`}>
                        <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                          !
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[10px] text-red-500/50 font-bold uppercase mt-8 border-t border-red-500/5 pt-3">
                  Delays & Bottlenecks
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Where ZeroQueries Fits (Flow visual chart) */}
      <section id="partners-data-architecture" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-black text-[#40196f] uppercase tracking-[0.3em] mb-4 block">
            {curr.whereFits.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {curr.whereFits.headline}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-light">
            {curr.whereFits.description}
          </p>
        </div>

        {/* Visual architecture blocks */}
        <div className="p-10 md:p-14 rounded-[3rem] bg-white border border-slate-200/60 shadow-lg shadow-slate-100 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-center">

            {/* Step 1: Apps */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center relative group hover:border-slate-300/80 transition-colors">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-2">SOURCE</span>
              <h3 className="text-sm font-extrabold text-slate-800">{curr.whereFits.techStack.applications.title}</h3>
              <p className="text-[11px] text-slate-400 mt-1">{curr.whereFits.techStack.applications.desc}</p>
            </div>

            {/* Flow indicator 1 */}
            <div className="flex justify-center text-[#40196f]/40">
              <ArrowRight className="w-5 h-5 md:rotate-0 rotate-90" />
            </div>

            {/* Step 2: Platform */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center relative hover:border-slate-300/80 transition-colors">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-2">STORAGE</span>
              <h3 className="text-sm font-extrabold text-slate-800">{curr.whereFits.techStack.platforms.title}</h3>
              <p className="text-[11px] text-slate-400 mt-1">{curr.whereFits.techStack.platforms.desc}</p>
            </div>

            {/* Flow indicator 2 */}
            <div className="flex justify-center text-[#40196f]/40">
              <ArrowRight className="w-5 h-5 md:rotate-0 rotate-90" />
            </div>

            {/* Step 3: BI */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center relative hover:border-slate-300/80 transition-colors">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-2">BI STACK</span>
              <h3 className="text-sm font-extrabold text-slate-800">{curr.whereFits.techStack.analytics.title}</h3>
              <p className="text-[11px] text-slate-400 mt-1">{curr.whereFits.techStack.analytics.desc}</p>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <ArrowDown className="w-5 h-5 text-[#40196f] animate-bounce" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">

            <div className="md:col-span-1 hidden md:block" />

            {/* Delivery: ZeroQueries Access Layer */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-[#40196f]/5 border-2 border-[#40196f]/20 text-center shadow-lg shadow-[#40196f]/5 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#40196f] text-white px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                COMPLEMENTARY ACCESS LAYER
              </span>
              <span className="text-[10px] font-black text-[#40196f] uppercase tracking-wider block mb-2 mt-2">ZeroQueries Platform</span>
              <h3 className="text-base font-black text-slate-900">{curr.whereFits.techStack.zeroqueries.title}</h3>
              <p className="text-xs text-[#40196f] font-semibold mt-1">{curr.whereFits.techStack.zeroqueries.desc}</p>
            </div>

            <div className="md:col-span-1 flex justify-center text-[#40196f]/80">
              <ArrowRight className="w-6 h-6 md:rotate-0 rotate-90" />
            </div>

            {/* Goal: Business Users */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-slate-900 text-white text-center shadow-xl">
              <span className="text-[10px] text-[#40196f] font-black uppercase tracking-wider block mb-1">END CONSUMER</span>
              <h3 className="text-base font-extrabold">{curr.whereFits.techStack.users.title}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{curr.whereFits.techStack.users.desc}</p>
            </div>

            <div className="md:col-span-1 hidden md:block" />

          </div>
        </div>
      </section>

      {/* SECTION 4: Why Partners Work With ZeroQueries */}
      <section id="partners-value-generation" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-[#40196f] uppercase tracking-[0.34em] block mb-3">
              {curr.whyPartner.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {curr.whyPartner.headline}
            </h2>
            <div className="h-1 w-12 bg-[#40196f] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curr.whyPartner.cards.map((card, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:border-[#40196f]/20 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#40196f]/5 border border-[#40196f]/10 flex items-center justify-center text-[#40196f] mb-6 font-bold shrink-0">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Partner Types */}
      <section id="partners-types" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {curr.partnerTypesSection.headline}
          </h2>
          <div className="h-1 w-12 bg-[#40196f] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curr.partnerTypesSection.types.map((type, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2.2rem] bg-white border border-slate-150 flex flex-col justify-between hover:border-[#40196f]/25 hover:shadow-md transition-all ${isAr ? 'text-right' : 'text-left'}`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 mb-6 shrink-0 font-bold">
                  <Briefcase className="w-5 h-5 text-[#40196f]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight leading-snug mb-3">
                  {type.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-light mt-2 border-t border-slate-50 pt-3">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: How The Partnership Works */}
      <section id="partners-howitworks" className="py-24 bg-slate-950 text-white border-y border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[25rem] h-[25rem] bg-[#40196f]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
              {curr.howWorks.headline}
            </h2>
            <div className="h-1 w-10 bg-[#40196f] mx-auto mt-4 rounded-full" />
          </div>

          {/* Connected horizontal or vertical stack */}
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 relative ${isAr ? 'dir-rtl' : ''}`}>
            {curr.howWorks.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <div>
                  <span className="text-[10px] font-black text-[#40196f] uppercase tracking-widest block mb-1">
                    STAGE 0{idx + 1}
                  </span>
                  <h3 className="text-base font-extrabold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#40196f] z-20">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: What ZeroQueries Provides */}
      <section id="partners-provides" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {curr.whatWeProvide.headline}
          </h2>
          <div className="h-1 w-12 bg-[#40196f] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curr.whatWeProvide.cards.map((card, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight leading-snug mb-5 border-b border-slate-100 pb-3">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.bullets.map((bullet, bidx) => (
                    <li key={bidx} className={`flex items-center gap-2.5 text-xs text-slate-600 ${isAr ? 'flex-row-reverse' : ''}`}>
                      <CheckCircle2 className="w-4 h-4 text-[#40196f] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: Commercial Model */}
      <section id="partners-commercial" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-[#40196f]/10 text-[#40196f] rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
              {curr.commercial.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {curr.commercial.headline}
            </h2>
            <p className="text-slate-500 font-light mt-3 max-w-lg mx-auto text-sm">
              {curr.commercial.intro}
            </p>
          </div>

          <div className="p-10 md:p-14 rounded-3xl bg-slate-50 border border-slate-150 flex flex-col md:flex-row gap-12 items-center">

            {/* Model left */}
            <div className="md:w-1/2 w-full space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900">
                {curr.commercial.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {curr.commercial.bulletIntro}
              </p>

              <ul className="space-y-3">
                {curr.commercial.managedList.map((item, id) => (
                  <li key={id} className={`flex items-center gap-2.5 text-xs font-semibold text-slate-700 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-2 h-2 rounded-full bg-[#40196f] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Model right */}
            <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl border border-slate-150 shadow-sm">
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-light">
                {curr.commercial.desc}
              </p>
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Corporate Terms</span>
                <span className="text-xs font-black text-[#40196f]">Quarterly Payouts</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: Partner Resources (Missing Section Added!) */}
      <section id="partners-resources" className="hidden  py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {curr.resources.headline}
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed mt-2">
            {curr.resources.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curr.resources.items.map((res, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-150 rounded-2xl flex flex-col justify-between shadow-xs hover:border-[#40196f]/20 transition-all">
              <div className={`flex gap-4 items-start ${isAr ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-400">
                  <FileText className="w-5 h-5 text-[#40196f]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">{res.title}</h3>
                  <div className={`flex gap-2 items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider ${isAr ? 'flex-row-reverse' : ''}`}>
                    <span>{res.type}</span>
                    <span>•</span>
                    <span>{res.size}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => triggerDownloadSim(res.title)}
                disabled={downloadingResource !== null}
                className="mt-6 w-full py-3 bg-slate-50 hover:bg-[#40196f]/5 hover:text-[#40196f] text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-150 transition-colors flex items-center justify-center gap-2"
              >
                {downloadingResource === res.title ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-[#40196f] border-t-transparent animate-spin rounded-full" />
                    <span>{curr.resources.downloading}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>{curr.resources.btn}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: Frequently Asked Questions (Expanded to 12 Questions!) */}
      <section id="partners-faq" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {curr.faq.title}
            </h2>
            <div className="h-1 w-12 bg-[#40196f] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {curr.faq.items.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200/80 bg-slate-50/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className={`w-full px-8 py-6 flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#40196f] transition-colors ${isAr ? 'flex-row-reverse text-right' : ''}`}
                >
                  <span className="text-sm md:text-base pr-4 leading-snug">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${faqOpen === index ? 'rotate-180 text-[#40196f]' : ''}`} />
                </button>
                <AnimatePresence>
                  {faqOpen === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`px-8 pb-6 pt-2 text-xs md:text-sm text-slate-500 leading-relaxed font-light border-t border-slate-100 ${isAr ? 'text-right' : 'text-left'}`}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Interactive Partner Form & Calendly Details Panel */}
      <section id="discovery-call-panel" className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
          {submitted ? (
            <div className="p-12 md:p-16 text-center animate-reveal">
              <div className="w-16 h-16 bg-[#40196f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#40196f]" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{curr.booking.successTitle}</h3>
              <p className="text-slate-600 font-light leading-relaxed max-w-lg mx-auto mb-10">
                {curr.booking.successDesc}
              </p>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto text-left mb-10 text-xs text-slate-500 space-y-2">
                <span className="font-extrabold text-slate-800 uppercase block tracking-wider text-center mb-4">Application details</span>
                <p><strong>Company:</strong> {formData.companyName}</p>
                <p><strong>Contact Person:</strong> {formData.contactPerson}</p>
                <p><strong>Proposed Date & Time:</strong> {formData.prefDate} at {formData.prefTime}</p>
                <p><strong>Country / Region Focus:</strong> {formData.country}</p>
              </div>

              <button
                onClick={onBack}
                className="px-8 py-4 bg-[#40196f] hover:bg-brand-violet text-white transition-all font-bold rounded-xl text-xs uppercase tracking-widest"
              >
                {curr.booking.backBtn}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Left hand details panel */}
              <div className={`lg:col-span-4 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between ${isAr ? 'lg:order-2 text-right' : 'text-left'}`}>
                <div>
                  <div className="w-10 h-10 bg-[#40196f] rounded-xl flex items-center justify-center mb-8">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-lavender/70 block mb-2">{curr.booking.subtitle}</span>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4">{curr.booking.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                    {curr.booking.p}
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6 text-[10px] text-slate-400 font-semibold uppercase tracking-widest">
                  <div className={`flex items-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <Users className="w-4 h-4 text-[#40196f] shrink-0" />
                    <span>Partner Director Led</span>
                  </div>
                  <div className={`flex items-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <Globe className="w-4 h-4 text-[#40196f] shrink-0" />
                    <span>GCC Region Network</span>
                  </div>
                </div>
              </div>

              {/* Booking & qualifying form */}
              <form onSubmit={handleBookingSubmit} className="lg:col-span-8 p-8 md:p-12 space-y-6">

                <h3 className="text-base font-extrabold text-slate-800 tracking-tight leading-snug border-b border-slate-100 pb-3">
                  {isAr ? "بيان تسجيل الاهتمام للاستشاريين" : "Partner Qualification Details"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.company}</label>
                    <input
                      required
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-5 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.website}</label>
                    <input
                      required
                      type="url"
                      name="website"
                      placeholder="https://"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-5 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.contact}</label>
                    <input
                      required
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.email}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.country}</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors h-[3.25rem]"
                    >
                      <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Oman">Oman</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Other">Other Region / International</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.customers}</label>
                    <select
                      name="customersCount"
                      value={formData.customersCount}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors h-[3.25rem]"
                    >
                      <option value="Under 5">Less than 5 corporate clients</option>
                      <option value="5-20">5 to 20 clients</option>
                      <option value="20-50">20 to 50 clients</option>
                      <option value="50+">Over 50 enterprise clients</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.services}</label>
                  <input
                    required
                    type="text"
                    name="services"
                    placeholder="e.g. ERP integration, BI Consulting, Finance transformation"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-5 py-3 text-sm text-slate-800 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.industries}</label>
                    <input
                      required
                      type="text"
                      name="industries"
                      placeholder="e.g. Government, Retail, Banking"
                      value={formData.industries}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.source}</label>
                    <input
                      type="text"
                      name="source"
                      placeholder="e.g. Referral, Website, LinkedIn"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Time Selectors for Discovery Call */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.date}</label>
                    <input
                      required
                      type="date"
                      name="prefDate"
                      value={formData.prefDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{curr.booking.time}</label>
                    <input
                      required
                      type="time"
                      name="prefTime"
                      value={formData.prefTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#40196f] focus:ring-1 focus:ring-[#40196f] rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[#40196f] hover:bg-brand-violet text-white font-extrabold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-lg shadow-[#40196f]/20"
                >
                  {curr.booking.submit}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="partners-final" className="py-24 max-w-5xl mx-auto px-6 text-center border-t border-slate-200">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
          {curr.final.title}
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
          {curr.final.subtitle}
        </p>
        <button
          id="final-cta-btn"
          onClick={scrollToBooking}
          className="px-10 py-5 bg-[#40196f] text-white hover:bg-brand-violet transition-all duration-300 font-extrabold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-[#40196f]/20"
        >
          {curr.final.cta}
        </button>
      </section>
    </div>
  );
};