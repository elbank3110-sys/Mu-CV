// ============================================================================
// BLACK-MAK® — Online CV  ·  Single source of truth
// All copy is bilingual (EN/AR). Data sourced from the ATS résumé.
// ============================================================================

export type Lang = "en" | "ar";
export type Bi = { en: string; ar: string };

export const STUDIO_URL = "https://black-mak-v4.vercel.app/";

export const profile = {
  name: { en: "MUHAMED ALAA", ar: "محمد علاء" },
  alias: "BLACK-MAK®",
  established: "2014",
  role: {
    en: "Logo & Visual Identity Designer",
    ar: "مصمم شعارات وهوية بصرية",
  },
  titles: {
    en: ["Creative Director", "Brand Strategist"],
    ar: ["مدير إبداعي", "استراتيجي علامات تجارية"],
  },
  location: { en: "New Valley, Egypt", ar: "الوادي الجديد، مصر" },
  experienceYears: { en: "12+ years of experience", ar: "أكثر من ١٢ عامًا من الخبرة" },
  email: "muhemedalaa2699@gmail.com",
  phone: "+20 100 246 2821",
  phoneRaw: "+201002462821",
  whatsapp: "https://wa.me/201002462821",
};

// Punchy hero copy — echoes the studio's brand voice ("Marks with meaning").
export const hero = {
  kicker: { en: "BLACK-MAK® / CURRICULUM VITÆ — 2026", ar: "BLACK-MAK® / السيرة الذاتية — ٢٠٢٦" },
  lead: {
    en: "I turn business meaning into a",
    ar: "أُحوّل معنى النشاط التجاري إلى",
  },
  outline: { en: "brand identity.", ar: "هوية يثق بها العالم." },
  sub: {
    en: "Logo & visual identity designer with 12+ years across Arabic and Latin type, brand systems, and real-world applications — where a mark must survive the street, not just the screen.",
    ar: "مصمم شعارات وهوية بصرية بخبرة تتجاوز ١٢ عامًا في الخط العربي واللاتيني وأنظمة الهوية والتطبيقات الواقعية — حيث يجب أن تصمد العلامة في الشارع، لا على الشاشة فقط.",
  },
};

export const stats: { value: string; label: Bi }[] = [
  { value: "12+", label: { en: "Years of practice", ar: "سنوات من الممارسة" } },
  { value: "50+", label: { en: "Logos & identities delivered", ar: "شعار وهوية تم تسليمها" } },
  { value: "AR·EN", label: { en: "Bilingual by design", ar: "ثنائي اللغة بالتصميم" } },
];

export const about = {
  title: { en: "The practice.", ar: "الممارسة." },
  note: {
    en: "A designer with a street-level understanding of how identity behaves in the real world.",
    ar: "مصمم بفهمٍ ميداني لكيفية تصرّف الهوية في العالم الحقيقي.",
  },
  p1: {
    en: "I'm <strong>Muhamed Alaa</strong> — a Logo &amp; Visual Identity Designer, Creative Director and Brand Strategist running BLACK-MAK® from New Valley, Egypt. For over a decade I've helped businesses translate who they are into marks that work at any size, in any language, on any surface.",
    ar: "أنا <strong>محمد علاء</strong> — مصمم شعارات وهوية بصرية، ومدير إبداعي، واستراتيجي علامات تجارية، أُدير BLACK-MAK® من الوادي الجديد بمصر. لأكثر من عقد، ساعدت الأعمال على ترجمة هويتها إلى علاماتٍ تعمل بأي حجم، وبأي لغة، وعلى أي سطح.",
  },
  p2: {
    en: "The work spans Arabic calligraphy, Latin typography, full identity systems, applied print and outdoor advertising — supported by an AI-augmented creative workflow. Every project starts with one question: what should this mark make people feel?",
    ar: "يمتد العمل من الخط العربي إلى الطباعة اللاتينية وأنظمة الهوية الكاملة والمطبوعات واللوحات الخارجية — بدعم من سير عمل إبداعي معزَّز بالذكاء الاصطناعي. كل مشروع يبدأ بسؤالٍ واحد: بماذا يجب أن تُشعر هذه العلامة الناس؟",
  },
  facts: {
    based: { en: "Based in", ar: "المقر" },
    since: { en: "Practice since", ar: "الممارسة منذ" },
    langs: { en: "Languages", ar: "اللغات" },
    status: { en: "Status", ar: "الحالة" },
    langsValue: { en: "Arabic · English", ar: "العربية · الإنجليزية" },
    available: { en: "● Available for work", ar: "● متاح للعمل" },
  },
};

