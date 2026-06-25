import { label } from "motion/react-client";

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      product: "Features",
      solutions: "Solution",
      pricing: "Pricing",
      partners: "Partners",
      resources: "Resources",
      demo: "Request a Demo",
      signIn: "Sign In",
    },
    hero: {
      headline: "AI That Understands Your Business Data",
      subheadline: "Ask questions in plain language and instantly get answers, charts, and insights from your databases — without writing SQL.",
      tagline: "Ask Your Data. Get Answers. Zero Queries Required.",
      benefits: [
        "Natural Language Queries",
        "Enterprise Security & Role-Based Access",
        "Instant Charts & Insights",
        "Works with your existing databases"
      ],
      ctaDemo: "Request a Demo",
      ctaHow: "See How It Works"
    },
    problem: {
      headline: "The Challenge of Accessing Business Data",
      description: "Organizations generate massive amounts of data every day, yet accessing insights remains slow and complex.",
      subDescription: "Business teams often depend on analysts or technical teams to run queries and prepare reports. This leads to slow decision making and limited access to insights.",
      commonProblems: [
        "Delayed reporting",
        "Heavy reliance on analysts",
        "Complex SQL queries",
        "Limited visibility into business performance"
      ]
    },
    solution: {
      headline: "Turn Your Databases Into a Conversation",
      description: "ZeroQueries allows anyone in your organization to interact with databases using natural language.",
      steps: [
        "Understand your request",
        "Generate the correct database query",
        "Retrieve the data securely",
        "Display results with charts and insights"
      ],
      noSql: "No SQL required."
    },
    demoFlow: {
      headline: "A Simple and Powerful Experience",
      exampleQuery: "User asks: \"Show revenue by region last quarter\"",
      platformSteps: [
        "Interprets the question using AI",
        "Generates SQL automatically",
        "Retrieves data securely",
        "Displays charts and insights"
      ],
      instant: "Results appear instantly."
    },
    features: {
      headline: "Intelligence at Your Fingertips",
      subheadline: "Powerful features designed to make data accessible, actionable, and secure for everyone.",
      items: [
        {
          title: "Natural Language Queries",
          desc: "Ask questions in plain English and instantly retrieve insights from your databases."
        },
        {
          title: "Automatic Query Generation",
          desc: "The AI converts natural language into optimized SQL or database queries."
        },
        {
          title: "Interactive Charts",
          desc: "Results are presented through intuitive charts and visualizations."
        },
        {
          title: "Conversational Interface",
          desc: "A chat interface that makes data accessible to everyone in the organization."
        }
      ]
    },
    security: {
      headline: "Enterprise-Grade Security",
      subheadline: "ZeroQueries enforces strict role-based access control and data sovereignty.",
      items: [
        {
          title: "Role-Based Access",
          desc: "Granular permissions at database, table, and column levels."
        },
        {
          title: "Data Sovereignty",
          desc: "Deploy on-premise or in your private cloud to keep data under your control."
        },
        {
          title: "Audit Logging",
          desc: "Full transparency with detailed logs of every query and data access."
        },
        {
          title: "Encryption",
          desc: "End-to-end encryption for data in transit and at rest."
        }
      ],
      permissions: [
        "Database level",
        "Table level",
        "Column level"
      ],
      authorized: "Each user only sees the data they are authorized to access."
    },
    databases: {
      headline: "Seamless Integration with Modern Databases",
      list: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    deployment: {
      headline: "Flexible Deployment Options",
      cloud: {
        title: "Cloud Deployment",
        description: "Quick deployment with secure cloud infrastructure."
      },
      onPrem: {
        title: "On-Premise Deployment",
        description: "For organizations that require full control over their data."
      }
    },
    useCases: {
      headline: "Used across departments",
      subheadline: "Empower every team to make data-driven decisions without technical bottlenecks.",
      commonInquiries: "Common Inquiries",
      cases: [
        {
          role: "Finance",
          desc: "Analyze payments, cash flow, and financial trends instantly. No more waiting for end-of-month reports.",
          questions: [
            "What was our net revenue growth last quarter?",
            "Show me a breakdown of expenses by category",
            "Which subscription tier has the highest churn rate?"
          ]
        },
        {
          role: "Sales",
          desc: "Track pipeline health, representative performance, and customer acquisition costs in real-time.",
          questions: [
            "Who are our top 10 customers by lifetime value?",
            "Compare sales performance between EMEA and US regions",
            "What is the average deal size for enterprise clients?"
          ]
        },
        {
          role: "Operations",
          desc: "Monitor supply chain efficiency, inventory levels, and operational bottlenecks with ease.",
          questions: [
            "Show inventory levels for our top 5 products",
            "What is the average fulfillment time per warehouse?",
            "Identify regions with the highest delivery delays"
          ]
        }
      ]
    },
    howItWorks: {
      steps: [
        "Connect your database.",
        "Define user roles and permissions.",
        "Ask questions and explore insights instantly."
      ]
    },
    roi: {
      headline: "Intelligence vs. Legacy Analysis",
      legacy: {
        title: "Legacy Analytics",
        items: [
          { title: "Analyst Bottlenecks", desc: "Teams wait days for simple SQL queries to be written and executed." },
          { title: "Static Dashboards", desc: "Rigid reports that don't allow for follow-up questions or deep dives." },
          { title: "High Overhead", desc: "Expensive data teams spending 80% of their time on repetitive reporting." }
        ]
      },
      zeroQueries: {
        badge: "The Future",
        title: "ZeroQueries Intelligence",
        quote: "We've reduced our data request turnaround time from 3 days to 3 seconds.",
        items: [
          { title: "Instant Access", desc: "Anyone can ask questions and get answers in seconds, not days." },
          { title: "Dynamic Exploration", desc: "AI-powered insights that allow for infinite follow-up questions." },
          { title: "Strategic Focus", desc: "Analysts focus on high-value strategy instead of basic SQL tasks." },
          { title: "Role-Based Access Control", desc: "Grant specific users or teams access only to the tables and data they are authorized to view or manage." }
        ]
      }
    },
    faq: {
      headline: "Frequently Asked Questions",
      subheadline: "Everything you need to know about ZeroQueries and how it can help your team.",
      items: [
        {
          q: "Is my data secure?",
          a: "Yes. The platform enforces strict role-based access controls and can be deployed on-premise."
        },
        {
          q: "Do users need SQL knowledge?",
          a: "No. Users simply ask questions in natural language."
        },
        {
          q: "What databases are supported?",
          a: "MySQL, PostgreSQL, and MongoDB."
        }
      ]
    },
    finalCta: {
      headline: "Unlock the Power of Your Data",
      subheadline: "Experience how AI can transform the way your organization accesses insights.",
      button: "Request a Demo Today"
    },
    pricing: {
      headline: "Simple Plans. Powerful Impact.",
      subheadline: "Choose the plan that fits your organization and scale as you grow.",
      allPlansInclude: {
        title: "All Plans Include",
        features: [
          "AI-Powered Natural Language Queries",
          "Secure Data Connections & Integrations",
          "Dashboards & Reports",
          "Enterprise Security & Governance",
          "Email & Chat Support",
          "Platform Updates & Maintenance"
        ]
      },
      plans: [
        {
          name: "Starter",
          price: "$499",
          period: "/mo",
          billedInfo: "Billed annually",
          description: "Ideal for small teams and getting started",
          features: [
            "Up to 500 Monthly Insights",
            "Basic Integrations",
            "Email Support",
            "Standard Security",
            "Web Platform Access",
            "Up to 5 Users"
          ],
          highlight: false,
          button: "Start 14-Day POC",
          icon: "rocket"
        },
        {
          name: "Growth",
          price: "$1,499",
          period: "/mo",
          billedInfo: "Billed annually",
          description: "For growing organizations that need more power",
          features: [
            "Up to 2,000 Monthly Insights",
            "Advanced Integrations",
            "Email, Chat & Call Support",
            "Advanced Security & Audit Logs",
            "WhatsApp + Web + API Access",
            "Up to 25 Users"
          ],
          highlight: true,
          badge: "MOST POPULAR",
          button: "Start 14-Day POC",
          icon: "trending"
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          billedInfo: "Tailored to your organization",
          description: "For large organizations with advanced needs",
          features: [
            "Unlimited Monthly Insights",
            "All Integrations & Connectors",
            "Priority 24/7 Support + SLA",
            "SSO, RBAC, Advanced Security",
            "On-Prem Deployment Option",
            "Unlimited Users"
          ],
          highlight: false,
          button: "Talk to Sales",
          icon: "building"
        }
      ],
      footerFeatures: [
        { title: "Unlimited Users", desc: "No per-user charges.", icon: "users" },
        { title: "Enterprise Grade", desc: "Built for scale and security.", icon: "shield" },
        { title: "Scale Anytime", desc: "Upgrade or downgrade easily.", icon: "scale" },
        { title: "No Hidden Costs", desc: "Transparent pricing. No surprises.", icon: "check" },
        { title: "Annual Discount", desc: "Get 10% off on annual billing.", icon: "discount" }
      ]
    },
    demoRequest: {
      title: "Request a Personalized Demo",
      description: "Discover how ZeroQueries enables secure, AI-powered access to your enterprise data.",
      features: [
        "Natural language database queries",
        "Secure role-based access control",
        "Instant chart generation",
        "Enterprise deployment options"
      ],
      form: {
        name: "Full Name",
        email: "Work Email",
        organization: "Organization",
        role: "Role",
        environment: "Data Environment (Optional)",
        submit: "Book Enterprise Demo",
        note: "A solutions specialist will contact you within 24 hours.",
        success: {
          title: "Demo Request Sent",
          description: "Thank you! Our team will contact you shortly to schedule your personalized demo.",
          button: "Back to Home"
        }
      }
    },
    footer: {
      description: "Conversational Data Intelligence for the modern enterprise. Safe, private, and exceptionally fast.",
      newsletter: {
        title: "Get data insights delivered to your inbox",
        placeholder: "Work Email",
        para: "Join 5,000+ data leaders receiving our weekly insights.",
        button: "Subscribe"
      },
      sections: {
        platform: {
          title: "Product",
          links: [
            { label: "Platform", href: "#features" },
            { label: "Protocol", href: "#process" },
            { label: "Pricing", href: "#pricing" },
            { label: "Integrations", href: "#features" },
            { label: "Security", href: "#security" },
            { label: "Changelog", href: "#features" },
            { label: "Roadmap", href: "#features" }
          ]
        },
        solutions: {
          title: "Solutions",
          links: [
            { label: "For Finance", href: "#use-cases" },
            { label: "For Sales", href: "#use-cases" },
            { label: "For Operations", href: "#use-cases" },
            { label: "For Executives", href: "#solutions" },
            { label: "By Industry", href: "#industry-solutions" },
            { label: "Case Studies", href: "#customer-stories" }
          ]
        },
        resources: {
          title: "Resources",
          links: [
            { label: "ROI Calculator", href: "#roi-calculator" },
            { label: "Benchmarks", href: "#benchmarks" }
          ]
        },
        // company: {
        //   title: "Company",
        //   links: ["About Us", "Manifesto", "Careers", "Press", "Contact", "Partners"]
        // },
        // legal: {
        //   title: "Legal",
        //   links: ["Privacy Policy", "Terms of Service", "Security", "Compliance", "Data Processing", "DPA"]
        // }
      },
      copyright: "© 2024 ZeroQueries Inc. All rights reserved.",
      status: "Global Data Sovereignty"
    },
    trustBar: {
      headline: "Trusted by innovative teams worldwide",
      subheadline: "Join 200+ forward-thinking organizations",
      logos: ["Siemens", "Aramco", "Careem", "STC", "Majid Al Futtaim", "Emirates NBD"]
    },
    problemDeepDive: {
      headline: "The real cost of slow data access",
      description: "Every day your team waits for answers, you're leaving money on the table.",
      subDescription: "Research shows that data-driven companies are 23x more likely to acquire customers and 19x more likely to be profitable. Yet most organizations operate with:",
      stats: [
        { value: "87%", label: "of spreadsheets contain errors when manually compiled" },
        { value: "$15M", label: "average annual cost of poor data quality per enterprise" },
        { value: "6h", label: "per week wasted by knowledge workers searching for data" }
      ],
      footer: "Your competitors aren't waiting. Why should you?"
    },
    architecture: {
      headline: "Enterprise architecture designed for compliance",
      description: "ZeroQueries operates on a zero-trust, zero-storage architecture that meets the strictest enterprise security standards.",
      specs: [
        { title: "Connection Method", desc: "Read-only, cryptographically signed connections via SSH tunnel or SSL/TLS. No persistent connections." },
        { title: "Data Processing", desc: "In-memory processing only. Results are streamed and immediately discarded after delivery to your browser session." },
        { title: "Encryption Standards", desc: "AES-256 at rest, TLS 1.3 in transit. All queries are encrypted end-to-end." },
        { title: "Compliance Ready", desc: "GDPR • SOC 2 Type II • HIPAA • ISO 27001" },
        { title: "Audit Trail", desc: "Complete immutable logs of every query, timestamp, and user action for compliance reporting." },
        { title: "Data Residency", desc: "Choose your data region: EU, US, KSA, or UAE. Data never leaves your chosen jurisdiction." }
      ]
    },
    integrations: {
      headline: "Fits perfectly into your modern data stack",
      subheadline: "ZeroQueries integrates seamlessly with the tools you already use.",
      footer: "Connect once. Query everywhere.",
      categories: [
        { title: "Data Sources", items: ["MySQL", "PostgreSQL", "MongoDB", "Snowflake", "BigQuery", "Redshift", "Oracle", "SQL Server"] },
        { title: "Business Intelligence", items: ["Tableau", "Power BI", "Looker", "Metabase", "Superset"] },
        { title: "Workflow Tools", items: ["Slack", "Teams", "Email", "Zapier", "n8n"] },
        { title: "Custom Integrations", items: ["REST API", "GraphQL", "Webhooks", "Python SDK", "Node.js SDK"] }
      ]
    },
    roiCalculator: {
      headline: "Calculate your ROI with ZeroQueries",
      subheadline: "See how much your organization can save by eliminating data bottlenecks.",
      impactTitle: "Average Enterprise Impact",
      impacts: [
        { title: "Time Saved", value: "2,400+ hours annually per data team", sub: "= $120,000+ in recovered productivity" },
        { title: "Faster Decisions", value: "3-5 days → 2 seconds per query", sub: "Launch campaigns 80% faster" },
        { title: "Reduced Tool Spend", value: "Eliminate 40% of unused dashboard licenses", sub: "Average savings: $50,000/year" },
        { title: "Improved Accuracy", value: "Eliminate manual spreadsheet errors", sub: "Average error reduction: 87%" }
      ],
      cta: "Ready to calculate your exact savings?",
      button: "Use our ROI Calculator"
    },
    customerStories: {
      headline: "Real results from real customers",
      subheadline: "See how organizations are transforming their data culture with ZeroQueries.",
      footer: "Read more success stories",
      stories: [
        {
          title: "Regional Bank",
          challenge: "5-day turnaround for compliance reports",
          solution: "Self-service analytics with ZeroQueries",
          result: "94% faster reporting, 3 FTEs redirected to strategic work",
          quote: "ZeroQueries cut our reporting time from days to seconds. Our compliance team now operates at the speed of light.",
          author: "CTO, Regional Bank"
        },
        {
          title: "E-commerce Platform",
          challenge: "Data team overwhelmed with 200+ monthly ad-hoc requests",
          solution: "Natural language access for marketing team",
          result: "100% of marketing queries self-served, data team focused on ML models",
          quote: "We eliminated the backlog completely. Our data scientists finally have time to build, not just report.",
          author: "Head of Data, E-commerce Platform"
        },
        {
          title: "Healthcare Provider",
          challenge: "Strict compliance requirements blocking data access",
          solution: "ZeroQueries read-only architecture with full audit logs",
          result: "Secure data access for 500+ clinicians, zero security incidents",
          quote: "ZeroQueries was the only solution that passed our security review. It's enterprise-grade, period.",
          author: "CISO, Healthcare Provider"
        }
      ]
    },
    compliance: {
      headline: "Enterprise compliance baked into every layer",
      subheadline: "ZeroQueries meets the most rigorous security and compliance standards globally.",
      certifications: ["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "HIPAA Ready", "KSA NCA Compliant", "UAE NESA Compliant"],
      regions: [
        { name: "KSA", desc: "Fully compliant with National Cybersecurity Authority (NCA) standards" },
        { name: "UAE", desc: "Compliant with NESA (UAE Information Assurance Standards)" },
        { name: "EU", desc: "Full GDPR compliance with data residency options" },
        { name: "US", desc: "SOC 2 Type II, HIPAA readiness" }
      ],
      features: [
        "Annual third-party penetration testing",
        "Bug bounty program",
        "24/7 security monitoring",
        "Automated threat detection",
        "Regular security training for all employees"
      ],
      button: "Download our Security Whitepaper"
    },
    comparisonMatrix: {
      headline: "Why teams choose ZeroQueries",
      subheadline: "See how we compare to traditional analytics and other solutions.",
      advantageTitle: "The ZeroQueries Advantage",
      advantages: [
        "40x faster time-to-insight",
        "100% self-service analytics",
        "Enterprise security out of the box",
        "Native Arabic/English support"
      ],
      matrix: {
        headers: ["Feature", "Traditional BI", "SQL Writing", "ZeroQueries"],
        rows: [
          ["Query Speed", "Days", "Hours", "2 seconds"],
          ["Learning Curve", "3-6 months", "6-12 months", "5 minutes"],
          ["Data Security", "Variable", "Developer dependent", "Zero-trust by design"],
          ["Cost", "$$$$", "$$$", "$"],
          ["Self-Service", "No", "Technical only", "Yes, everyone"],
          ["Real-time", "Batch only", "Possible", "Instant"],
          ["Audit Trail", "Limited", "Manual", "Automatic"],
          ["Role-Based Access", "Complex", "Manual", "Built-in"],
          ["Mobile Access", "Limited", "None", "Full"],
          ["Arabic Support", "Rare", "Manual", "Native"]
        ]
      }
    },
    demoPreview: {
      headline: "Try it yourself. No signup required.",
      subheadline: "See how ZeroQueries transforms questions into answers instantly.",
      cta: "Ask a sample question:",
      questions: [
        "Show me monthly revenue trends for 2024",
        "Which products have the highest refund rate?",
        "Compare customer acquisition cost by channel"
      ],
      livePreview: "Your question will be processed by our live AI engine (sandbox mode)",
      outputNote: "A beautiful chart appears here showing the answer with a natural language explanation below",
      footer: "Want to test with your own data?",
      button: "Connect a sample database in our playground"
    },
    governance: {
      headline: "Complete data governance at your fingertips",
      subheadline: "ZeroQueries gives you fine-grained control over who can see what, when, and how.",
      items: [
        { title: "Column-Level Security", desc: "Restrict access to sensitive columns (PII, financial data) by user role. Marketing sees everything except salary data." },
        { title: "Row-Level Security", desc: "Automatically filter rows based on user department. Sales only sees their region's data." },
        { title: "Query Governance", desc: "Set limits on query complexity, execution time, and resource usage. Prevent runaway queries." },
        { title: "Approval Workflows", desc: "Require manager approval for queries accessing sensitive tables. Full audit trail for compliance." },
        { title: "Data Masking", desc: "Automatically mask PII in results. Show *** instead of actual customer names or emails." },
        { title: "Time-Based Access", desc: "Grant temporary access for auditors or contractors. Auto-expires after specified period." },
        { title: "Export Controls", desc: "Restrict data exports to approved formats and destinations. Prevent unauthorized data leakage." }
      ]
    },
    benchmarks: {
      headline: "Engineered for speed at any scale",
      subheadline: "ZeroQueries is built to handle enterprise data volumes with sub-second response times.",
      para: "These benchmarks were conducted using real-world workloads on standard cloud infrastructure ensuring the results reflect production-ready performance without any special tuning",
      metrics: [
        { title: "Query Response Time", items: ["p50: 0.8 seconds", "p95: 2.1 seconds", "p99: 3.4 seconds"] },
        { title: "Concurrent Users", items: ["Tested up to 10,000 simultaneous queries with no degradation"] },
        { title: "Data Volume", items: ["Handles tables with 1B+ rows", "Processes up to 100GB per query"] },
        { title: "Database Connections", items: ["Unlimited concurrent connections", "Connection pooling built-in"] }
      ],
      environment: {
        title: "Benchmark Environment",
        items: [
          "Tested on standard AWS infrastructure",
          "No special tuning or optimization",
          "Real-world customer workloads"
        ]
      }
    },
    developer: {
      headline: "Built by developers, for developers",
      subheadline: "We've made implementation painless so you can focus on building.",
      docsButton: "Check out our documentation",
      githubButton: "View on GitHub",
      features: [
        { title: "One-Line Installation", desc: "pip install zeroqueries-sdk\nnpm install zeroqueries-js" },
        { title: "Comprehensive Documentation", desc: "Quickstart guides • API references • Code examples • Video tutorials" },
        { title: "TypeScript Support", desc: "Full type definitions for IDE autocomplete and compile-time checking" },
        { title: "Webhooks & Events", desc: "Trigger workflows on query completion, errors, or threshold alerts" },
        { title: "Custom Functions", desc: "Extend ZeroQueries with your own business logic and calculations" },
        { title: "CI/CD Integration", desc: "Test queries in your CI pipeline. Version control your analytics." },
        { title: "SDKs Available", desc: "Python • Node.js • Go • Java • Ruby • PHP • Rust" }
      ]
    },
    industrySolutions: {
      headline: "Tailored solutions for your industry",
      subheadline: "ZeroQueries adapts to the unique data challenges of your sector.",
      button: "Contact our industry specialists",
      industries: [
        { title: "Banking & Finance", desc: "Real-time risk reporting • Fraud detection queries • Compliance reporting • Customer 360 views" },
        { title: "Healthcare & Life Sciences", desc: "HIPAA-compliant patient data access • Clinical trial analysis • Operational efficiency metrics" },
        { title: "Retail & E-commerce", desc: "Inventory optimization • Customer segmentation • Sales performance • Supply chain visibility" },
        { title: "SaaS & Technology", desc: "Usage analytics • Churn prediction • MRR tracking • Feature adoption metrics" },
        { title: "Government & Public Sector", desc: "NCA/NESA compliant • Citizen service analytics • Budget tracking • Performance dashboards" },
        { title: "Manufacturing & Logistics", desc: "Supply chain monitoring • Production efficiency • Quality control metrics • Inventory management" }
      ]
    },
    resourceCenter: {
      headline: "Resources to guide your data journey",
      subheadline: "Explore our library of insights, guides, and research.",
      button: "View all resources",
      items: [
        { type: "Blog Post", title: "The ROI of Self-Service Analytics", desc: "How top companies are saving millions by democratizing data access" },
        { type: "Whitepaper", title: "Data Governance in the AI Era", desc: "A framework for secure, compliant AI-powered analytics" },
        { type: "Case Study", title: "How a Regional Bank Cut Reporting Time by 94%", desc: "From 5-day turnaround to 2-second answers" },
        { type: "Webinar", title: "Building a Data-Driven Culture", desc: "Best practices from Fortune 500 CDOs" },
        { type: "E-book", title: "The Executive's Guide to Modern Data Stack", desc: "What every leader needs to know in 2024" },
        { type: "Benchmark Report", title: "ZeroQueries vs Traditional BI: A Performance Analysis", desc: "See the numbers behind the speed" }
      ]
    },
    demo: {
      title: "Access the Protocol.",
      description: "Connect your ecosystem to conversational intelligence. Secure, read-only, and exceptionally fast.",
      features: ["SOC-2 Readiness", "10m Onboarding"],
      form: {
        name: "Full Name",
        email: "Work Email",
        database: "Database Type",
        submit: "Request Session",
        success: {
          title: "Access Requested",
          description: "An intelligence architect will verify your credentials and reach out within 2 hours.",
          button: "Return to Hub"
        }
      }
    },
    auth: {
      title: "Establish Session",
      subtitle: "Access your intelligent data layer",
      google: "Google Identity",
      or: "or",
      email: "Email Identifier",
      password: "Security Key",
      submit: "Join Conversation",
      noSession: "No session? Request access"
    },

  },
  ar: {
    nav: {
      product: "الميزات",
      solutions: "الحلول",
      pricing: "الأسعار",
      partners: "الشركاء",
      resources: "المصادر",
      demo: "طلب عرض توضيحي",
      signIn: "تسجيل الدخول",
    },
    hero: {
      headline: "ذكاء اصطناعي يفهم بيانات أعمالك",
      subheadline: "اطرح أسئلتك بلغة طبيعية واحصل فورًا على إجابات ورسوم بيانية وتحليلات من قواعد بياناتك دون الحاجة إلى كتابة SQL.",
      tagline: "اسأل بياناتك واحصل على الإجابات دون الحاجة لكتابة أي استعلام.",
      benefits: [
        "استعلامات باللغة الطبيعية",
        "أمان مؤسسي وصلاحيات متقدمة",
        "رسوم بيانية وتحليلات فورية",
        "يعمل مع قواعد بياناتك الحالية"
      ],
      ctaDemo: "طلب عرض توضيحي",
      ctaHow: "شاهد كيف يعمل"
    },
    problem: {
      headline: "تحديات الوصول إلى بيانات الأعمال",
      description: "تنتج المؤسسات كميات هائلة من البيانات يوميًا، ولكن الوصول إلى التحليلات لا يزال بطيئًا ومعقدًا.",
      subDescription: "تعتمد الفرق بشكل كبير على محللي البيانات أو الفرق التقنية لاستخراج التقارير. وهذا يؤدي إلى بطء في اتخاذ القرارات وصعوبة الوصول إلى المعلومات.",
      commonProblems: [
        "تأخر التقارير",
        "الاعتماد الكبير على محللي البيانات",
        "تعقيد استعلامات SQL",
        "ضعف الرؤية حول أداء الأعمال"
      ]
    },
    solution: {
      headline: "حوّل قواعد بياناتك إلى محادثة",
      description: "تتيح منصة ZeroQueries لأي شخص في مؤسستك التفاعل مع قواعد البيانات باستخدام اللغة الطبيعية.",
      steps: [
        "فهم الطلب",
        "إنشاء الاستعلام المناسب",
        "استخراج البيانات",
        "عرض النتائج مع الرسوم البيانية"
      ],
      noSql: "بدون الحاجة إلى كتابة SQL."
    },
    demoFlow: {
      headline: "تجربة بسيطة وقوية",
      exampleQuery: "يسأل المستخدم: \"اعرض الإيرادات حسب المنطقة في الربع الماضي\"",
      platformSteps: [
        "فهم السؤال باستخدام الذكاء الاصطناعي",
        "إنشاء الاستعلام تلقائيًا",
        "استخراج البيانات بشكل آمن",
        "عرض النتائج مع الرسوم البيانية"
      ],
      instant: "النتائج تظهر فورًا."
    },
    features: {
      headline: "ذكاء في متناول يدك",
      subheadline: "ميزات قوية مصممة لجعل البيانات سهلة الوصول وقابلة للتنفيذ وآمنة للجميع.",
      items: [
        {
          title: "استعلامات باللغة الطبيعية",
          desc: "اطرح الأسئلة بلغة بسيطة واحصل على التحليلات فورًا."
        },
        {
          title: "إنشاء الاستعلامات تلقائيًا",
          desc: "يقوم الذكاء الاصطناعي بتحويل الأسئلة إلى استعلامات قواعد بيانات محسنة."
        },
        {
          title: "رسوم بيانية تفاعلية",
          desc: "يتم عرض النتائج باستخدام رسوم بيانية سهلة الفهم."
        },
        {
          title: "واجهة محادثة ذكية",
          desc: "واجهة بسيطة تتيح للجميع الوصول إلى البيانات."
        }
      ]
    },
    security: {
      headline: "أمان على مستوى المؤسسات",
      subheadline: "تطبق منصة ZeroQueries نظام صلاحيات متقدم يعتمد على الأدوار وسيادة البيانات.",
      items: [
        {
          title: "صلاحيات الأدوار",
          desc: "أذونات دقيقة على مستويات قاعدة البيانات والجداول والأعمدة."
        },
        {
          title: "سيادة البيانات",
          desc: "النشر داخل المؤسسة أو في سحابتك الخاصة للحفاظ على بياناتك تحت سيطرتك."
        },
        {
          title: "سجلات التدقيق",
          desc: "شفافية كاملة مع سجلات مفصلة لكل استعلام ووصول للبيانات."
        },
        {
          title: "التشفير",
          desc: "تشفير شامل للبيانات أثناء النقل وعند الحفظ."
        }
      ],
      permissions: [
        "على مستوى قاعدة البيانات",
        "على مستوى الجداول",
        "على مستوى الأعمدة"
      ],
      authorized: "ولا يمكن للمستخدم رؤية إلا البيانات المصرح له بها."
    },
    databases: {
      headline: "تكامل سلس مع قواعد البيانات الحديثة",
      list: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    deployment: {
      headline: "خيارات نشر مرنة",
      cloud: {
        title: "النشر السحابي",
        description: "إطلاق سريع باستخدام بنية سحابية آمنة."
      },
      onPrem: {
        title: "النشر داخل المؤسسة",
        description: "للمؤسسات التي تحتاج إلى تحكم كامل في بياناتها."
      }
    },
    useCases: {
      headline: "يُستخدم في مختلف الأقسام",
      subheadline: "تمكين كل فريق من اتخاذ قرارات مبنية على البيانات دون عوائق تقنية.",
      commonInquiries: "استفسارات شائعة",
      cases: [
        {
          role: "المالية",
          desc: "تحليل المدفوعات والتدفقات النقدية والاتجاهات المالية فورًا. لا مزيد من الانتظار لتقارير نهاية الشهر.",
          questions: [
            "ما هو نمو صافي الإيرادات في الربع الماضي؟",
            "أرني تفصيلاً للمصاريف حسب الفئة",
            "أي فئة اشتراك لديها أعلى معدل إلغاء؟"
          ]
        },
        {
          role: "المبيعات",
          desc: "تتبع صحة خط أنابيب المبيعات وأداء المندوبين وتكاليف اكتساب العملاء في الوقت الفعلي.",
          questions: [
            "من هم أفضل 10 عملاء لدينا من حيث القيمة الدائمة؟",
            "قارن أداء المبيعات بين منطقتي أوروبا والشرق الأوسط والولايات المتحدة",
            "ما هو متوسط حجم الصفقة لعملاء المؤسسات؟"
          ]
        },
        {
          role: "العمليات",
          desc: "مراقبة كفاءة سلسلة التوريد ومستويات المخزون واختناقات العمليات بكل سهولة.",
          questions: [
            "أظهر مستويات المخزون لأفضل 5 منتجات لدينا",
            "ما هو متوسط وقت التنفيذ لكل مستودع؟",
            "تحديد المناطق التي تعاني من أعلى تأخيرات في التسليم"
          ]
        }
      ]
    },
    howItWorks: {
      steps: [
        "ربط قاعدة البيانات.",
        "تحديد الأدوار والصلاحيات.",
        "طرح الأسئلة والحصول على التحليلات فورًا."
      ]
    },
    roi: {
      headline: "الذكاء مقابل التحليل التقليدي",
      legacy: {
        title: "التحليلات التقليدية",
        items: [
          { title: "اختناقات المحللين", desc: "تنتظر الفرق أيامًا لكتابة استعلامات SQL وتنفيذها." },
          { title: "لوحات بيانات ثابتة", desc: "تقارير جامدة لا تسمح بأسئلة متابعة أو تعمق في البيانات." },
          { title: "تكاليف تشغيلية عالية", desc: "فرق بيانات باهظة الثمن تقضي 80% من وقتها في التقارير المتكررة." },
          { title: "التحكم في الوصول حسب الأدوار", desc: "منح المستخدمين أو الفرق صلاحية الوصول فقط إلى الجداول والبيانات المصرح لهم بعرضها أو إدارتها." }
        ]
      },
      zeroQueries: {
        badge: "المستقبل",
        title: "ذكاء ZeroQueries",
        quote: "لقد خفضنا وقت تنفيذ طلبات البيانات من 3 أيام إلى 3 ثوانٍ.",
        items: [
          { title: "وصول فوري", desc: "يمكن لأي شخص طرح الأسئلة والحصول على الإجابات في ثوانٍ." },
          { title: "استكشاف ديناميكي", desc: "تحليلات مدعومة بالذكاء الاصطناعي تسمح بأسئلة متابعة لا نهائية." },
          { title: "تركيز استراتيجي", desc: "يركز المحللون على الاستراتيجية بدلاً من مهام SQL الأساسية." }
        ]
      }
    },
    faq: {
      headline: "الأسئلة الشائعة",
      subheadline: "كل ما تحتاج لمعرفته حول ZeroQueries وكيف يمكن أن تساعد فريقك.",
      items: [
        {
          q: "هل بياناتي آمنة؟",
          a: "نعم. المنصة تعتمد على صلاحيات وصول متقدمة ويمكن نشرها داخل المؤسسة."
        },
        {
          q: "هل يحتاج المستخدم إلى معرفة SQL؟",
          a: "لا. يمكن للمستخدم طرح الأسئلة بلغة طبيعية."
        },
        {
          q: "ما هي قواعد البيانات المدعومة؟",
          a: "MySQL و PostgreSQL و MongoDB."
        }
      ]
    },
    finalCta: {
      headline: "اكتشف قوة بياناتك",
      subheadline: "تعرف كيف يمكن للذكاء الاصطناعي تغيير طريقة وصول مؤسستك إلى التحليلات.",
      button: "اطلب عرضًا توضيحيًا اليوم"
    },
    pricing: {
      headline: "أسعار بسيطة وشفافة",
      subheadline: "اختر الخطة التي تناسب احتياجات مؤسستك.",
      plans: [
        {
          name: "البداية",
          price: "$499",
          period: "/شهرياً",
          description: "مثالية للفرق الصغيرة التي تبدأ مع ذكاء البيانات الاصطناعي.",
          features: ["حتى 5 مستخدمين", "قاعدتي بيانات", "دعم قياسي", "نشر سحابي"],
          highlight: false,
          button: "ابدأ مع البداية"
        },
        {
          name: "النمو",
          price: "$1,499",
          period: "/شهرياً",
          description: "مثالية للشركات المتنامية ذات الأقسام المتعددة.",
          features: ["حتى 20 مستخدم", "5 قواعد بيانات", "دعم ذو أولوية", "تحليلات متقدمة"],
          highlight: true,
          button: "توسع مع النمو"
        },
        {
          name: "المؤسسات",
          price: "مخصص",
          period: "",
          description: "ذكاء كامل للمؤسسات الكبيرة.",
          features: ["مستخدمون غير محدودين", "صلاحيات الجداول", "دعم مخصص 24/7", "خيار النشر داخل المؤسسة", "ضمان مستوى الخدمة"],
          highlight: false,
          button: "اتصل بالمبيعات"
        }
      ]
    },
    demoRequest: {
      title: "اطلب عرضًا توضيحيًا مخصصًا",
      description: "اكتشف كيف يتيح ZeroQueries وصولًا آمنًا إلى بيانات مؤسستك باستخدام الذكاء الاصطناعي.",
      features: [
        "الاستعلام عن قواعد البيانات باستخدام اللغة الطبيعية",
        "التحكم الآمن في الوصول بناءً على الأدوار",
        "إنشاء المخططات بشكل فوري",
        "خيارات نشر للمؤسسات"
      ],
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني للعمل",
        organization: "المؤسسة",
        role: "المسمى الوظيفي",
        environment: "بيئة البيانات (اختياري)",
        submit: "احجز عرضًا توضيحيًا للمؤسسات",
        note: "سيقوم أحد مختصي الحلول بالتواصل معك خلال 24 ساعة.",
        success: {
          title: "تم إرسال طلب العرض",
          description: "شكرًا لك! سيتواصل فريقنا معك قريبًا لتحديد موعد العرض التوضيحي.",
          button: "العودة إلى الصفحة الرئيسية"
        }
      }
    },
    footer: {
      description: "ذكاء البيانات المحادثي للمؤسسات الحديثة. آمنة، خاصة، وسريعة بشكل استثنائي.",
      newsletter: {
        title: "احصل على رؤى البيانات في بريدك الوارد",
        placeholder: "البريد الإلكتروني للعمل",
        para: "انضم إلى أكثر من 5,000 من قادة البيانات الذين يتلقون رؤانا الأسبوعية",
        button: "اشتراك"
      },
      sections: {
        platform: {
          title: "المنتج",
          links: [{ label: "المنصة", href: "#features" },
          { label: "البروتوكول", href: "#process" },
          { label: "التسعير", href: "#pricing" },
          { label: "التكاملات", href: "#integrations" },
          { label: "الأمان", href: "#security" },
          { label: "سجل التغييرات", href: "#changelog" },
          { label: "خريطة الطريق", href: "#roadmap" }]
        },
        solutions: {
          title: "الحلول",
          links: [{ label: "للتمويل", href: "#use-cases" },
          { label: "للمبيعات", href: "#use-cases" },
          { label: "للعمليات", href: "#use-cases" },
          { label: "للتنفيذيين", href: "#solutions" },
          { label: "حسب القطاع", href: "#industry-solutions" },
          { label: "دراسات الحالة", href: "#customer-stories" }
          ]
        },
        resources: {
          title: "الموارد",
          links: [
            { label: "حاسبة العائد", href: "#roi-calculator" },
            { label: "المعايير", href: "#benchmarks" }
          ]
        },
        // company: {
        //   title: "الشركة",
        //   links: ["معلومات عنا", "البيان", "الوظائف", "العلاقات العامة", "اتصل بنا", "الشركاء"]
        // },
        // legal: {
        //   title: "القانوني",
        //   links: ["سياسة الخصوصية", "شروط الخدمة", "الأمان", "الامتثال", "معالجة البيانات", "اتفاقية معالجة البيانات"]
        // }
      },
      copyright: "© ٢٠٢٤ ZeroQueries Inc. جميع الحقوق محفوظة.",
      status: "السيادة العالمية للبيانات"
    },
    trustBar: {
      headline: "موثوق من قبل فرق مبتكرة حول العالم",
      subheadline: "انضم إلى أكثر من 200 مؤسسة متطلعة للمستقبل",
      logos: ["سيمنز", "أرامكو", "كريم", "اس تي سي", "ماجد الفطيم", "بنك الإمارات دبي الوطني"]
    },
    problemDeepDive: {
      headline: "التكلفة الحقيقية لبطء الوصول إلى البيانات",
      description: "كل يوم ينتظر فيه فريقك للحصول على إجابات، أنت تترك أموالاً على الطاولة.",
      subDescription: "تظهر الأبحاث أن الشركات المعتمدة على البيانات أكثر قدرة على اكتساب العملاء بـ 23 مرة، وأكثر ربحية بـ 19 مرة. ومع ذلك، تعاني معظم المؤسسات من:",
      stats: [
        { value: "٨٧٪", label: "من جداول البيانات تحتوي على أخطاء عند تجميعها يدويًا" },
        { value: "١٥ مليون $", label: "متوسط التكلفة السنوية لضعف جودة البيانات لكل مؤسسة" },
        { value: "٦ ساعات", label: "أسبوعيًا يهدرها الموظفون في البحث عن البيانات" }
      ],
      footer: "منافسوك لا ينتظرون. فلماذا تنتظر أنت؟"
    },
    architecture: {
      headline: "بنية مؤسسية مصممة للامتثال",
      description: "تعمل ZeroQueries على بنية عدم الاحتفاظ بالبيانات وعدم الثقة التي تلبي أشد معايير أمان المؤسسات.",
      specs: [
        { title: "طريقة الاتصال", desc: "اتصالات موقعة بالتشفير للقراءة فقط عبر نفق SSH أو SSL/TLS. لا توجد اتصالات دائمة." },
        { title: "معالجة البيانات", desc: "معالجة في الذاكرة فقط. يتم دفق النتائج والتخلص منها فورًا بعد التسليم إلى جلسة المتصفح الخاصة بك." },
        { title: "معايير التشفير", desc: "AES-256 أثناء التخزين، TLS 1.3 أثناء النقل. جميع الاستعلامات مشفرة من البداية إلى النهاية." },
        { title: "جاهز للامتثال", desc: "اللائحة العامة لحماية البيانات • SOC 2 Type II • HIPAA • ISO 27001" },
        { title: "مسار التدقيق", desc: "سجلات ثابتة كاملة لكل استعلام وطابع زمني وإجراء مستخدم لتقارير الامتثال." },
        { title: "موقع البيانات", desc: "اختر منطقة بياناتك: الاتحاد الأوروبي، الولايات المتحدة، السعودية، أو الإمارات. البيانات لا تترك نطاقك القضائي أبدًا." }
      ]
    },
    integrations: {
      headline: "يتناسب تمامًا مع مجموعة البيانات الحديثة الخاصة بك",
      subheadline: "تتكامل ZeroQueries بسلاسة مع الأدوات التي تستخدمها بالفعل.",
      footer: "اتصل مرة واحدة. استفسر من أي مكان.",
      categories: [
        { title: "مصادر البيانات", items: ["MySQL", "PostgreSQL", "MongoDB", "Snowflake", "BigQuery", "Redshift", "Oracle", "SQL Server"] },
        { title: "ذكاء الأعمال", items: ["Tableau", "Power BI", "Looker", "Metabase", "Superset"] },
        { title: "أدوات سير العمل", items: ["Slack", "Teams", "البريد الإلكتروني", "Zapier", "n8n"] },
        { title: "تكاملات مخصصة", items: ["REST API", "GraphQL", "Webhooks", "Python SDK", "Node.js SDK"] }
      ]
    },
    roiCalculator: {
      headline: "احسب عائد الاستثمار مع ZeroQueries",
      subheadline: "تعرف كم يمكن لمؤسستك توفيره من خلال القضاء على اختناقات البيانات.",
      impactTitle: "متوسط تأثير المؤسسة",
      impacts: [
        { title: "الوقت الموفر", value: "٢٬٤٠٠+ ساعة سنويًا لكل فريق بيانات", sub: "= ١٢٠٬٠٠٠$+ إنتاجية مستعادة" },
        { title: "قرارات أسرع", value: "٣-٥ أيام → ٢ ثانية لكل استعلام", sub: "إطلاق الحملات أسرع بنسبة ٨٠٪" },
        { title: "خفض تكاليف الأدوات", value: "تخلص من ٤٠٪ من تراخيص لوحات المعلومات غير المستخدمة", sub: "متوسط التوفير: ٥٠٬٠٠٠$/سنويًا" },
        { title: "دقة محسنة", value: "تخلص من أخطاء جداول البيانات اليدوية", sub: "متوسط تقليل الأخطاء: ٨٧٪" }
      ],
      cta: "هل أنت مستعد لحساب توفيرك الدقيق؟",
      button: "استخدم حاسبة العائد على الاستثمار"
    },
    customerStories: {
      headline: "نتائج حقيقية من عملاء حقيقيين",
      subheadline: "تعرف كيف تحول المؤسسات ثقافة البيانات لديها مع ZeroQueries.",
      footer: "اقرأ المزيد من قصص النجاح",
      stories: [
        {
          title: "بنك إقليمي",
          challenge: "٥ أيام لإعداد تقارير الامتثال",
          solution: "تحليلات الخدمة الذاتية مع ZeroQueries",
          result: "تقارير أسرع بنسبة ٩٤٪، إعادة توجيه ٣ موظفين لعمل استراتيجي",
          quote: "قلصت ZeroQueries وقت إعداد التقارير من أيام إلى ثوانٍ. فريق الامتثال لدينا يعمل الآن بسرعة الضوء.",
          author: "المدير التقني، بنك إقليمي"
        },
        {
          title: "منصة تجارة إلكترونية",
          challenge: "فريق البيانات غارق في ٢٠٠+ طلب شهري",
          solution: "وصول باللغة الطبيعية لفريق التسويق",
          result: "١٠٠٪ من استعلامات التسويق ذاتيًا، فريق البيانات يركز على نماذج التعلم الآلي",
          quote: "أزلنا التراكم بالكامل. علماء البيانات لدينا لديهم وقت للبناء، وليس فقط إعداد التقارير.",
          author: "رئيس قسم البيانات، منصة تجارة إلكترونية"
        },
        {
          title: "مقدم رعاية صحية",
          challenge: "متطلبات امتثال صارمة تمنع الوصول للبيانات",
          solution: "بنية القراءة فقط مع سجلات تدقيق كاملة",
          result: "وصول آمن للبيانات لـ ٥٠٠+ طبيب، صفر حوادث أمنية",
          quote: "كانت ZeroQueries الحل الوحيد الذي اجتاز مراجعة الأمان لدينا. إنها على مستوى المؤسسات، نقطة.",
          author: "مسؤول أمن المعلومات، مقدم رعاية صحية"
        }
      ]
    },
    compliance: {
      headline: "امتثال مؤسسي مدمج في كل طبقة",
      subheadline: "تلبي ZeroQueries أشد معايير الأمان والامتثال عالميًا.",
      certifications: ["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "HIPAA Ready", "KSA NCA Compliant", "UAE NESA Compliant"],
      regions: [
        { name: "السعودية", desc: "متوافق تمامًا مع معايير الهيئة الوطنية للأمن السيبراني (NCA)" },
        { name: "الإمارات", desc: "متوافق مع NESA (معايير ضمان المعلومات الإماراتية)" },
        { name: "الاتحاد الأوروبي", desc: "امتثال كامل للائحة العامة لحماية البيانات مع خيارات موقع البيانات" },
        { name: "الولايات المتحدة", desc: "SOC 2 Type II، جاهزية HIPAA" }
      ],
      features: [
        "اختبار اختراق سنوي من جهة خارجية",
        "برنامج مكافآت اكتشاف الثغرات",
        "مراقبة أمنية ٢٤/٧",
        "كشف التهديدات آليًا",
        "تدريب أمني منتظم لجميع الموظفين"
      ],
      button: "حمّل المستند التعريفي التمهيدي للأمان"
    },
    comparisonMatrix: {
      headline: "لماذا تختار الفرق ZeroQueries",
      subheadline: "تعرف كيف نقارن مع التحليلات التقليدية والحلول الأخرى.",
      advantageTitle: "ميزة ZeroQueries",
      advantages: [
        "أسرع ٤٠ مرة في الوصول للرؤى",
        "تحليلات ذاتية بنسبة ١٠٠٪",
        "أمان مؤسسي فوري",
        "دعم أصلي للعربية والإنجليزية"
      ],
      matrix: {
        headers: ["الميزة", "ذكاء الأعمال التقليدي", "كتابة SQL", "ZeroQueries"],
        rows: [
          ["سرعة الاستعلام", "أيام", "ساعات", "ثانيتان"],
          ["منحنى التعلم", "٣-٦ أشهر", "٦-١٢ شهرًا", "٥ دقائق"],
          ["أمان البيانات", "متغير", "يعتمد على المطور", "عدم الثقة بالتصميم"],
          ["التكلفة", "$$$$", "$$$", "$"],
          ["الخدمة الذاتية", "لا", "تقني فقط", "نعم، الجميع"],
          ["الوقت الفعلي", "دفعات فقط", "ممكن", "فوري"],
          ["مسار التدقيق", "محدود", "يدوي", "تلقائي"],
          ["الوصول حسب الدور", "معقد", "يدوي", "مدمج"],
          ["الوصول عبر الجوال", "محدود", "لا يوجد", "كامل"],
          ["الدعم بالعربية", "نادر", "يدوي", "أصلي"]
        ]
      }
    },
    demoPreview: {
      headline: "جربه بنفسك. لا حاجة للتسجيل.",
      subheadline: "تعرف كيف تحول ZeroQueries الأسئلة إلى إجابات فورية.",
      cta: "اسأل سؤالاً تجريبيًا:",
      questions: [
        "اعرض اتجاهات الإيرادات الشهرية لعام ٢٠٢٤",
        "أي المنتجات لديها أعلى معدل استرجاع؟",
        "قارن تكلفة اكتساب العملاء حسب القناة"
      ],
      livePreview: "سيتم معالجة سؤالك بواسطة محرك الذكاء الاصطناعي المباشر (وضع التجربة)",
      outputNote: "يظهر رسم بياني جميل هنا يعرض الإجابة مع شرح باللغة الطبيعية أدناه",
      footer: "تريد الاختبار ببياناتك الخاصة؟",
      button: "اربط قاعدة بيانات تجريبية في بيئة التجربة"
    },
    governance: {
      headline: "حوكمة بيانات كاملة في متناول يدك",
      subheadline: "تمنحك ZeroQueries تحكمًا دقيقًا في من يمكنه رؤية ماذا، ومتى، وكيف.",
      items: [
        { title: "أمان على مستوى العمود", desc: "تقييد الوصول إلى الأعمدة الحساسة (المعلومات الشخصية، البيانات المالية) حسب دور المستخدم. التسويق يرى كل شيء باستثناء بيانات الرواتب." },
        { title: "أمان على مستوى الصف", desc: "تصفية الصفوف تلقائيًا بناءً على قسم المستخدم. المبيعات ترى فقط بيانات منطقتهم." },
        { title: "حوكمة الاستعلامات", desc: "تعيين حدود لتعقيد الاستعلام ووقت التنفيذ واستخدام الموارد. منع الاستعلامات الجامحة." },
        { title: "مسارات الموافقة", desc: "طلب موافقة المدير للاستعلامات التي تصل إلى الجداول الحساسة. مسار تدقيق كامل لامتثال." },
        { title: "إخفاء البيانات", desc: "إخفاء المعلومات الشخصية تلقائيًا في النتائج. عرض *** بدلاً من أسماء العملاء أو عناوين البريد الإلكتروني الفعلية." },
        { title: "الوصول المستند إلى الوقت", desc: "منح وصول مؤقت للمدققين أو المقاولين. تنتهي الصلاحية تلقائيًا بعد الفترة المحددة." },
        { title: "ضوابط التصدير", desc: "تقييد تصدير البيانات إلى التنسيقات والوجهات المعتمدة. منع تسرب البيانات غير المصرح به." }
      ]
    },
    benchmarks: {
      headline: "مصمم للسرعة على أي نطاق",
      subheadline: "صُممت ZeroQueries للتعامل مع أحجام بيانات المؤسسات مع أوقات استجابة أقل من الثانية.",
      para: "تم إجراء هذه الاختبارات باستخدام أحمال عمل واقعية على بنية تحتية سحابية قياسية، مما يضمن أن النتائج تعكس أداءً جاهزًا للإنتاج دون أي ضبط أو تحسين خاص.",
      metrics: [
        { title: "وقت استجابة الاستعلام", items: ["p٥٠: ٠.٨ ثانية", "p٩٥: ٢.١ ثانية", "p٩٩: ٣.٤ ثانية"] },
        { title: "المستخدمون المتزامنون", items: ["تم الاختبار حتى ١٠٬٠٠٠ استعلام متزامن دون تدهور"] },
        { title: "حجم البيانات", items: ["يتعامل مع جداول تحتوي على ١+ مليار صف", "يعالج حتى ١٠٠ جيجابايت لكل استعلام"] },
        { title: "اتصالات قاعدة البيانات", items: ["اتصالات متزامنة غير محدودة", "تجميع الاتصالات مدمج"] }
      ],
      environment: {
        title: "بيئة الاختبار",
        items: [
          "تم الاختبار على بنية AWS الأساسية القياسية",
          "لا يوجد ضبط أو تحسين خاص",
          "أحمال عمل حقيقية للعملاء"
        ]
      }
    },
    developer: {
      headline: "بناه المطورون، للمطورين",
      subheadline: "جعلنا التنفيذ سهلاً حتى تركز على البناء.",
      docsButton: "اطلع على وثائقنا",
      githubButton: "عرض على GitHub",
      features: [
        { title: "تثبيت بسطر واحد", desc: "pip install zeroqueries-sdk\nnpm install zeroqueries-js" },
        { title: "وثائق شاملة", desc: "أدلة البدء السريع • مراجع API • أمثلة أكواد • دروس فيديو" },
        { title: "دعم TypeScript", desc: "تعريفات كاملة للاكتمال التلقائي في بيئة التطوير والتحقق في وقت الترجمة" },
        { title: "Webhooks والأحداث", desc: "تشغيل سير العمل عند اكتمال الاستعلام أو الأخطاء أو تنبيهات العتبة" },
        { title: "وظائف مخصصة", desc: "وسّع ZeroQueries بمنطق أعمالك وحساباتك الخاصة" },
        { title: "تكامل CI/CD", desc: "اختبر الاستعلامات في خط أنابيب CI. تحكم في إصدار تحليلاتك." },
        { title: "SDKs متوفرة", desc: "Python • Node.js • Go • Java • Ruby • PHP • Rust" }
      ]
    },
    industrySolutions: {
      headline: "حلول مخصصة لقطاعك",
      subheadline: "تتكيف ZeroQueries مع تحديات البيانات الفريدة لقطاعك.",
      button: "اتصل بمتخصصي القطاع لدينا",
      industries: [
        { title: "الخدمات المصرفية والمالية", desc: "تقارير المخاطر الفورية • استعلامات اكتشاف الاحتيال • تقارير الامتثال • عرض ٣٦٠ للعميل" },
        { title: "الرعاية الصحية وعلوم الحياة", desc: "وصول لبيانات المرضى متوافق مع HIPAA • تحليل التجارب السريرية • مقاييس كفاءة التشغيل" },
        { title: "البيع بالتجزئة والتجارة الإلكترونية", desc: "تحسين المخزون • تقسيم العملاء • أداء المبيعات • رؤية سلسلة التوريد" },
        { title: "SaaS والتكنولوجيا", desc: "تحليلات الاستخدام • التنبؤ بالتسرب • تتبع الإيرادات المتكررة • مقاييس تبني الميزات" },
        { title: "القطاع الحكومي والعام", desc: "متوافق مع الهيئة الوطنية للأمن السيبراني / NESA • تحليلات خدمات المواطنين • تتبع الميزانية • لوحات أداء" },
        { title: "التصنيع والخدمات اللوجستية", desc: "مراقبة سلسلة التوريد • كفاءة الإنتاج • مقاييس مراقبة الجودة • إدارة المخزون" }
      ]
    },
    resourceCenter: {
      headline: "موارد لتوجيه رحلتك مع البيانات",
      subheadline: "استكشف مكتبتنا من الرؤى والأدلة والأبحاث.",
      button: "عرض جميع الموارد",
      items: [
        { type: "مقالة", title: "عائد الاستثمار لتحليلات الخدمة الذاتية", desc: "كيف توفر الشركات الرائدة الملايين من خلال إتاحة الوصول للبيانات للجميع" },
        { type: "ورقة بحثية", title: "حوكمة البيانات في عصر الذكاء الاصطناعي", desc: "إطار عمل لتحليلات آمنة ومتوافقة مدعومة بالذكاء الاصطناعي" },
        { type: "دراسة حالة", title: "كيف قلل بنك إقليمي وقت إعداد التقارير بنسبة ٩٤٪", desc: "من ٥ أيام إلى إجابات في ثانيتين" },
        { type: "ندوة عبر الإنترنت", title: "بناء ثقافة قائمة على البيانات", desc: "أفضل الممارسات من مديري البيانات في Fortune 500" },
        { type: "كتاب إلكتروني", title: "دليل المدير التنفيذي لمجموعة البيانات الحديثة", desc: "ما يحتاج كل قائد معرفته في ٢٠٢٤" },
        { type: "تقرير معايير", title: "ZeroQueries مقابل ذكاء الأعمال التقليدي: تحليل الأداء", desc: "شاهد الأرقام وراء السرعة" }
      ]
    },
    demo: {
      title: "الوصول إلى البروتوكول.",
      description: "اربط نظامك بالذكاء الحواري. آمن، للقراءة فقط، وسريع بشكل استثنائي.",
      features: ["جاهزية SOC-2", "إعداد في 10 دقائق"],
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني للعمل",
        database: "نوع قاعدة البيانات",
        submit: "طلب جلسة",
        success: {
          title: "تم طلب الوصول",
          description: "سيقوم مهندس ذكاء بالتحقق من بياناتك والتواصل معك خلال ساعتين.",
          button: "العودة للرئيسية"
        }
      }
    },
    auth: {
      title: "إنشاء جلسة",
      subtitle: "الوصول إلى طبقة البيانات الذكية الخاصة بك",
      google: "هوية جوجل",
      or: "أو",
      email: "معرف البريد الإلكتروني",
      password: "مفتاح الأمان",
      submit: "الانضمام للمحادثة",
      noSession: "ليس لديك جلسة؟ اطلب الوصول"
    },

  }
};
