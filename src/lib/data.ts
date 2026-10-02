export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Technical Head — AI, Full Stack & QA",
    org: "TestMySkills.ai · Zyni Innovations",
    period: "2025 — Present",
    summary:
      "Founding engineer across AI systems, full-stack and quality engineering on a multi-tenant B2C/B2B skill-assessment platform. Pioneered Evaluation-Driven Development, scaled the platform to 24,000+ users with async pipelines, model routing and fault-tolerant fallbacks, and lead an 8-engineer team owning architecture (HLD + LLD) and delivery.",
    tags: ["LangGraph", "RAG", "LangSmith", "pgvector", "Next.js", "NestJS", "PostgreSQL"],
  },
  {
    role: "AI Engineer",
    org: "Zysk Technologies",
    period: "2024 — 2025",
    summary:
      "Built the AI-based Skill Mastery Evaluation System — automated LLM scoring and feedback for 24,000+ users — and cut evaluation latency 80% with batching and parallel LLM execution. Built LLM-as-Judge pipelines for hallucination detection, and the recommendation engine behind PushsendAI.",
    tags: ["LLM-as-Judge", "Parallel inference", "Reinforcement learning", "Matrix factorization"],
  },
  {
    role: "AI Engineer Intern",
    org: "Zysk Technologies",
    period: "2023 — 2024",
    summary:
      "Built prompt-engineering frameworks for personalized generation, and structured-output pipelines using schema-constrained prompting — before native function calling existed in most LLM APIs. Worked on hallucination mitigation and LLM steering.",
    tags: ["Prompt engineering", "Structured outputs", "Hallucination mitigation"],
  },
  {
    role: "Frontend Engineer Intern",
    org: "Ventriks",
    period: "2023",
    summary:
      "Built and maintained frontend features for scalable web applications, working directly under the engineering lead.",
    tags: ["Frontend", "Web applications"],
  },
];

export type Project = {
  name: string;
  kind: string;
  metric: string;
  metricLabel: string;
  summary: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "TestMySkills.ai",
    kind: "Adaptive skill-assessment platform",
    metric: "95%+",
    metricLabel: "of features shipped with confidence, gated by EDD",
    summary:
      "Multi-agent LLM system on LangGraph with graph-based orchestration for adaptive assessments. RAG pipeline tuned to ~90% accuracy through chunking, embedding tuning and MMR retrieval, monitored in LangSmith; semantic search on pgvector with HNSW indexing.",
    tags: ["LangGraph", "RAG", "MMR", "LangSmith", "pgvector"],
  },
  {
    name: "Skill Mastery Evaluation",
    kind: "Automated LLM scoring at scale",
    metric: "80%",
    metricLabel: "faster evaluations — 5 min down to 1 min",
    summary:
      "Automated LLM scoring and feedback for 24,000+ users, with LLM-as-Judge pipelines for hallucination detection and output verification. Latency cut through request batching and parallel LLM execution.",
    tags: ["LLM-as-Judge", "Batching", "Evaluation"],
  },
  {
    name: "Zyskie",
    kind: "GenAI-powered HRMS",
    metric: "8",
    metricLabel: "engineers, as product owner and lead engineer",
    summary:
      "Hiring, workforce management and internal talent discovery. Embedding-based semantic search (pgvector, HNSW, MMR) powers expert identification, mentor matching and AI-driven team formation; DeepSeek runs locally via Ollama for private, low-cost inference.",
    tags: ["pgvector", "HNSW", "Ollama", "DeepSeek"],
  },
  {
    name: "PushsendAI",
    kind: "Intelligent email marketing",
    metric: "Pilot",
    metricLabel: "recommendations commended by Veronica Beard",
    summary:
      "Personalized product recommendations using reinforcement learning and matrix factorization on purchase histories, plus prompt-based email personalization with open-source models.",
    tags: ["Reinforcement learning", "Recommenders", "Open-source LLMs"],
  },
];

