export type WorkEntry = {
  role: string;
  org: string;
  period: string;
  location: string;
  roleBullets: string[];
  projectTitle: string;
  projectSubtitle: string;
  projectBullets: string[];
};

export const workEntries: WorkEntry[] = [
  {
    role: "Technical Head — AI, Full Stack & QA",
    org: "TestMySkills.ai · Zyni Innovations",
    period: "Jan 2025 – Present",
    location: "Bangalore, India",
    roleBullets: [
      "Multi-disciplinary founding engineer across AI systems, full-stack development, and quality engineering on a B2C/B2B skill assessment platform with multi-tenant architecture for enterprise clients.",
      "Pioneered Evaluation-Driven Development (EDD): a CI-integrated eval pipeline where known failure cases are stored in a DB and automatically replayed as pre-commit checks — enabling confident feature shipping 95%+ of the time.",
      "Scaled the platform to 24,000+ users with async pipelines, model routing, and fault-tolerant retry/fallback mechanisms.",
      "Led an 8-engineer team — owning architecture (HLD + LLD), sprint execution, and cross-functional delivery.",
    ],
    projectTitle: "TestMySkills.ai — B2C/B2B Skill Assessment Platform",
    projectSubtitle: "Zyni Innovations · Technical Head — AI, Full Stack & QA",
    projectBullets: [
      "AI Systems: architected multi-agent LLM systems using LangGraph with modular, graph-based workflow orchestration for adaptive assessment delivery.",
      "Evaluation-Driven Development: CI-integrated eval pipeline replaying known failure cases as pre-commit checks — 95%+ confident-ship rate.",
      "RAG pipeline: ~90% accuracy via advanced chunking, embedding tuning, and MMR retrieval, monitored with LangSmith.",
      "Semantic search: optimized with PostgreSQL pgvector + HNSW indexing.",
      "Full stack: Next.js frontend, NestJS backend, multi-tenant architecture for enterprise clients.",
    ],
  },
  {
    role: "AI Engineer",
    org: "Zysk Technologies",
    period: "Jun 2024 – Jan 2025",
    location: "Bangalore, India",
    roleBullets: [
      "Built the AI-based Skill Mastery Evaluation System — automated LLM scoring and feedback serving 24,000+ users.",
      "Reduced evaluation latency 80% (5 min → 1 min) through batching and parallel LLM execution.",
      "Built LLM-as-Judge pipelines for hallucination detection and automated output verification at scale.",
      "PushsendAI: personalized product recommendation engine using reinforcement learning and matrix factorization; pilot commended by Veronica Beard (US fashion brand).",
    ],
    projectTitle: "PushsendAI — Intelligent Email Marketing Platform",
    projectSubtitle: "Zysk Technologies · AI Engineer",
    projectBullets: [
      "Designed a personalized product recommendation engine using reinforcement learning and matrix factorization on purchase histories.",
      "Engineered prompt-based email personalization using open-source models for dynamic content generation at scale.",
      "Recommendation system validated and commended by Veronica Beard (US fashion brand) during pilot evaluation.",
    ],
  },
  {
    role: "AI Engineer Intern",
    org: "Zysk Technologies",
    period: "Mar 2023 – Jun 2024",
    location: "Bangalore, India",
    roleBullets: [
      "Developed prompt engineering frameworks for scalable personalized generation across multiple product use cases.",
      "Built structured-output pipelines using schema-constrained prompting prior to native function-calling support in LLM APIs.",
      "Worked on hallucination mitigation strategies and LLM controllability and steering techniques.",
    ],
    projectTitle: "Zyskie — AI-Powered HRMS Platform",
    projectSubtitle: "Zyni Innovations · Product Owner & Lead Engineer · Team of 8 · 2026",
    projectBullets: [
      "Built a full GenAI-powered HRMS covering intelligent hiring, workforce management, and internal talent discovery.",
      "Owned end-to-end system architecture (HLD + LLD + UML) and led technical delivery across the full stack.",
      "Implemented PostgreSQL pgvector with HNSW and MMR for embedding-based semantic search — expert identification, mentor matching, AI-driven team formation.",
      "Deployed open-source models (DeepSeek) via Ollama for cost-effective, privacy-preserving local inference.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Science & Engineering",
  school: "JSS Academy of Technical Education",
  period: "2020 – 2024",
  detail: "CGPA 8.8 / 10.0",
  schooling: "Sri Kumaran Children's Home (ICSE)",
};

export const certifications = [
  { name: "Google Prompting Essentials", issuer: "Google", date: "Nov 2025" },
  { name: "Building Transformer-Based NLP Applications", issuer: "NVIDIA", date: "Oct 2024" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "Nov 2022" },
];

export const awards = [
  {
    title: "Emerging Leader Award",
    year: "2025",
    org: "TestMySkills.ai",
    detail: "Recognized for technical leadership and platform impact.",
    photo: "/photos/awards/emerging-leader-2025.jpg",
  },
  {
    title: "Best Paper Award",
    year: "2024",
    org: "IEEE — Manipal Institute of Technology",
    detail: '"Traffic Control Management System for Emergency Vehicles" — International Conference on Recent Advances in IT for Sustainable Development.',
    photo: "/photos/awards/best-paper-award-2025.jpg",
  },
];

export const publications = [
  {
    title: "Hardware Inventory Management System Using IoT",
    venue: "IEEE",
  },
  {
    title: "Interactive Framework for Querying Data from Large PDFs",
    venue: "IEEE",
  },
  {
    title: "Traffic Control Management System for Emergency Vehicles",
    venue: "Telematique Journal / Web of Science",
  },
];

export const speaking = [
  {
    title: "Keynote Speaker",
    detail:
      "IEEE Student Chapter Inauguration, Bangalore (150+ attendees) — the intersection of GenAI and metacognition in learning and knowledge systems.",
  },
  {
    title: "Prompt Engineering Educator",
    detail:
      "5+ sessions at KSIT, JSS, SJCE Mysore, Presidency University for student and faculty development programs — 30–50 attendees per session.",
    photo: "/photos/speaking/giving-session.jpg",
  },
  {
    title: "Advisory Committee",
    detail:
      "Head of Advisory Committee, Basavanagudi Boys Higher Primary School, since 2019 — “I hold discussions with the principal and the teaching staff to understand the various issues being faced, such as infrastructure issues or student performance issues, and try to give valuable suggestions to improve the overall growth of the institution.”",
    photo: "/photos/charity/teaching-village-kids.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "Sharath's inspiring commitment to sharing knowledge at Basavanagudi Government School left a lasting impression on me. His authentic concern for students' well-being and academic achievements was evident in every aspect of his contributions.",
    name: "Braja Kishore Pradhan",
    context: "on the school advisory work",
    featured: true,
  },
  {
    quote:
      "Sharath has been volunteering to educate young children as a young boy. Teaching children in a Government school in Basavangudi and taking responsibility for improving which is creditable.",
    name: "Dr Shobha Shashidhara",
    context: "Founder & Director, Ankura Foundation",
    featured: true,
  },
  {
    quote:
      "Sharath consistently demonstrated unwavering commitment to his work, managing both academics and projects seamlessly. His dedication to delivering high-quality results on time was truly commendable.",
    name: "Rajkumar Murugesan",
    context: "on the Zysk internship",
  },
  {
    quote:
      "In the initial phase of his internship, he showcased a commendable level of professionalism while presenting the project document. His intelligence and commitment to hard work were clearly evident.",
    name: "S S Prasad",
    context: "Founder & CEO, GRID R&D",
  },
  {
    quote:
      "I could vouch for Sharath: commitment to assigned responsibilities, receptive to problem statements, an exploring and learning mindset, and a positive personality that plays a great impact in team building.",
    name: "Sharath Subramanya",
    context: "Engineering, Ventriks",
  },
];

export type Hobby = {
  name: string;
  copy: string;
  tie: string;
  photo?: string;
};

export const hobbies: Hobby[] = [
  {
    name: "Carnatic flute",
    copy: "Years of disciplined riyaz under a fixed tradition — the opposite of moving fast and breaking things.",
    tie: "Ties to: EDD itself — a practice built on repetition until failure cases stop recurring.",
    photo: "/photos/hobby/flute.jpg",
  },
  {
    name: "Painting",
    copy: "Watercolor — a macaw, layered wash by wash, signed and dated.",
    tie: "Ties to: an unforgiving medium with no undo — correction happens inside the constraint, the same discipline as tuning a RAG pipeline until accuracy holds at ~90%.",
    photo: "/photos/hobby/painting-hobby.jpg",
  },
  {
    name: "Teaching government school children",
    copy: "Teaching concepts to students with no shared jargon to lean on — forces real clarity.",
    tie: "Ties to: explaining LLM systems to non-technical stakeholders, and the prompt-engineering sessions run at KSIT, JSS, SJCE Mysore, and Presidency University.",
    photo: "/photos/charity/teaching-village-kids.jpg",
  },
  {
    name: "Mentoring juniors",
    copy: "Direct extension of leading the 8-engineer team — the individual version of the same instinct.",
    tie: "Ties to: the Emerging Leader Award and Captain of Change Agents recognition — leadership recognized before it was a job title.",
  },
  {
    name: "Gardening",
    copy: "Systems that need tending on a schedule you don't fully control — weather, soil, time.",
    tie: "Ties to: multi-tenant architecture and semantic search that has to keep working as conditions (data, scale, users) shift under it.",
  },
];

export const proofStats = [
  { value: "3+", label: "years building production LLM systems" },
  { value: "24,000+", label: "users served" },
  { value: "8", label: "engineers led" },
];