export type Job = {
  from: string;
  to: Bi;
  role: Bi;
  org: Bi;
  place: Bi;
  bullets: Bi[];
  tag: Bi;
};

export const experience: Job[] = [
  {
    from: "2018",
    to: { en: "Present", ar: "الآن" },
    role: { en: "Logo & Visual Identity Designer", ar: "مصمم شعارات وهوية بصرية" },
    org: { en: "BLACK-MAK® · Self-Employed", ar: "BLACK-MAK® · عمل حر" },
    place: { en: "New Valley, Egypt", ar: "الوادي الجديد، مصر" },
    tag: { en: "Lead · Studio", ar: "قائد · استوديو" },
    bullets: [
      {
        en: "Design brand identities and visual systems for clients across industries, blending 12+ years of craft with an AI-augmented creative workflow.",
        ar: "أُصمم هويات بصرية وأنظمة متكاملة لعملاء في قطاعات متنوعة، بمزجٍ بين خبرة تتجاوز ١٢ عامًا وسير عمل إبداعي معزَّز بالذكاء الاصطناعي.",
      },
      {
        en: "Maintain a 95% client-satisfaction rate through iterative design, proactive communication and meticulous attention to detail.",
        ar: "أحافظ على معدل رضا عملاء ٩٥٪ عبر التصميم التكراري، والتواصل الاستباقي، والاهتمام الدقيق بالتفاصيل.",
      },
      {
        en: "Delivered 50+ distinctive logos, from startups to established enterprises.",
        ar: "سلّمت أكثر من ٥٠ شعارًا مميزًا، من الشركات الناشئة إلى المؤسسات الراسخة.",
      },
      {
        en: "Manage full project lifecycles — from consultation and concept to delivery and brand-guideline documentation.",
        ar: "أُدير دورة حياة المشروع كاملة — من الاستشارة والفكرة حتى التسليم وتوثيق دليل الهوية.",
      },
    ],
  },
  {
    from: "2021",
    to: { en: "Present", ar: "الآن" },
    role: { en: "Team Leader — Operations & Logistics", ar: "قائد فريق — العمليات واللوجستيات" },
    org: { en: "Grain Milling Factory (Family Business)", ar: "مطحن غلال (عمل عائلي)" },
    place: { en: "New Valley, Egypt", ar: "الوادي الجديد، مصر" },
    tag: { en: "Leadership", ar: "قيادة" },
    bullets: [
      {
        en: "Lead a team of 15+ in daily production, ensuring efficiency, quality control and safety.",
        ar: "أقود فريقًا من أكثر من ١٥ فردًا في الإنتاج اليومي، بما يضمن الكفاءة وضبط الجودة والسلامة.",
      },
      {
        en: "Oversee end-to-end logistics: raw-material procurement, inventory and distribution.",
        ar: "أُشرف على اللوجستيات كاملة: شراء المواد الخام، والمخزون، والتوزيع.",
      },
      {
        en: "Apply strong operational management and problem-solving in a high-volume environment.",
        ar: "أُطبّق إدارة تشغيلية قوية وحلًّا للمشكلات في بيئة إنتاج كثيفة.",
      },
    ],
  },
  {
    from: "2016",
    to: { en: "2020", ar: "٢٠٢٠" },
    role: { en: "Marketing & Advertising Specialist", ar: "أخصائي تسويق وإعلانات" },
    org: { en: "Major Egyptian Retail Brands", ar: "علامات تجزئة مصرية كبرى" },
    place: { en: "Egypt", ar: "مصر" },
    tag: { en: "Foundations", ar: "الأساس" },
    bullets: [
      {
        en: "Designed and ran high-impact outdoor campaigns for major retail shops, driving visibility and foot traffic.",
        ar: "صمّمت ونفّذت حملات خارجية عالية الأثر لمتاجر تجزئة كبرى، مما رفع الظهور وحركة العملاء.",
      },
      {
        en: "Managed client relationships from concept to execution, aligned with brand objectives and deadlines.",
        ar: "أدرت علاقات العملاء من الفكرة حتى التنفيذ، بما يتوافق مع أهداف العلامة والمواعيد.",
      },
      {
        en: "Pivoted campaigns to digital-first approaches during COVID-19, keeping engagement strong.",
        ar: "حوّلت الحملات إلى نهج رقمي أولًا خلال جائحة كوفيد-١٩، مع الحفاظ على تفاعلٍ قوي.",
      },
    ],
  },
];

