import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Original field notes on reliable enterprise AI, RAG, agentic architecture, evaluation, and production engineering.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <main id="main-content" className="writing-index shell">
      <header className="page-hero">
        <p className="eyebrow">Field notes</p>
        <h1>Engineering patterns for AI that has to work.</h1>
        <p>
          Original writing about architecture, evaluation, guardrails,
          reliability, and the connective engineering around enterprise models.
        </p>
      </header>
      <div className="writing-list">
        {articles.map((article, index) => (
          <article key={article.slug}>
            <span className="writing-index-number">0{index + 1}</span>
            <div>
              <p className="article-meta">
                <time dateTime={article.publishedAt}>August 2026</time>
                <span>{article.readTime}</span>
              </p>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <ul className="tag-list">
                {article.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
            <Link
              aria-label={`Read ${article.title}`}
              href={`/writing/${article.slug}`}
            >
              <ArrowUpRight size={21} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
