import { ArrowRight, BadgeCheck, Check, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Star, Target } from "lucide-react";

const phone = "0583099153";
const internationalPhone = "+966583099153";
const whatsapp = "https://wa.me/966583099153";

type PageData = {
  label: string;
  title: string;
  intro: string;
  cards?: readonly (readonly [string, string, string?])[];
  gallery?: boolean;
  contact?: boolean;
};

const pages: Record<string, PageData> = {
  "services.html": {
    label: "خدمات لمسة فن",
    title: "كل خدماتنا\nفي مكان واحد.",
    intro: "حلول متكاملة للدعاية والإعلان تبدأ من الفكرة وتنتهي بواجهة تلفت الأنظار.",
    cards: [
      ["اللوحات والواجهات الخارجية", "كلادنج مقاوم للعوامل الجوية بتصاميم وألوان عصرية."],
      ["الحروف البارزة والزنكور", "حروف مضيئة وغير مضيئة بجودة واضحة ومتينة."],
      ["حروف الاستيل الذهبي والفضي", "فخامة ورقي يبرزان اسم علامتك على الواجهة."],
      ["الطباعة الرقمية والبنرات", "بنرات وفليكس بدقة عالية للمحلات والفعاليات."],
      ["الاستيكرات", "للواجهات الزجاجية والسيارات والمنتجات بخيارات شفافة ومطفية."],
      ["رول أب وبوب أب وأكريليك", "تجهيزات أنيقة للمعارض والمكاتب والمتاجر."]
    ]
  },
  "signage.html": {
    label: "اللوحات والواجهات",
    title: "واجهتك أول\nإعلان عنك.",
    intro: "نصمم ونركب واجهات كلادنج وحروفًا بارزة تمنح نشاطك حضورًا واضحًا من أول نظرة.",
    cards: [
      ["تصميم وتركيب الكلادنج", "خامات مقاومة للعوامل الجوية بأشكال وألوان حديثة."],
      ["الحروف البارزة المضيئة", "وضوح ليلًا ونهارًا مع إضاءة تلفت العملاء."],
      ["حروف الزنكور", "متانة وجودة تدوم طويلًا للمتاجر والمنشآت."],
      ["حروف الاستيل", "ذهبي أو فضي بتشطيب فاخر يرفع جمالية الواجهة."]
    ]
  },
  "print.html": {
    label: "الطباعة والمطبوعات",
    title: "اطبع رسالتك\nبجودة تُلاحظ.",
    intro: "مطبوعات إعلانية واضحة الألوان والتفاصيل لتوصل رسالتك بالشكل الصحيح.",
    cards: [
      ["بنرات وفليكس", "طباعة دقيقة للوحات والمناسبات والحملات الإعلانية."],
      ["استيكرات الواجهات والسيارات", "تنفيذ شفاف أو مطفي وبمقاسات تناسب مشروعك."],
      ["رول أب وبوب أب", "تجهيز كامل للمعارض والفعاليات بسرعة واحترافية."],
      ["لوحات أكريليك", "تصاميم أنيقة ومخصصة للمكاتب والمتاجر."]
    ]
  },
  "why-us.html": {
    label: "لماذا لمسة فن؟",
    title: "شغل يليق\nبعلامتك.",
    intro: "نحوّل احتياجك إلى حل إعلاني واضح، بخامات ممتازة واهتمام بكل تفصيلة.",
    cards: [
      ["دقة في التصميم والتنفيذ", "نراجع المقاس والخامة والتفاصيل قبل بداية العمل.", "target"],
      ["التزام تام بالمواعيد", "نحدد خطوات واضحة ونحافظ على وقتك وموعد افتتاحك.", "clock"],
      ["أسعار تنافسية", "خيارات متعددة تناسب احتياجك دون التنازل عن الجودة.", "star"],
      ["خامات ممتازة", "حلول عملية تظهر بجودة عالية وتخدم نشاطك لفترة طويلة.", "shield"]
    ]
  },
  "work.html": {
    label: "أعمالنا وإلهام",
    title: "أعمال تترك\nانطباعًا أول.",
    intro: "نماذج من تنفيذات لمسة فن في اللوحات والحروف والواجهات الإعلانية.",
    gallery: true
  },
  "contact.html": {
    label: "تواصل معنا",
    title: "أرسل فكرتك،\nونبدأ من هناك.",
    intro: "تواصل معنا للاستفسار وطلب عرض سعر مناسب لنشاطك.",
    contact: true
  }
} as const;