export type Edu = { from: string; to: string; degree: Bi; org: Bi; note: Bi };

export const education: Edu[] = [
  {
    from: "2015",
    to: "2017",
    degree: { en: "Diploma in Surveying Engineering", ar: "دبلوم هندسة المساحة" },
    org: { en: "Higher Institute of Surveying", ar: "المعهد العالي للمساحة" },
    note: { en: "", ar: "" },
  },
  {
    from: "2011",
    to: "2014",
    degree: { en: "Engineering Studies — 4 years completed", ar: "دراسات هندسية — ٤ سنوات مكتملة" },
    org: { en: "Higher Institute of Engineering (SHA)", ar: "المعهد العالي للهندسة (SHA)" },
    note: {
      en: "A technical foundation in precision and structural thinking — later applied to identity systems.",
      ar: "أساس تقني في الدقة والتفكير الهيكلي — وُظِّف لاحقًا في أنظمة الهوية.",
    },
  },
];

export type SkillGroup = { cat: Bi; items: { name: Bi }[] };

export const skills: SkillGroup[] = [
  {
    cat: { en: "Identity & Logo", ar: "الهوية والشعار" },
    items: [
      { name: { en: "Logo Design", ar: "تصميم الشعار" } },
      { name: { en: "Brand Identity Systems", ar: "أنظمة الهوية البصرية" } },
      { name: { en: "Logotype / Wordmarks", ar: "الشعارات النصية" } },
      { name: { name: { en: "Brand Strategy", ar: "استراتيجية العلامة" } } as any },
    ],
  },
  {
    cat: { en: "Typography & Craft", ar: "الطباعة والحرفة" },
    items: [
      { name: { en: "Latin Typography", ar: "الطباعة اللاتينية" } },
      { name: { en: "Arabic Calligraphy", ar: "الخط العربي" } },
      { name: { en: "Hand Lettering", ar: "الحروف اليدوية" } },
    ],
  },
  {
    cat: { en: "Applied Design", ar: "التصميم التطبيقي" },
    items: [
      { name: { en: "Outdoor & Signage", ar: "اللوحات الخارجية" } },
      { name: { en: "Print & Large Format", ar: "المطبوعات والمقاسات الكبيرة" } },
      { name: { en: "Campaign Visuals", ar: "بصريات الحملات" } },
    ],
  },
  {
    cat: { en: "Process & Delivery", ar: "المنهجية والتسليم" },
    items: [
      { name: { en: "Research & Discovery", ar: "البحث والاكتشاف" } },
      { name: { en: "Concept & Sketching", ar: "الفكرة والرسم الأولي" } },
      { name: { en: "File & Guideline Delivery", ar: "تسليم الملفات والدليل" } },
    ],
  },
  {
    cat: { en: "Leadership", ar: "القيادة" },
    items: [
      { name: { en: "Team Leadership & Operations", ar: "قيادة الفرق والعمليات" } },
      { name: { en: "Client Relationship (AR/EN)", ar: "علاقات العملاء (عربي/إنجليزي)" } },
    ],
  },
];

// AI stack — used as a quiet signal, not a headline feature.
export const aiStack = [
  "AI-Augmented Workflow",
];

