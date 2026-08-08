import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | Chase Naples`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main id="main-content" className={`case-study accent-${project.accent}`}>
      <header className="case-hero shell">
        <Link className="back-link" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" /> Selected work
        </Link>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-meta">
          <div>
            <small>Role</small>
            <strong>{project.role}</strong>
          </div>
          <div>
            <small>Status</small>
            <strong>{project.status}</strong>
          </div>
        </div>
      </header>

      <section
        className="case-system shell"
        aria-label={`${project.title} system principles`}
      >
        <div className="case-system-label">
          <span>System view</span>
          <span>Public-safe abstraction</span>
        </div>
        <div className="case-system-flow">
          {project.principles.map((principle, index) => (
            <div className="case-node" key={principle}>
              <span>0{index + 1}</span>
              <strong>{principle}</strong>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <div className="case-content shell">
        <section className="case-narrative">
          <div>
            <p className="eyebrow">01 · The challenge</p>
            <h2>What had to be true</h2>
          </div>
          <p>{project.challenge}</p>
        </section>
        <section className="case-narrative">
          <div>
            <p className="eyebrow">02 · The response</p>
            <h2>How I shaped the system</h2>
          </div>
          <p>{project.response}</p>
        </section>
        <section className="case-narrative">
          <div>
            <p className="eyebrow">03 · The result</p>
            <h2>Outcome and current state</h2>
          </div>
          <p>{project.outcome}</p>
        </section>
      </div>

      <section className="case-details shell">
        <div className="case-highlight-card">
          <p className="eyebrow">Engineering highlights</p>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="case-stack-card">
          <p className="eyebrow">Working stack</p>
          <ul className="tag-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.repository ? (
            <a
              className="button button-secondary"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              View repository <Code2 size={17} aria-hidden="true" />
            </a>
          ) : (
            <p className="confidential-note">
              Enterprise details are intentionally summarized. No proprietary
              architecture, code, screenshots, or internal product information
              is published here.
            </p>
          )}
        </div>
      </section>

      <nav className="case-next shell" aria-label="More work">
        <div>
          <p className="eyebrow">Continue exploring</p>
          <h2>More selected work</h2>
        </div>
        <div>
          {projects
            .filter((item) => item.slug !== project.slug)
            .slice(0, 2)
            .map((item) => (
              <Link href={`/work/${item.slug}`} key={item.slug}>
                {item.title}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ))}
        </div>
      </nav>
    </main>
  );
}