type PageKey = keyof typeof pages;

const navLinks = [
  ["services.html", "خدماتنا"],
  ["signage.html", "اللوحات والواجهات"],
  ["print.html", "الطباعة"],
  ["why-us.html", "لماذا لمسة فن؟"],
  ["work.html", "أعمالنا"],
  ["contact.html", "تواصل معنا"]
];

function Icon({ name }: { name?: string }) {
  if (name === "target") return <Target size={26} />;
  if (name === "clock") return <Clock3 size={26} />;
  if (name === "star") return <Star size={26} />;
  return <ShieldCheck size={26} />;
}

export default function SectionPage() {
  const key = (window.location.pathname.split("/").pop() || "services.html") as PageKey;
  const page = pages[key] || pages["services.html"];
  const titleLines = page.title.split("\n");

  return (
    <div dir="rtl" className="site-root section-page">
      <div className="top-strip"><div className="container top-strip-inner"><span>لمسة فن للدعاية والإعلان — نصنع حضور علامتك</span><a href={`tel:${internationalPhone}`} className="top-phone"><Phone size={14} /> {phone}</a></div></div>
      <header className="site-header"><div className="container header-inner">
        <a href="/" className="brand" aria-label="لمسة فن للدعاية والإعلان - الصفحة الرئيسية"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>لمسة فن</strong><small>للدعاية والإعلان</small></span></a>
        <nav className="page-nav" aria-label="التنقل بين صفحات الموقع">{navLinks.map(([href, label]) => <a href={`/${href}`} key={href}>{label}</a>)}</nav>
        <div className="desktop-actions"><a href={`tel:${internationalPhone}`} className="phone-link"><Phone size={17} /> اتصل الآن</a><a href={whatsapp} target="_blank" rel="noreferrer" className="nav-cta"><MessageCircle size={17} /> واتساب</a></div>
      </div></header>
      <main>
        <section className="page-hero"><div className="container"><a className="back-link" href="/"><ArrowRight size={17} /> العودة للرئيسية</a><span className="section-kicker">{page.label}</span><h1>{titleLines[0]}<br /><em>{titleLines[1]}</em></h1><p>{page.intro}</p></div></section>
        {page.cards && <section className="section-padding page-content"><div className="container page-cards">{page.cards.map(([title, text, icon], index) => <article className="page-card" key={title}><span className="page-card-number">0{index + 1}</span>{key === "why-us.html" ? <div className="page-card-icon"><Icon name={icon} /></div> : null}<h2>{title}</h2><p>{text}</p><a href={`/${key === "services.html" ? "contact.html" : "contact.html"}`} className="card-link">اطلب عرض سعر <ArrowRight size={16} /></a></article>)}</div></section>}
        {page.gallery && <section className="section-padding page-content"><div className="container page-gallery"><img src="/assets/lamset-fan-work-sign.webp" alt="لوحة حروف مضيئة ملونة من أعمال لمسة فن للدعاية والإعلان" /><div><span className="section-kicker">تنفيذ حقيقي</span><h2>لوحة حروف مضيئة<br /><em>بتفاصيل تلفت.</em></h2><p>صورة من أعمالنا في تنفيذ لوحة واجهة مضيئة بألوان واضحة وحضور قوي يناسب النشاط التجاري.</p><a href="/contact.html" className="primary-button"><MessageCircle size={19} /> اطلب تنفيذ مشروعك <ArrowRight size={17} /></a></div></div></section>}
        {page.contact && <section className="section-padding page-content"><div className="container contact-page-box"><div><BadgeCheck size={34} /><h2>نحن جاهزون لسماع فكرتك.</h2><p>أرسل صورة الموقع أو المقاس التقريبي، وسنساعدك في اختيار الخامة والتصميم المناسب.</p></div><div className="contact-actions"><a href={whatsapp} target="_blank" rel="noreferrer" className="contact-button light-button"><MessageCircle size={22} /> راسلنا على واتساب</a><a href={`tel:${internationalPhone}`} className="contact-phone"><Phone size={18} /> {phone}</a></div></div></section>}
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a href="/" className="brand footer-brand"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>لمسة فن</strong><small>للدعاية والإعلان</small></span></a><p>نصنع حضور علامتك من أول نظرة.</p><div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> واتساب</a><a href={`tel:${internationalPhone}`}><Phone size={16} /> اتصال</a><a href="/"><MapPin size={16} /> الرئيسية</a></div></div></footer>
    </div>
  );
}
