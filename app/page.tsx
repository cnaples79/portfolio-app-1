import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Download,
  Gauge,
  GitPullRequest,
  Network,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { additionalProjects, projects } from "@/content/projects";
import { contributions } from "@/content/contributions";
import { articles } from "@/content/writing";

const metrics = [
  { value: "200K+", label: "employees supported by the enterprise platform" },
  { value: "100K+", label: "monthly conversational AI interactions" },
  { value: "1 of 4", label: "development leads across four teams" },
  { value: "100+", label: "merged open-source pull requests" },
];

const capabilities = [
  {
    icon: Route,
    title: "Agentic orchestration",
    text: "Routing policies that choose deterministic workflows, retrieval, clarification, tools, or human escalation with explicit controls.",
  },
  {
    icon: BrainCircuit,
    title: "Enterprise RAG",
    text: "Retrieval and answer pipelines designed around governed evidence, evaluation sets, confidence, latency, and measurable failure modes.",
  },
  {
    icon: Network,
    title: "Conversational systems",
    text: "Intent, entity, context, and dialogue patterns that turn ambiguous language into safe, maintainable user journeys.",
  },
  {
    icon: Braces,
    title: "Integrations and platforms",
    text: "Typed API contracts, workflow automation, authentication, failure handling, and reusable patterns for enterprise services.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails and readiness",
    text: "Threat-aware design, fallbacks, validation, access boundaries, test strategy, and production reviews for AI-enabled changes.",
  },
  {
    icon: Gauge,
    title: "Reliability and observability",
    text: "Logs, metrics, traces, SLOs, staged delivery, runbooks, and feedback loops that make model and system behavior diagnosable.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chase Naples",
  url: "https://cnaples-portfolio.vercel.app",
  jobTitle: "Vice President, Software Engineer II and Development Lead",
  homeLocation: { "@type": "Place", name: "Charlotte, North Carolina" },
  sameAs: [
    "https://github.com/cnaples79",
    "https://www.linkedin.com/in/chase-naples",
  ],
  knowsAbout: [
    "Enterprise AI",
    "Retrieval-augmented generation",
    "Agentic orchestration",
    "Conversational AI",
    "Software reliability",
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="hero shell">
        <div className="hero-copy">
          <p className="availability">
            <span /> Charlotte, NC · Enterprise AI engineering
          </p>
          <h1>
            I engineer reliable AI systems <em>for the real world.</em>
          </h1>
          <p className="hero-lede">
            Vice President, Software Engineer II, and development lead designing
            enterprise conversational AI, RAG, agentic orchestration,
            integrations, and production controls.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="/resume/chase-naples-resume.pdf"
              download
            >
              Résumé <Download size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-note">
            Leading architecture and engineering across GenAI, retrieval, APIs,
            reliability, and developer enablement.
          </p>
        </div>

        <div
          className="hero-system"
          aria-label="Illustration of an observable AI routing system"
        >
          <div className="system-topline">
            <span>AI control plane</span>
            <span className="system-live">
              <i /> observable
            </span>
          </div>
          <div className="system-flow">
            <div className="flow-node input-node">
              <span>01</span>
              <strong>Understand</strong>
              <small>intent · context · risk</small>
            </div>
            <div className="flow-connector">
              <i />
              <i />
              <i />
            </div>
            <div className="flow-router">
              <span className="router-ring" />
              <strong>Route</strong>
              <small>policy + confidence</small>
            </div>
            <div className="flow-branches">
              <div>
                <span>RAG</span>
                <i />
              </div>
              <div>
                <span>Tool</span>
                <i />
              </div>
              <div>
                <span>Human</span>
                <i />
              </div>
            </div>
          </div>
          <div className="system-footer">
            <span>grounded</span>
            <span>guarded</span>
            <span>measured</span>
          </div>
        </div>
      </section>

      <section
        className="metrics-band"
        aria-label="Selected professional metrics"
      >
        <div className="shell metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.value + metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <SectionHeading
          eyebrow="Selected work"
          title="AI architecture backed by shipped systems."
          description="A mix of public-safe enterprise work and personal products, documented with the engineering decisions and boundaries that matter."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
        <div className="additional-projects">
          <p className="eyebrow">Additional builds</p>
          {additionalProjects.map((project) => (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <span>
                <strong>{project.title}</strong>
                <small>{project.description}</small>
              </span>
              <span className="additional-stack">{project.stack}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="section expertise-section">
        <div className="shell">
          <SectionHeading
            eyebrow="How I work"
            title="Engineering the system around the model."
            description="Useful enterprise AI depends on orchestration, evidence, controls, integrations, and operations—not a model endpoint alone."
          />
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="open-source">
        <div className="split-heading">
          <SectionHeading
            eyebrow="Open source"
            title="Small changes. Real maintainers. Production codebases."
            description="Selected merged work across Meta, NVIDIA, Microsoft, Google, and Firebase repositories."
          />
          <a
            className="button button-secondary"
            href="https://github.com/cnaples79"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile <GitPullRequest size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="contribution-list">
          {contributions.map((item, index) => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.href}
            >
              <span className="contribution-index">0{index + 1}</span>
              <span className="contribution-main">
                <small>
                  {item.organization} · {item.repository}
                </small>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </span>
              <span className="contribution-type">{item.type}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="section writing-preview">
        <div className="shell">
          <div className="split-heading">
            <SectionHeading
              eyebrow="Field notes"
              title="Patterns for dependable AI engineering."
              description="Original writing distilled from hands-on architecture, delivery, troubleshooting, and evaluation work."
            />
            <Link className="text-link" href="/writing">
              All writing <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => (
              <article key={article.slug}>
                <div className="article-meta">
                  <span>{article.readTime}</span>
                  <time dateTime={article.publishedAt}>August 2026</time>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <ul className="tag-list">
                  {article.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <Link className="text-link" href={`/writing/${article.slug}`}>
                  Read article <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>
            From genetics to software systems—and toward AI that earns trust.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m Chase, an AI-focused software engineer and development lead
            in Charlotte, North Carolina. My work sits where conversational
            experience, backend integration, model behavior, and production
            reliability meet.
          </p>
          <p>
            I started in analytical roles after earning a Genetics degree from
            the University of Georgia, then moved deeper into software, computer
            science, and enterprise platforms. That path shaped how I approach
            AI: form a hypothesis, measure the system, challenge the result, and
            make failure visible.
          </p>
          <p>
            Today I lead design and engineering decisions for enterprise GenAI
            and RAG work, mentor engineers, contribute to open source, and build
            privacy and developer tools that let me explore product ideas end to
            end.
          </p>
          <div className="about-links">
            <a className="text-link" href="mailto:cnaples79@gmail.com">
              Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="text-link muted"
              href="/resume/chase-naples-resume.pdf"
              download
            >
              Download résumé <Download size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
