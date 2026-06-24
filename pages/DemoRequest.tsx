
import React, { useState } from 'react';
import { Language, translations } from '../translations';
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: Language;
}

const DemoRequest: React.FC<Props> = ({ onBack, lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang].demoRequest;

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const data = new FormData();

  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("company", formData.company);

  try {
    const response = await fetch(
      "https://zeroqueries.com/api/send_mail.php",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();

    if (result.status === "success") {
      setSubmitted(true);
    } else {
      alert("Email sending failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  if (submitted) {
    return (
      <div className="text-center py-12 animate-reveal">
        <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
          <CheckCircle2 className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{t.form.success.title}</h2>
        <p className="text-slate-400 mb-10 max-w-sm mx-auto font-light">
          We will get back to you shortly.
        </p>
        <button
          onClick={onBack}
          className="btn-premium px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs"
        >
          {t.form.success.button}
        </button>
      </div>
    );
  }

 return (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${lang === "ar" ? "text-right" : "text-left"}`}>

    {/* LEFT SIDE */}
    <div className={lang === "ar" ? "lg:order-2" : ""}>
      <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
        {t.title}
      </h2>

      <p className="text-slate-400 mb-8">
        {t.description}
      </p>

      <div className="space-y-4">

        {t.features.map((feature, i) => (
  <div key={i} className="flex gap-4 items-start">
    <CheckCircle2 className="text-blue-400 w-5 h-5 mt-1" />
    <span className="text-slate-300">{feature}</span>
  </div>
))}

        {/* <div className="flex gap-4 items-start">
          <CheckCircle2 className="text-blue-400 w-5 h-5 mt-1" />
          <span className="text-slate-300">
            Secure role-based access control
          </span>
        </div>

        <div className="flex gap-4 items-start">
          <CheckCircle2 className="text-blue-400 w-5 h-5 mt-1" />
          <span className="text-slate-300">
            Instant chart generation
          </span>
        </div>

        <div className="flex gap-4 items-start">
          <CheckCircle2 className="text-blue-400 w-5 h-5 mt-1" />
          <span className="text-slate-300">
            Enterprise deployment options (Cloud or On-Premise)
          </span>
        </div> */}

      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <form onSubmit={handleSubmit} className={`space-y-5 ${lang === "ar" ? "lg:order-1" : ""}`}>

      <input
        required
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t.form.name}
        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      <input
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t.form.email}
        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      <input
        type="text"
        name="organization"
        placeholder={t.form.organization}
        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      <input
        type="text"
        name="role"
        placeholder={t.form.role}
        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      <input
        type="text"
        name="environment"
        placeholder={t.form.environment}
        className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all">
        {t.form.submit}
      </button>

      <p className="text-xs text-slate-500 text-center">
        {t.form.note}
      </p>

    </form>
  </div>
);
};

export default DemoRequest;
