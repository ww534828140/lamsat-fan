/*
 * أسلوب الصفحة: دفء الحرفة الراقية — تكوين تحريري غير متماثل، ألوان طينية وفيروزية،
 * ورسالة مباشرة تقود العميل في جدة إلى الاتصال أو واتساب.
 */
import { ArrowLeft, ArrowUpLeft, Brush, Check, Clock3, Home as HomeIcon, MapPin, Menu, MessageCircle, Paintbrush, Phone, Sparkles, Star, X } from "lucide-react";
import { useState } from "react";

const phone = "0567290793";
const internationalPhone = "+966567290793";
const whatsapp = "https://wa.me/966567290793";

const services = [
  { icon: <Paintbrush size={25} />, title: "دهانات داخلية", text: "تشطيبات مرتبة وألوان هادئة أو جريئة، حسب ذوقك وطبيعة المكان." },
  { icon: <Brush size={25} />, title: "ديكورات جدران", text: "بدائل راقية للدهان التقليدي: ملمس، خطوط، فواصل ولمسات ترفع شكل الغرفة." },
  { icon: <Sparkles size={25} />, title: "تجديد وتشطيب", text: "نجهز السطح، نعالج العيوب وننفذ اللمسة الأخيرة بعناية من أول طبقة لآخر تفصيل." },
];

