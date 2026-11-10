export interface Metric {
  value: string;
  label: string;
  before?: string;
  after?: string;
}

export interface LinkItem {
  label: string;
  url: string;
  isExternal?: boolean;
  isDownload?: boolean;
  note?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  hook: string;
  meta: string;
  chips: string[];
  tags: string[];
  thumbnail?: string;
  featuredNumber?: string;
  featuredNumberLabel?: string;
  isFlagship?: boolean;
  videoUrl?: string;
  metrics: Metric[];
  problem: string;
  timeline?: string[];
  solution: string[];
  builtWith?: string;
  whyRag?: string;
  whatTestersChanged?: { tester?: string; change: string }[];
  evaluationTesting?: string[];
  costAndValue?: string[];
  goToMarket?: string[];
  note?: string;
  links: LinkItem[];
}

export interface EarlierWorkItem {
  title: string;
  period: string;
  badge?: string;
  oneLine: string;
  detailLine?: string;
  thumbnail?: string;
  designedCover?: boolean;
  buttons: LinkItem[];
}

export interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  metrics?: Metric[];
  bullets: string[];
  award?: string;
  isCompact?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  takeaway?: string;
  covers?: string;
  image?: string;
  verifyUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface MusicItem {
  src: string;
  alt: string;
}

export const hero = {
  name: "Bharat Kalra",
  title: "AI-Focused Product Manager",
  headline: "You don't build what your users ask for. You build for the problems they face.",
  subline: "8+ years building digital products across B2B and B2C. Now building AI products end to end, from discovery to delivery to distribution.",
  statusPill: "Open to Product Management roles · B2B / B2C · Mumbai, Pune or Remote · Immediate joining",
  photo: "/images/profile.jpg",
  linkedinUrl: "https://www.linkedin.com/in/pm-bharat-kalra/",
  buttons: [
    { label: "See my work", href: "#work", isExternal: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pm-bharat-kalra/", isExternal: true },
    { label: "Download resume", href: "/docs/resume.pdf", isExternal: true, isDownload: true },
    { label: "Say hello", href: "#contact", isExternal: false },
  ],
  metrics: [
    { value: "8+", label: "years building digital products" },
    { value: "8", label: "total product case studies (4 built in 2026)" },
    { value: "2x", label: "month-on-month traffic, Tata AIA D2C revamp" },
    { value: "₹30 Cr", label: "expected additional revenue, Axis Max Life SME ecosystem" },
  ],
};

export const about = {
  heading: "Communication is the key.",
  leadLine: "What you say, how you say it, how it lands, and how it's acted upon. It all adds up.",
  body: [
    "I believe living in the grey keeps you open, able to hold more than one perspective at once. But it is the binary calls, the clear yes or no, that actually move things forward.",
    "Over 8+ years, I have built and scaled digital products across B2B and B2C, mostly in insurance. The two roles that shaped me most were at Axis Max Life, where I owned partner bank journeys and the SME business insurance ecosystem end to end (expected additional revenue of ₹30 Cr), and Tata AIA, where I led a ground-up D2C platform revamp on the Adobe stack (AEM, Analytics, Target) that doubled traffic and moved engagement and conversion meaningfully. Bharti AXA, in between the two, added a partnerships and B2B lens.",
    "My goal is to build products that genuinely make a difference in someone's life, something with a real point of view rather than another version of what already exists.",
  ],
  threadLine: "Looking back, I keep returning to one idea: people change more easily with the right people beside them. It ran through a Duolingo case study in 2022, a community app in 2023, and People Like Me in 2026.",
  currently: [
    "Researching behavioural science: how habits form, and why changing them is one of the hardest things a person can do.",
    "Completed a certification in Generative and Agentic AI from Saïd Business School, University of Oxford.",
    "Completing a 15-week AI Product Management program with HelloPM (Nov 2026).",
    "A bit of yoga and music in between keeps things balanced.",
  ],
  fiveYearsLine: "Where will I be in five years? Honestly, I do not know; a lot can change. The one thing I am certain of: for the rest of my life, I will always be a student.",
};

export const velocity = {
  heading: "Four products in 2026. Each went further, in less time.",
  items: [
    { project: "Amazon", time: "3 weeks", weeks: 3, scope: "Discovery to clickable prototype" },
    { project: "Claude", time: "2 weeks", weeks: 2, scope: "Discovery to clickable prototype" },
    { project: "Agent Copilot (RAG)", time: "1.5 weeks", weeks: 1.5, scope: "AI system design, evals and cost, tested build" },
    { project: "People Like Me", time: "1 week", weeks: 1, scope: "Discovery, delivery and distribution: a live product" },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "people-like-me",
    title: "People Like Me",
    hook: "Don't switch careers alone. A live product matching career switchers with a guide who made the same move, and a small pod making it with them.",
    meta: "2026 · 1 week · Discovery, delivery and distribution",
    isFlagship: false,
    chips: [
      "12 of 13 couldn't find people like them",
      "4 user tests",
      "Live app",
    ],
    tags: ["Discovery", "Delivery", "Distribution", "Gemini API"],
    thumbnail: "/images/thumb-people-like-me.jpg",
    metrics: [
      {
        value: "12 of 13",
        label: "couldn't find people in their field going through the same thing, or someone senior",
      },
      {
        value: "11 of 13",
        label: "struggled most with staying motivated or reaching the right people",
      },
      {
        value: "6 of 8",
        label: "switchers didn't know where to start (0 of 5 long job hunters said so)",
      },
      {
        value: "11 of 13",
        label: "already spent money on support",
      },
    ],
    problem:
      "Career switchers can't reach people who have already made the same move. Without them, they don't know where to start, lose motivation through weeks of rejection, and give up before they switch. (Source: 4 face-to-face interviews and 13 survey responses.)",
    timeline: [
      "Discovery: 4 interviews and a 13-person survey",
      "P0 chosen with Population, Intensity, Frequency scoring",
      "Five Whys to the root cause",
      "12 ideas, 5 shortlisted, scored with RICE",
      "A three-layer solution",
      "PRD",
      "Live web app",
      "Walkthroughs with 4 early users",
      "Go-to-market plan",
    ],
    solution: [
      "A three-layer stack. Foundation: move-based matching that turns a switcher's own story and CV into a profile of their move.",
      "Middle: a Career Guide who made the same move (weekly 30-minute conversation) and a pod of 4 to 6 people at the same stage (twice a week), for eight weeks.",
      "Top: an accountability loop, with weekly goals the guide and pod can see and a real person reaching out when someone slips.",
    ],
    builtWith: "React, TypeScript, Supabase, a Node server and the Gemini API, deployed from GitHub to Render.",
    whatTestersChanged: [
      { tester: "Charu", change: "Onboarding felt long → fewer, merged questions with options." },
      { tester: "Astha", change: "Couldn't see pod members → pod member profiles." },
      { tester: "Arjun", change: "Landed on the full plan, not their progress → a progress-first dashboard." },
      { tester: "Karthik", change: "Couldn't tell why a match fit → a \"Why this match\" panel." },
    ],
    goToMarket: [
      "Pilot first (one month, hand-matched pods, free vs small fee), then a small launch, then new segments.",
      "The app stays unpromoted until the pilot proves demand.",
    ],
    links: [
      {
        label: "Live app",
        url: "https://peoplelikeme-z5gi.onrender.com/",
        isExternal: true,
        note: "Click Find my people, then Demo login. The app may take up to a minute to wake up.",
      },
      {
        label: "Case study",
        url: "/docs/people-like-me-case-study.pdf",
        isExternal: true,
      },
      {
        label: "Deck",
        url: "/docs/people-like-me-deck.pdf",
        isExternal: true,
      },
    ],
  },
  {
    slug: "agent-copilot",
    title: "Agent Copilot",
    hook: "A RAG assistant giving life insurance agents source-backed answers in seconds, with expert handoff when unsure.",
    meta: "2026 · 1.5 weeks · AI product design, RAG, evals",
    chips: [
      "8 to 10 min → under 10 sec (target)",
      "₹0.65 per query",
      "0.95 faithfulness target",
    ],
    tags: ["RAG", "Evals", "AI system design", "Cost model"],
    thumbnail: "/images/thumb-agent-copilot.jpg",
    metrics: [
      {
        value: "8 to 10 min",
        label: "today's wait for an answer, via supervisors and trainers",
      },
      {
        value: "Under 10 sec",
        label: "target median time to answer",
      },
      {
        value: "0.95",
        label: "faithfulness target; 0.8 precision at 5",
      },
      {
        value: "₹0.65",
        label: "cost per query, self-hosted in India (₹2.94 lakh a month)",
      },
    ],
    problem:
      "Agents need accurate answers in the middle of a client conversation. Today the answer arrives through supervisors and trainers, about 8 to 10 minutes later, and that wait costs credibility and sometimes the deal. A supervisor of a 10-agent team spends about 10 to 13.5 hours a week on these questions.",
    whyRag:
      "Compared four options: better prompting, fine-tuning, RAG and more training. RAG retrieves from current documents, cites the passage, filters by channel and policy version, updates by re-indexing, and escalates when nothing relevant is found.",
    solution: [
      "Hybrid keyword and vector search (top 30) re-ranked to 5.",
      "A confidence gate that asks one clarifying question or hands off to an expert with a summary.",
      "An India-hosted open-weight model.",
      "Role-based permissions applied before retrieval.",
      "Full query logging so a bad answer can be traced to its cause.",
    ],
    evaluationTesting: [
      "An 8-question golden set replayed before every release, including adversarial cases.",
      "Tested in a Claude Project: the copilot matched expected behaviour, with honest misses logged (two FlexiPay conditions missed, likely a chunking issue in a two-column brochure).",
    ],
    costAndValue: [
      "About ₹29 per licensed agent per month; platform cost is roughly 1.3 to 1.8% of the supervisor time it could free.",
    ],
    links: [
      {
        label: "Live demo",
        url: "https://732b50f2-0c62-4565-9e80-2aa3c8aa7106-00-37hmb3jknh02u.sisko.replit.dev/agent-copilot/",
        isExternal: true,
      },
      {
        label: "PRD",
        url: "/docs/agent-copilot-prd.pdf",
        isExternal: true,
      },
    ],
  },
  {
    slug: "claude",
    title: "Claude: Trust That Survives Every Revision",
    hook: "Why heavy users stop trusting their own revision loop in Claude, and a diff-and-decide fix inside Artifacts.",
    meta: "2026 · 2 weeks · Discovery to clickable prototype",
    chips: [
      "18 of 26 re-prompt instead of partially accepting",
      "26 survey + 3 interviews",
    ],
    tags: ["Research", "PIF scoring", "RICE", "Prototype", "PRD"],
    featuredNumber: "18 of 26",
    featuredNumberLabel: "re-prompt instead of partially accepting",
    metrics: [
      {
        value: "18 of 26",
        label: "re-prompt for a targeted change rather than partially accepting a revision",
      },
      {
        value: "17 of 26",
        label: "revise the same output 5+ times a month",
      },
      {
        value: "12 of 26",
        label: "read new versions manually to spot what changed",
      },
      {
        value: "14 vs 10",
        label: "PIF score of the chosen problem vs the runner-up",
      },
    ],
    problem:
      "Heavy multi-tool users who iterate on real work cannot see what changed between revisions, and cannot keep some changes while rejecting others. So they re-read everything or re-prompt and re-verify, and increasingly do the high-value parts themselves.",
    timeline: [
      "Explored Claude feature by feature",
      "5 candidate pain points",
      "Survey (26) and 3 interviews",
      "PIF scoring",
      "Five Whys",
      "10 ideas scored with RICE",
      "Clickable prototype (desktop and mobile)",
      "PRD",
    ],
    solution: [
      "One capability inside Artifacts: every revision renders as a section-level diff, each changed section gets Keep new / Keep old, and a version history makes any past version one click from being restored.",
    ],
    links: [
      {
        label: "Full case study",
        url: "https://claudecasestudypm.netlify.app/",
        isExternal: true,
      },
      {
        label: "Prototype (desktop)",
        url: "https://claudecasestudypm.netlify.app/version-diff-prototype.html",
        isExternal: true,
      },
      {
        label: "Prototype (mobile)",
        url: "/docs/claude-mobile-prototype.html",
        isExternal: true,
      },
      {
        label: "PRD",
        url: "/docs/claude-prd.pdf",
        isExternal: true,
      },
    ],
  },
  {
    slug: "amazon",
    title: "Amazon: The Trust Gap",
    hook: "Winning the moment of doubt: rebuilding pre-purchase trust, from behavioural signals to an in-app assistant.",
    meta: "2026 · 3 weeks · Discovery to clickable prototype",
    chips: [
      "90% of those stuck at the trust stage abandoned or switched",
      "Only 13% knew Rufus exists",
    ],
    tags: ["Research", "5 Whys", "RICE", "2 prototypes", "PRD"],
    featuredNumber: "90%",
    featuredNumberLabel: "abandoned or switched at trust stage",
    metrics: [
      {
        value: "73%",
        label: "named product quality or fit as a top-two concern",
      },
      {
        value: "50%",
        label: "named the trust decision as their biggest friction; 90% of them abandoned or switched platforms",
      },
      {
        value: "13%",
        label: "knew Rufus exists",
      },
      {
        value: "50%",
        label: "received a fake or below-par product in the last six months",
      },
    ],
    problem:
      "Price-sensitive, brand-conscious shoppers hit a wall of doubt at the buying moment, leave Amazon to verify elsewhere, and half of them abandon or switch platforms.",
    solution: [
      "Phase 1: a Seller Trust Signal and a Product Longevity Signal built from behaviour Amazon already tracks.",
      "Phase 2: a Genuine Product Check and a contextual Rufus that answers at the moment of doubt.",
      "Phase 3: Try and Buy for apparel, only if the earlier phases prove trust drives conversion.",
    ],
    links: [
      {
        label: "Full case study",
        url: "https://amazoncasestudybkpm.netlify.app/",
        isExternal: true,
      },
      {
        label: "Phase 1 prototype",
        url: "https://phase1prototype.netlify.app/",
        isExternal: true,
      },
      {
        label: "Phase 2 prototype",
        url: "https://phase2rufus.netlify.app/",
        isExternal: true,
      },
      {
        label: "PRD",
        url: "/docs/amazon-prd.pdf",
        isExternal: true,
      },
    ],
  },
];

export const earlierWork: EarlierWorkItem[] = [
  {
    title: "Social 19",
    period: "2023",
    oneLine: "A community and events app for organisers and attendees, inspired by post-Covid isolation. Built in about 1.5 months with no-code tools.",
    detailLine: "Discovery at real Meetup events, interviews and a survey; benchmarked against Meetup, Eventbrite and BookMyShow; two personas, a three-phase roadmap, Figma designs, a working Adalo MVP and a 7-case test log.",
    thumbnail: "/images/thumb-social19.jpg",
    buttons: [
      {
        label: "Figma designs",
        url: "https://www.figma.com/design/1xJf6XegNJbzW6y14tIUov/Social-19?node-id=0-1",
        isExternal: true,
      },
      {
        label: "App (sign-up required)",
        url: "https://previewer.adalo.com/84ab513b-ac5d-45d7-8213-986ce34a0347",
        isExternal: true,
      },
      {
        label: "Deck",
        url: "/docs/social19-deck.pdf",
        isExternal: true,
      },
    ],
  },
  {
    title: "Mind Journal",
    period: "early no-code build",
    oneLine: "A journaling app built while teaching myself no-code tools: feature spec, four-phase roadmap, data model and a working Adalo MVP.",
    thumbnail: "/images/mind-journal-home.jpg",
    buttons: [
      {
        label: "App (sign-up required)",
        url: "https://previewer.adalo.com/7c023920-9c81-4136-b485-5b8da055f63f",
        isExternal: true,
      },
    ],
  },
  {
    title: "JioSaavn Ads, campaign analytics",
    period: "2022, B2B",
    oneLine: "A B2B dashboard for JioSaavn's ad campaign managers, so they can track campaigns and build client reports without waiting on analytics teams.",
    detailLine: "Interviews with 6 campaign managers and clients, a persona, a user journey and a clickable Figma prototype. Community assignment.",
    designedCover: true,
    buttons: [
      {
        label: "Prototype",
        url: "https://www.figma.com/proto/yFjBmp3FQNCSpObUqON0oG/JioSaavn?node-id=1%3A6&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A6",
        isExternal: true,
      },
      {
        label: "Case study",
        url: "/docs/jiosaavn-case-study.pdf",
        isExternal: true,
      },
    ],
  },
  {
    title: "Duolingo, learning with real people",
    period: "2022",
    oneLine: "A feature to help learners practise with real people: a \"Gang Leaderboard\" for small-group learning with shared rewards.",
    detailLine: "A survey of 16 and 5 interviews, benchmarking against HelloTalk, Drops and Memrise, two personas and a pilot plan.",
    designedCover: true,
    buttons: [
      {
        label: "Deck",
        url: "/docs/duolingo-deck.pdf",
        isExternal: true,
      },
    ],
  },
];

export const experience: ExperienceRole[] = [
  {
    title: "AI Upskilling & Independent Product Building",
    company: "Independent",
    period: "Feb'26 – Present",
    bullets: [
      "Certified in Generative and Agentic AI, Saïd Business School, University of Oxford (Coursera, Aug'26).",
      "15-week AI Product Management program with HelloPM (system architecture, evals, AI agents, buildathon), completing Nov'26, while building the four case studies above.",
    ],
  },
  {
    title: "Senior Product Manager, Bancassurance",
    company: "Axis Max Life Insurance",
    period: "Feb'24 – Jan'26",
    metrics: [
      { value: "43% → 48%", label: "Seller activation" },
      { value: "↓60%", label: "Onboarding TAT" },
      { value: "↑30%", label: "NPS" },
      { value: "↓80%", label: "Verification complaints" },
      { value: "₹30 Cr", label: "expected additional revenue" },
    ],
    bullets: [
      "Created the product roadmap, end-to-end solutioning and product delivery for partner bank journeys.",
      "Product owner for a tool to digitise the seller hierarchy, lifting partner seller activation from 43% to 48%.",
      "Product owner for the SME Business Insurance ecosystem: presales (a 2-minute pitching tool), onboarding (TAT ↓60%), post-sales (NPS ↑30%) and a Rural Business Journey.",
      "Launched a POSV portal for sellers, reducing verification-level complaints by 80%.",
      "Built a 360° portfolio view for Burgundy (premium) clients, enabling personalised, insight-driven advisor recommendations.",
    ],
  },
  {
    title: "Senior Manager, Digital Partnership",
    company: "Bharti AXA Life Insurance",
    period: "Dec'22 – Sep'23",
    metrics: [
      { value: "+50%", label: "Group product lead generation" },
    ],
    bullets: [
      "Grew B2B partnerships: onboarding, product propositions, integrations, go-lives, GTM and sales initiatives.",
      "Increased lead generation for Group products by 50% by revamping the customer journey and funnel.",
    ],
  },
  {
    title: "Product Manager, D2C Channel",
    company: "Tata AIA Life Insurance",
    period: "May'19 – Dec'22",
    metrics: [
      { value: "2x", label: "month-on-month traffic" },
      { value: "+50%", label: "lead gen" },
      { value: "+40%", label: "digital transactions" },
      { value: "6-7s → 2-3s", label: "Page load" },
      { value: "45 → 54", label: "NPS" },
      { value: "40+", label: "A/B tests" },
    ],
    bullets: [
      "Product discovery, BRD creation, vendor and commercials evaluation, POC, business case, user stories and SDLC sign-offs to go-live.",
      "Led the D2C e-commerce website and customer portal revamp on the Adobe stack, from scratch: 201 pages, 1.9mn users; doubled month-on-month traffic, +50% lead gen, +40% digital transactions; page load 6-7s to 2-3s; NPS 45 to 54 in 5 months.",
      "Implemented 40+ A/B testing and personalisation use cases (Analytics + Target): +20% leads, ₹5L a month added benefit.",
      "Implemented kiosk self-service journeys in 100 branches, lifting the self-service rate from 60% to 90%.",
      "Drove a microservice architecture for payment integration: +20% digital payments.",
    ],
    award: "R1 top category performance rating.",
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    period: "May'15 – May'16",
    isCompact: true,
    bullets: [
      "QA and optimisation of a website and application across 50 countries, mainly APAC, for an insurance client (Java, Selenium).",
    ],
  },
  {
    title: "Techno Commercial Engineer",
    company: "Sicher Systems & Solutions",
    period: "Aug'14 – Apr'15",
    isCompact: true,
    bullets: [
      "Installation and AMC for security products; site engineering, lead generation and revenue growth for IP and analog cameras.",
    ],
  },
];

export const skills = {
  ai: ["LLMs", "RAG", "Agentic AI", "Evals", "Prompt engineering"],
  product: ["Discovery", "PRDs", "Roadmaps", "A/B testing", "Funnel optimisation", "Partner integrations"],
  tech: ["CMS (AEM)", "Adobe Analytics & Target", "Google Analytics", "System design", "APIs", "SEO", "SQL", "Python", "React", "Figma", "Jira"],
  also: "Business acumen: analysed claims data to detect fraud, saving 50 lakhs. Led 8+ vendor teams across SDLC stages. Drove Figma adoption for prototyping.",
};

export const learning: CertificationItem[] = [
  {
    title: "Generative and Agentic AI",
    issuer: "Saïd Business School, University of Oxford (via Coursera)",
    period: "Aug 2026",
    takeaway: "Beyond LLMs, RAG, agentic workflows and prompt engineering, the real lesson was where human judgement must stay in the loop, however capable the AI gets.",
    image: "/images/cert-oxford.jpg",
    verifyUrl: "https://coursera.org/verify/D3YJYFEL83ZA",
  },
  {
    title: "AI Product Management (15 weeks)",
    issuer: "HelloPM",
    period: "completing Nov 2026",
    covers: "discovery, strategy and PRDs, GenAI building blocks, AI system architecture and RAG, AI agents and MCP, evals, AI product experience design, the business of AI, and a buildathon.",
  },
  {
    title: "Sthapna Course",
    issuer: "Kaivalyadhama Yoga Institute",
    period: "2026",
    takeaway: "Yoga is not just flexibility or fitness. It is a broader discipline of working with the body, breath, mind and awareness: asana, pranayama, kriyas, meditation, ashtanga yoga and yogic philosophy.",
    verifyUrl: "https://www.kdhamstudy.com/courses/Sthapna-course",
  },
  {
    title: "Finance for Non-Finance Professionals",
    issuer: "Rice University (via Coursera)",
    period: "Oct 2017",
    image: "/images/cert-rice.jpg",
    verifyUrl: "https://coursera.org/verify/82QGNVUQN5JP",
  },
];

export const education: EducationItem[] = [
  {
    degree: "PGDM (Banking & Financial Services)",
    institution: "International Management Institute, New Delhi",
    period: "Jun'17 – Apr'19",
  },
  {
    degree: "B.Tech (Computer Science)",
    institution: "GGSIPU, New Delhi",
    period: "Aug'10 – Jun'14",
  },
];

export const music = {
  heading: "On stage",
  text: "I sing and play the guitar, mostly at music recitals and the occasional gig. Grade 2 in classical guitar. The stage still scares me a little, and that is exactly why I keep going back.",
  pullQuote: "Nobody is thinking about us as much as we think they are. And perhaps, that's all the freedom we need to keep going.",
  gallery: [
    { src: "/images/music-voice-of-words.jpg", alt: "Bharat Kalra singing and playing acoustic guitar at Voice of Words recital" },
    { src: "/images/music-band.jpg", alt: "Bharat Kalra singing with live band on stage" },
    { src: "/images/music-guitar-stage.jpg", alt: "Bharat Kalra acoustic guitar performance on stage" },
    { src: "/images/music-duet-1.jpg", alt: "Bharat Kalra vocal duet on stage with microphone" },
    { src: "/images/music-duet-2.jpg", alt: "Bharat Kalra singing in vocal duet stage performance" },
  ],
};

export const community = {
  heading: "In the room",
  text: "I show up at product meetups to learn from people further along. One reflection from a HelloPM meetup: every problem leads to solutions, which lead to a newer set of problems waiting to be solved. Social media connected the world and created isolation; AI removed redundant work and created deepfakes. There might be nothing new under the sun, until you double-click.",
  image: "/images/hellopm-meetup.jpg",
  imageAlt: "HelloPM community product meetup group in the room",
  also: "Toastmasters (2016): six months of prepared speeches and impromptu 1-minute rounds.",
};

export const quotes: string[] = [
  "You don't build what your users ask for. You build for the problems they face.",
  "What they say, how they behave, and what they act on. All of them add up.",
  "The originality of your thought lies not in what you read, but in how you perceive it, question it and reflect on it.",
  "Remember to repeat; repeat to remember.",
  "Developing patience demands patience, which in itself demands a lot of patience.",
  "In the age of AI, our ability to stay in the conversation may be the new measure of focus.",
];

export const writingAndInterests = {
  substackUrl: "https://open.substack.com/pub/bharatkalra",
  items: [
    {
      title: "Substack",
      label: "Personal reflections.",
      url: "https://open.substack.com/pub/bharatkalra",
      tag: "Writing",
      icon: "substack",
    },
    {
      title: "AR/VR Blog",
      label: "Started a blog on AR/VR in 2017.",
      year: "2017",
      tag: "Spatial Tech",
      icon: "blog",
    },
    {
      title: "Tennis & Mental Health",
      label: "Tennis is a fairly permanent fixture in my week. I actively read about the mental health space and the startups innovating within it.",
      tag: "Interests",
      icon: "activity",
    },
  ],
};

export const contact = {
  heading: "Let's talk product, AI, or music.",
  line: "Do reach out for a role, a question, or just a casual conversation on product and AI.",
  email: "bharatk6325@gmail.com",
  phone: "+91 99538 60542",
  phoneDisplay: "+91 99538 60542",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/pm-bharat-kalra/" },
    { label: "GitHub", url: "https://github.com/Bharatkalra-PM" },
    { label: "Substack", url: "https://open.substack.com/pub/bharatkalra" },
  ],
};

export const footer = {
  line2: "© 2026 Bharat Kalra",
};
