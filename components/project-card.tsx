import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-visual" aria-hidden="true">
        <span className="project-number">0{index + 1}</span>
        <div className="signal-map">
          <span />
          <span />
          <span />
          <i />
          <i />
        </div>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/work/${project.slug}`}>
          View case study <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