export type Cert = {
  year: string;
  years: string;
  title: Bi;
  org: Bi;
  note: Bi;
  thumb: string;
  full: string;
};

export const certificates: Cert[] = [
  {
    year: "2018",
    years: "2018 — 2019",
    title: { en: "Graphic Design Diploma", ar: "دبلومة التصميم الجرافيكي" },
    org: { en: "Russian Cultural Center", ar: "المركز الثقافي الروسي" },
    note: { en: "Completed with grade of Excellent", ar: "أُنجزت بتقدير ممتاز" },
    thumb: "/certs/graphic-thumb.webp",
    full: "/certs/graphic.webp",
  },
  {
    year: "2022",
    years: "2021 — 2022",
    title: { en: "General English Course — 132 Hours", ar: "دورة اللغة الإنجليزية العامة — ١٣٢ ساعة" },
    org: { en: "The British Cultural Center", ar: "المركز الثقافي البريطاني" },
    note: { en: "132 hours of certified instruction", ar: "١٣٢ ساعة تدريب معتمدة" },
    thumb: "/certs/english-thumb.webp",
    full: "/certs/english.webp",
  },
  {
    year: "2022",
    years: "2021 — 2022",
    title: { en: "Fundamentals of Digital Transformation (FDTC)", ar: "أساسيات التحول الرقمي (FDTC)" },
    org: { en: "BCCIT Academy", ar: "أكاديمية BCCIT" },
    note: { en: "Certified training in digital transformation", ar: "تدريب معتمد في التحول الرقمي" },
    thumb: "/certs/fdtc-thumb.webp",
    full: "/certs/fdtc.webp",
  },
];

export const languages = [
  {
    name: { en: "Arabic", ar: "العربية" },
    level: { en: "Native", ar: "اللغة الأم" },
    percent: 100,
    note: {
      en: "Native speaker. Arabic calligraphy, lettering and typographic design across regional dialects.",
      ar: "لغة أم. الخط العربي والحروف والتصميم الطباعي عبر اللهجات المختلفة.",
    },
  },
  {
    name: { en: "English", ar: "الإنجليزية" },
    level: { en: "Professional Working Proficiency", ar: "كفاءة مهنية للعمل" },
    percent: 82,
    note: {
      en: "Fluent for international client communication and bilingual identity systems. British Cultural Center certified.",
      ar: "طلاقة في التواصل الدولي مع العملاء وأنظمة الهوية ثنائية اللغة. معتمد من المركز الثقافي البريطاني.",
    },
  },
];

export const interests: Bi[] = [
  { en: "Typography & Calligraphy", ar: "الطباعة والخط" },
  { en: "Photography", ar: "التصوير" },
  { en: "Traveling", ar: "السفر" },
  { en: "Creative Writing", ar: "الكتابة الإبداعية" },
  { en: "Fitness & Gym", ar: "اللياقة والجيم" },
];

export type Social = { label: string; href: string; handle: string };

export const socials: Social[] = [
  { label: "Behance", href: "https://www.behance.net/Muhmed-alaa-el-bank", handle: "Muhmed-alaa-el-bank" },
  { label: "Instagram", href: "https://www.instagram.com/muhamedalaaelbank/", handle: "muhamedalaaelbank" },
  { label: "Unsplash", href: "https://unsplash.com/@muhmedelbank", handle: "muhmedelbank" },
  { label: "Facebook", href: "https://www.facebook.com/Ol.YaRaaaB/", handle: "Ol.YaRaaaB" },
];

// The finale — the bridge from "this is who I am" to "this is my work".
export const seal = {
  eyebrow: { en: "THE MARK SPEAKS", ar: "العلامة تتكلّم" },
  line: {
    en: "You've read the person. Now meet the work.",
    ar: "قرأتَ الشخص. الآن قابِل العمل.",
  },
  center: { en: "ENTER THE STUDIO", ar: "ادخل الاستوديو" },
  ring: "LOGO & VISUAL IDENTITY · MUHAMED ALAA · BLACK-MAK® · EST. 2014 · ",
  domain: "black-mak-v4.vercel.app",
};