export const openSource = [
  {
    name: "rag-pipeline-demo",
    summary: "Hybrid-search RAG: BM25 + embeddings + MMR re-ranking, with a retrieval eval harness.",
    tags: ["LangChain", "BM25", "MMR"],
  },
  {
    name: "langgraph-multi-agent-demo",
    summary: "A planner agent delegating to tool-using sub-agents, with explicit graph state.",
    tags: ["LangGraph", "Agents"],
  },
  {
    name: "mcp-tool-server",
    summary: "A custom Model Context Protocol server exposing typed tools to MCP clients.",
    tags: ["MCP", "Python"],
  },
  {
    name: "claude-agent-skills",
    summary: "Agent skills for RAGAS eval runs, LangGraph flow debugging and SQL schema review.",
    tags: ["Agent Skills", "RAGAS"],
  },
  {
    name: "fullstack-auth-starter",
    summary: "JWT auth with refresh rotation, role-based access and tenant isolation.",
    tags: ["Next.js", "NestJS", "JWT"],
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
    title: "Employee of the Year — Nominee",
    year: "2025",
    org: "Zysk Technologies",
    detail: "Nominated for Zysk's Employee of the Year 2025.",
    photo: "/photos/awards/nominee-employee-of-the-year-2025.jpg",
  },
  {
    title: "Best Paper Award",
    year: "2024",
    org: "IEEE — Manipal Institute of Technology",
    detail: '"Traffic Control Management System for Emergency Vehicles" — International Conference on Recent Advances in IT for Sustainable Development.',
    photo: "/photos/awards/best-paper-award-2025.jpg",
  },
];

export const changeAgents = {
  role: "CEO, Change Agents Committee",
  org: "Zysk Technologies",
  summary:
    "Led a team of 12+ members heading three committees — wellbeing, technology and strategy. Under my leadership we released Merged and Deployed, the first-ever magazine for the Zysk organisation.",
  stats: [
    { value: "12+", label: "members led" },
    { value: "3", label: "committees" },
    { value: "1st", label: "Zysk magazine" },
  ],
  committees: ["Wellbeing", "Technology", "Strategy"],
  magazine: "Merged and Deployed",
  photo: "/photos/achivements/change-agents/change-agents-meeting-leading-as-a-captain.jpg",
};

export const mentorship = {
  title: "Mentoring student teams",
  summary:
    "Sitting across the table from student teams as they pitch and demo what they have built — listening first, then pushing on the details that decide whether an idea survives contact with real users.",
  photos: [
    { src: "/photos/mentorship/team-1.jpg", alt: "A student presents her team's project to Sharath while teammates look on" },
    { src: "/photos/mentorship/team-2.jpg", alt: "Sharath listens as a student team walks him through their idea" },
    { src: "/photos/mentorship/team-3.jpg", alt: "A team crowds around Sharath's desk to review their build on a laptop and phone" },
  ],
};

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
    copy: "I play Carnatic flute, a tradition learned through years of riyaz inside a fixed form. Each session is the same phrase, played again until it stops slipping — the opposite of moving fast and breaking things.",
    tie: "It's the instinct behind Evaluation-Driven Development: repeat until the failure case stops recurring, then make the repetition automatic.",
    photo: "/photos/hobby/flute.jpg",
  },
  {
    name: "Painting",
    copy: "I paint in watercolor, a medium with no undo. The macaw here was built up wash by wash, then signed and dated.",
    tie: "Correcting inside a constraint like that is the same discipline as tuning a RAG pipeline until accuracy holds at ~90%.",
    photo: "/photos/hobby/painting-hobby.jpg",
  },
  {
    name: "Teaching government school children",
    copy: "Since 2019 I've headed the advisory committee at Basavanagudi Boys Higher Primary School, and I teach its children directly. There's no shared jargon to lean on in that courtyard, so an explanation either lands or it doesn't.",
    tie: "That's the bar I hold when explaining LLM systems to non-technical stakeholders, and in prompt-engineering sessions at KSIT, JSS, SJCE Mysore, and Presidency University.",
    photo: "/photos/charity/teaching-village-kids.jpg",
  },
  {
    name: "Mentoring juniors",
    copy: "Mentoring juniors is the one-to-one version of leading my 8-engineer team. It was recognized before it was a job title — first as CEO of the Change Agents committee at Zysk, later with the Emerging Leader Award.",
    tie: "The work is the same at either scale: hand things off well enough that they hold without you.",
  },
  {
    name: "Gardening",
    copy: "I garden, which means tending a system on a schedule I don't fully control — weather, soil, time. What I plant is only half the result; what the conditions do to it is the other half.",
    tie: "It's the mindset behind multi-tenant architecture and semantic search that has to keep working as data, scale, and users shift under it.",
  },
];

export const proofStats = [
  { value: "3+", label: "years shipping LLM systems" },
  { value: "24,000+", label: "users served" },
  { value: "8", label: "engineers led" },
];