const steps = [
  { number: "01", title: "أرسل صورة المكان", text: "واتساب سريع بصورة أو فيديو قصير للمساحة التي تريد تجديدها." },
  { number: "02", title: "نقترح لك الأنسب", text: "نساعدك في اختيار اللون واللمسة المناسبة لطبيعة الجدار وإضاءة الغرفة." },
  { number: "03", title: "نبدأ التنفيذ", text: "موعد واضح، تجهيز نظيف، وتنفيذ دقيق يترك المكان أجمل مما تخيلت." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-[#f7f3ec] text-[#182b2a]">
      <div className="top-strip"><div className="container flex items-center justify-between gap-4"><span>خدمات دهانات وديكورات في جدة</span><a href={`tel:${internationalPhone}`} className="hidden items-center gap-2 sm:flex"><Phone size={14} /> {phone}</a></div></div>
      <header className="site-header">
        <div className="container flex items-center justify-between py-5">
          <a href="#home" className="brand" aria-label="لمسة فن - الصفحة الرئيسية"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>لمسة فن</strong><small>دهانات وديكورات جدة</small></span></a>
          <nav className={`${menuOpen ? "flex" : "hidden"} mobile-nav md:flex`} aria-label="التنقل الرئيسي"><a href="#services" onClick={() => setMenuOpen(false)}>خدماتنا</a><a href="#approach" onClick={() => setMenuOpen(false)}>أسلوبنا</a><a href="#work" onClick={() => setMenuOpen(false)}>لمساتنا</a><a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a></nav>
          <div className="hidden items-center gap-3 md:flex"><a href={`tel:${internationalPhone}`} className="phone-link"><Phone size={17} /> اتصل الآن</a><a href={whatsapp} target="_blank" rel="noreferrer" className="nav-cta"><MessageCircle size={17} /> واتساب</a></div>
          <button className="menu-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="home">
        <section className="hero-section"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"></span> لمسة تغيّر شكل المكان</div><h1>لون يليق<br /><em>ببيتك.</em></h1><p className="hero-lead">دهانات وديكورات تُنفّذ بعناية في جدة، من اختيار اللون إلى آخر لمسة على الجدار.</p><div className="hero-actions"><a href={whatsapp} target="_blank" rel="noreferrer" className="primary-button"><MessageCircle size={20} /> احجز عبر واتساب <ArrowLeft size={18} /></a><a href={`tel:${internationalPhone}`} className="text-button"><Phone size={17} /> أو اتصل مباشرة</a></div><div className="hero-note"><Check size={16} /> معاينة واتفاق واضح قبل البداية</div></div><div className="hero-visual"><img src="/manus-storage/lamsat-hero_3ee283c0.jpg" alt="دهانات وديكورات داخلية بلمسة فنية" width="1200" height="800" fetchPriority="high" decoding="async" sizes="(max-width: 767px) 100vw, 58vw" /><div className="hero-caption"><span className="caption-line"></span><span>تفاصيل تصنع الفرق</span></div><div className="floating-stamp"><span>جدة</span><small>نخدمك<br />بكل عناية</small></div></div></div></section>

        <section className="trust-bar"><div className="container trust-grid"><div className="trust-intro"><span>لماذا لمسة فن؟</span><strong>شغل مرتب.<br />نتيجة تفرحك.</strong></div><div className="trust-item"><span className="trust-icon"><Clock3 size={22} /></span><div><strong>موعد واضح</strong><p>نلتزم بالوقت المتفق عليه</p></div></div><div className="trust-item"><span className="trust-icon"><HomeIcon size={22} /></span><div><strong>نظافة في التنفيذ</strong><p>نحمي المكان ونرتبه بعد الشغل</p></div></div><div className="trust-item"><span className="trust-icon"><Star size={22} /></span><div><strong>لمسة من ذوقك</strong><p>نسمع رغبتك قبل أن نقترح</p></div></div></div></section>

        <section id="services" className="section-padding services-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">ما الذي نقدمه</span><h2>من جدار عادي<br /><span>إلى مساحة لها شخصية.</span></h2></div><p>سواء كنت تجدد غرفة واحدة أو تستعد لبيت جديد، نساعدك على اختيار اللمسة التي تناسبك وتعيش معك.</p></div><div className="services-grid">{services.map((service, index) => <article className={`service-card ${index === 1 ? "service-featured" : ""}`} key={service.title}><div className="service-number">0{index + 1}</div><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="card-link">اسأل عن الخدمة <ArrowLeft size={16} /></a></article>)}</div></div></section>

        <section id="approach" className="approach-section"><div className="container approach-grid"><div className="approach-image"><img src="/manus-storage/lamsat-living-room_09ccb8a6.jpg" alt="جدار بلمسة ديكور عصرية" width="1200" height="900" loading="lazy" decoding="async" sizes="(max-width: 767px) 100vw, 50vw" /><div className="color-swatches"><span style={{background: "#c88669"}}></span><span style={{background: "#d7c2a2"}}></span><span style={{background: "#244d4b"}}></span><span style={{background: "#f5eee3"}}></span></div></div><div className="approach-copy"><span className="section-kicker">أسلوبنا في الشغل</span><h2>ذوقك أولًا،<br /><span>والتفاصيل علينا.</span></h2><p>الدهان ليس مجرد لون. هو إحساس الغرفة، طريقة انعكاس الضوء، والفرق الذي تشعر به كل يوم. لذلك نبدأ بالاستماع، ثم نرتب الخطوات وننفذ بهدوء.</p><div className="approach-list"><div><span className="list-check"><Check size={16} /></span><span><strong>نقترح بوضوح</strong><small>بدون تعقيد أو خيارات مربكة.</small></span></div><div><span className="list-check"><Check size={16} /></span><span><strong>ننّفذ بنظافة</strong><small>نحافظ على أثاثك وأرضياتك.</small></span></div><div><span className="list-check"><Check size={16} /></span><span><strong>نترك أثرًا جميلًا</strong><small>تشطيب يبان من أول نظرة.</small></span></div></div></div></div></section>

        <section id="work" className="section-padding work-section"><div className="container"><div className="work-heading"><div><span className="section-kicker">رحلة بسيطة</span><h2>خلّ البداية<br /><span>علينا.</span></h2></div><p>كل ما نحتاجه صورة للمكان وفكرة بسيطة في بالك. والباقي نرتبه معك.</p></div><div className="steps-grid">{steps.map(step => <div className="step" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

        <section id="contact" className="contact-section"><div className="container contact-inner"><div><span className="section-kicker light">جاهز تغيّر المكان؟</span><h2>أرسل لنا صورة،<br /><em>ونبدأ من هناك.</em></h2><p>تواصل معنا الآن وخذ رأيًا سريعًا يناسب مساحتك في جدة.</p></div><div className="contact-actions"><a href={whatsapp} target="_blank" rel="noreferrer" className="contact-button light-button"><MessageCircle size={22} /> راسلنا على واتساب <ArrowLeft size={18} /></a><a href={`tel:${internationalPhone}`} className="contact-phone"><Phone size={18} /> {phone}</a></div><div className="contact-pattern"><span></span><span></span><span></span></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>لمسة فن</strong><small>دهانات وديكورات جدة</small></span></a><p>نلوّن المساحات بما يشبهك.</p><div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> واتساب</a><a href={`tel:${internationalPhone}`}><Phone size={16} /> اتصال</a><a href="#home"><ArrowUpLeft size={16} /> للأعلى</a></div></div><div className="container copyright"><span>© {new Date().getFullYear()} لمسة فن. جميع الحقوق محفوظة.</span><span className="location"><MapPin size={14} /> جدة، المملكة العربية السعودية</span></div></footer>
      <div className="floating-contact"><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><MessageCircle size={25} /></a><a href={`tel:${internationalPhone}`} aria-label="اتصال مباشر"><Phone size={22} /></a></div>
    </div>
  );
}
