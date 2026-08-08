export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  response: string;
  outcome: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  principles: string[];
  repository?: string;
  accent: "cyan" | "indigo" | "violet" | "amber";
};

export const projects: Project[] = [
  {
    slug: "enterprise-conversational-ai",
    title: "Enterprise Conversational AI",
    eyebrow: "Leadership · GenAI · Production systems",
    summary:
      "Technical leadership for a high-scale employee conversational AI platform, spanning retrieval, orchestration, integrations, production controls, and engineering enablement.",
    challenge:
      "Enterprise assistants must route ambiguous language, ground answers in governed knowledge, complete actions through trusted integrations, and fail safely—all while meeting strict reliability and risk expectations.",
    response:
      "I guide reusable patterns for retrieval and intent routing, agentic orchestration, API integration, escalation, testing, observability, and production readiness across multiple engineering domains.",
    outcome:
      "The platform supports 200,000+ employees and 100,000+ monthly interactions. Public résumé results include 30%+ fewer live escalations per topic, 20%+ fewer incident tickets, and lower latency and hallucination rates.",
    role: "Vice President, Software Engineer II · Development Lead",
    status: "Ongoing enterprise program",
    stack: [
      "GenAI",
      "RAG",
      "Agentic orchestration",
      "Groovy / Java",
      "REST APIs",
      "Observability",
    ],
    highlights: [
      "Selected as one of four development leads in an approximately 50-person organization",
      "Architecture guidance across retrieval, routing, integrations, controls, and escalation",
      "Design reviews, production-readiness decisions, reusable engineering patterns, and mentorship",
    ],
    principles: [
      "Grounded answers",
      "Safe routing",
      "Observable decisions",
      "Human escalation",
    ],
    accent: "cyan",
  },
  {
    slug: "cleanshare-pro",
    title: "CleanShare Pro",
    eyebrow: "Privacy engineering · Cross-platform",
    summary:
      "A privacy-first tool that finds sensitive information in images and documents, supports human review and redaction, and exports sanitized copies with metadata removed.",
    challenge:
      "Screenshots, photos, and PDFs are easy to share before noticing emails, phone numbers, payment details, access tokens, or identifying metadata embedded in them.",
    response:
      "I designed a modular detection and sanitization pipeline with separate UI, core logic, WebAssembly helpers, native bridges, and a batch-development CLI inside a pnpm monorepo.",
    outcome:
      "The functional prototype demonstrates a review-first privacy workflow across web and mobile surfaces without pretending detection is infallible or silently changing source files.",
    role: "Creator · Product and engineering",
    status: "Functional prototype",
    stack: [
      "Next.js",
      "TypeScript",
      "Capacitor",
      "WebAssembly",
      "OCR / PII detection",
      "pnpm",
    ],
    highlights: [
      "Detects common PII and credential-like patterns across images and PDFs",
      "Keeps the user in control of redaction and obfuscation decisions",
      "Exports a sanitized copy while stripping shareable metadata",
    ],
    principles: [
      "Review before action",
      "Local-first options",
      "Non-destructive exports",
      "Transparent confidence",
    ],
    repository: "https://github.com/cnaples79/CleanShare-Pro",
    accent: "indigo",
  },
  {
    slug: "ai-calendar",
    title: "AI Calendar",
    eyebrow: "Conversational actions · Desktop application",
    summary:
      "A calendar application that turns natural-language requests into explicit, reviewable event actions while retaining complete manual CRUD workflows.",
    challenge:
      "Natural-language scheduling is useful only when model responses can be translated into deterministic actions without losing the reliability of a traditional calendar interface.",
    response:
      "I built a Groovy and JavaFX desktop experience with monthly and daily views, manual event management, a chat surface, action parsing, validation, and real-time UI refreshes.",
    outcome:
      "The prototype supports conversational creation, updates, and deletion alongside standard calendar controls, making the AI layer additive instead of mandatory.",
    role: "Creator · Application architecture and implementation",
    status: "Desktop prototype",
    stack: [
      "Groovy",
      "JavaFX",
      "Gradle",
      "OpenRouter",
      "Apache HttpClient",
      "Structured actions",
    ],
    highlights: [
      "Parses embedded create, update, and delete actions from conversational responses",
      "Preserves manual event CRUD and detailed daily timeline views",
      "Validates event data and gives clear feedback before updating the calendar",
    ],
    principles: [
      "Deterministic actions",
      "Manual fallback",
      "Input validation",
      "Immediate feedback",
    ],
    repository: "https://github.com/cnaples79/CalendarApp",
    accent: "violet",
  },
  {
    slug: "codecap",
    title: "CodeCap",
    eyebrow: "Developer tooling · Desktop productivity",
    summary:
      "An Electron desktop MVP for capturing code or text from any application, extracting it with OCR, and organizing it in a searchable local library.",
    challenge:
      "Important code, acceptance criteria, and troubleshooting notes often live inside meetings, remote desktops, screenshots, or tools where copying clean text is difficult.",
    response:
      "I designed a system-tray workflow with region capture, OCR, review, categories, local SQLite storage, search, clipboard actions, privacy settings, and optional AI extension points.",
    outcome:
      "The MVP proves a fast capture-to-library flow while clearly scoping AI summaries, collaboration, and cloud sync as extension points rather than overstating unfinished capabilities.",
    role: "Creator · Product architecture and Electron MVP",
    status: "Electron MVP",
    stack: [
      "Electron",
      "TypeScript",
      "OCR",
      "SQLite",
      "Desktop capture",
      "Local search",
    ],
    highlights: [
      "Global-hotkey region capture with review before saving",
      "Local categorization and search across titles, content, and tags",
      "Privacy controls for raw images and future AI-provider integration",
    ],
    principles: [
      "Local library",
      "Fast capture",
      "Privacy controls",
      "Extensible providers",
    ],
    repository: "https://github.com/cnaples79/codecap-desktop_mvp",
    accent: "amber",
  },
];

export const additionalProjects = [
  {
    title: "Computer Vision Safety Pipeline",
    description:
      "YOLOv5 and SlowFast proof of concept for object and activity detection, with threshold tuning and post-processing to reduce false positives.",
    href: "https://github.com/cnaples79/Vision-AI-Projects",
    stack: "Python · PyTorch · YOLOv5 · SlowFast",
  },
  {
    title: "Fleet Management",
    description:
      "A full-stack vehicle operations application exploring typed Next.js workflows and PostgreSQL-backed records.",
    href: "https://github.com/cnaples79/fleet-management-app",
    stack: "Next.js · TypeScript · PostgreSQL",
  },
  {
    title: "BudgetCraft",
    description:
      "A personal budgeting application focused on clear transaction, category, and planning workflows.",
    href: "https://github.com/cnaples79/BudgetCraft3",
    stack: "Next.js · TypeScript",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
