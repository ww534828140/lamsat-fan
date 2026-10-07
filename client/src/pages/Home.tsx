import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Check,
  ChevronLeft,
  Clock3,
  LayoutPanelTop,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { redirectMobileToCall } from "@/lib/mobileAutoCall";

const phone = "0583099153";
const internationalPhone = "+966583099153";
const whatsapp = "https://wa.me/966583099153";
const heroImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80";

const services = [
  {
    icon: <Building2 size={27} />,
    title: "اللوحات والواجهات الخارجية",
    text: "نصمم ونركب واجهات كلادنج عصرية، مقاومة للعوامل الجوية، تمنح نشاطك حضورًا واضحًا من أول نظرة.",
  },
  {
    icon: <Sparkles size={27} />,
    title: "الحروف البارزة والزنكور",
    text: "حروف مضيئة وغير مضيئة، وحروف زنكور بجودة متينة وتصاميم تناسب هوية متجرك أو منشأتك.",
  },
  {
    icon: <Star size={27} />,
    title: "حروف الاستيل الذهبي والفضي",
    text: "تفاصيل فاخرة تضيف الرقي للواجهة وتبرز اسم علامتك بخامة لامعة وتشطيب يلفت الانتباه.",
  },
  {
    icon: <Printer size={27} />,
    title: "الطباعة الرقمية والبنرات",
    text: "بنرات وفليكس بطباعة دقيقة وألوان واضحة للمحلات، الفعاليات، المناسبات والحملات الإعلانية.",
  },
  {
    icon: <ScanLine size={27} />,
    title: "الاستيكرات والواجهات الزجاجية",
    text: "استيكرات للزجاج والسيارات والمنتجات، بخيارات شفافة أو مطفية وقياسات تنفذ حسب طلبك.",
  },
  {
    icon: <LayoutPanelTop size={27} />,
    title: "رول أب وأكريليك للمعارض",
    text: "تجهيز متكامل للمعارض والفعاليات: رول أب، بوب أب ولوحات أكريليك أنيقة للمكاتب والمتاجر.",
  },
];

const benefits = [
  { icon: <BadgeCheck size={22} />, title: "دقة عالية", text: "من الفكرة والتصميم إلى التركيب النهائي." },
  { icon: <Clock3 size={22} />, title: "التزام بالمواعيد", text: "خطة واضحة وتسليم في الوقت المتفق عليه." },
  { icon: <ShieldCheck size={22} />, title: "خامات ممتازة", text: "حلول عملية تعيش وتظهر بجودة عالية." },
];

const steps = [
  { number: "01", title: "أرسل فكرتك", text: "أرسل اسم النشاط أو صورة الموقع والمقاس التقريبي عبر واتساب." },
  { number: "02", title: "نقترح التصميم", text: "نرتب لك الخامة واللون والشكل المناسب لهوية نشاطك وميزانيتك." },
  { number: "03", title: "ننفذ ونركب", text: "تنفيذ دقيق وتركيب مرتب لتخرج واجهتك بالشكل الذي يلفت عملاءك." },
];

const gallery = [
  { src: "/assets/lamset-fan-work-sign.webp", alt: "لوحة حروف مضيئة ملونة منفذة من أعمال لمسة فن للدعاية والإعلان" },
  { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80", alt: "تصميم هوية بصرية ولمسات دعائية عصرية" },
  { src: "https://images.unsplash.com/photo-1612815154858-60aa4c59e479?auto=format&fit=crop&w=900&q=80", alt: "طباعة رقمية احترافية لمطبوعات إعلانية" },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", alt: "لوحة واجهة متجر بتصميم واضح وجذاب" },
  { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80", alt: "لوحات أكريليك وتجهيزات مكتبية للعلامات التجارية" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    redirectMobileToCall(internationalPhone);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div dir="rtl" className="site-root">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>لمسة فن للدعاية والإعلان — نصنع حضور علامتك</span>
          <a href={`tel:${internationalPhone}`} className="top-phone"><Phone size={14} /> {phone}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="لمسة فن للدعاية والإعلان - الصفحة الرئيسية">
            <span className="brand-mark"><span></span><span></span><span></span></span>
            <span><strong>لمسة فن</strong><small>للدعاية والإعلان</small></span>
          </a>
          <nav className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            <a href="/services.html" onClick={closeMenu}>خدماتنا</a>
            <a href="/signage.html" onClick={closeMenu}>اللوحات والواجهات</a>
            <a href="/print.html" onClick={closeMenu}>الطباعة</a>
            <a href="/why-us.html" onClick={closeMenu}>لماذا لمسة فن؟</a>
            <a href="/work.html" onClick={closeMenu}>أعمالنا</a>
            <a href="/contact.html" onClick={closeMenu}>تواصل معنا</a>
          </nav>
          <div className="desktop-actions">
            <a href={`tel:${internationalPhone}`} className="phone-link"><Phone size={17} /> اتصل الآن</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="nav-cta"><MessageCircle size={17} /> واتساب</a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"></span> واجهتك أول إعلان عنك</div>
              <h1>خلّ علامتك<br /><em>تُرى.</em></h1>
              <p className="hero-lead">لمسة فن للدعاية والإعلان تنفذ اللوحات والواجهات والحروف والمطبوعات التي تجعل نشاطك حاضرًا ولا يُنسى.</p>
              <div className="hero-actions">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="primary-button"><MessageCircle size={20} /> اطلب عرضك عبر واتساب <ArrowLeft size={18} /></a>
                <a href={`tel:${internationalPhone}`} className="text-button"><Phone size={17} /> أو اتصل مباشرة</a>
              </div>
              <div className="hero-note"><Check size={16} /> تصميم وتنفيذ وتركيب باحترافية</div>
            </div>
            <div className="hero-visual">
              <img src={heroImage} alt="واجهة مكتب عصرية تمثل خدمات لمسة فن للدعاية والإعلان" width="900" height="620" fetchPriority="high" decoding="async" sizes="(max-width: 767px) 100vw, 58vw" />
              <div className="hero-caption"><span className="caption-line"></span><span>إعلانك يبدأ من الواجهة</span></div>
              <div className="floating-stamp"><span>لمسة</span><small>فن<br />للإعلان</small></div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-grid">
            <div className="trust-intro"><span>لماذا يختارنا أصحاب الأنشطة؟</span><strong>فكرة واضحة.<br />تنفيذ يلفت.</strong></div>
            {benefits.map((benefit) => <div className="trust-item" key={benefit.title}><span className="trust-icon">{benefit.icon}</span><div><strong>{benefit.title}</strong><p>{benefit.text}</p></div></div>)}
          </div>
        </section>

        <section className="section-links-strip" aria-label="روابط أقسام الموقع">
          <div className="container">
            <div className="section-links-heading"><span>تصفح خدمات لمسة فن</span><strong>اختر القسم الذي تريد الوصول إليه</strong></div>
            <nav className="section-links-grid" aria-label="روابط الأقسام الداخلية">
              <a href="/services.html"><span>01</span><strong>كل الخدمات</strong><ArrowLeft size={16} /></a>
              <a href="/signage.html"><span>02</span><strong>اللوحات والواجهات</strong><ArrowLeft size={16} /></a>
              <a href="/print.html"><span>03</span><strong>الطباعة والمطبوعات</strong><ArrowLeft size={16} /></a>
              <a href="/why-us.html"><span>04</span><strong>لماذا لمسة فن؟</strong><ArrowLeft size={16} /></a>
              <a href="/work.html"><span>05</span><strong>أعمالنا وإلهام</strong><ArrowLeft size={16} /></a>
              <a href="/contact.html"><span>06</span><strong>تواصل معنا</strong><ArrowLeft size={16} /></a>
            </nav>
          </div>
        </section>

        <section className="home-summary section-padding">
          <div className="container home-summary-inner">
            <span className="section-kicker">تصفح الموقع</span>
            <h2>كل خدمة لها صفحة<br /><span>مستقلة وواضحة.</span></h2>
            <p>اختر القسم المناسب لمشاهدة التفاصيل والصور وطلب عرض سعر مباشر.</p>
            <a href="/services.html" className="primary-button">استكشف جميع الخدمات <ArrowLeft size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-mark"><span></span><span></span><span></span></span><span><strong>لمسة فن</strong><small>للدعاية والإعلان</small></span></a><p>نصنع حضور علامتك من أول نظرة.</p><div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> واتساب</a><a href={`tel:${internationalPhone}`}><Phone size={16} /> اتصال</a><a href="#home"><ArrowLeft size={16} /> للأعلى</a></div></div><div className="container copyright"><span>© {new Date().getFullYear()} لمسة فن للدعاية والإعلان. جميع الحقوق محفوظة.</span><span className="location"><MapPin size={14} /> نخدمكم في المملكة العربية السعودية</span></div></footer>
      <div className="floating-contact"><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><MessageCircle size={25} /></a><a href={`tel:${internationalPhone}`} aria-label="اتصال مباشر"><Phone size={22} /></a></div>
    </div>
  );
}
