import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ReliableRouter from "@/content/writing/reliable-enterprise-ai-router.mdx";
import RagLatency from "@/content/writing/rag-accuracy-without-ignoring-latency.mdx";
import { articles, getArticle } from "@/content/writing";

type ArticlePageProps = { params: Promise<{ slug: string }> };

const bodies: Record<string, ComponentType> = {
  "reliable-enterprise-ai-router": ReliableRouter,
  "rag-accuracy-without-ignoring-latency": RagLatency,
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/writing/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      url: `/writing/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Body = bodies[slug];
  if (!article || !Body) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: "Chase Naples" },
  };

  return (
    <main id="main-content" className="article-page shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="article-hero">
        <Link className="back-link" href="/writing">
          <ArrowLeft size={16} aria-hidden="true" /> All writing
        </Link>
        <div className="article-meta">
          <time dateTime={article.publishedAt}>August 8, 2026</time>
          <span>{article.readTime}</span>
        </div>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <ul className="tag-list">
          {article.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </header>
      <article className="article-body">
        <Body />
      </article>
      <aside className="article-end">
        <p className="eyebrow">Keep the conversation going</p>
        <h2>What failure mode is your AI system hiding?</h2>
        <a className="button button-primary" href="mailto:cnaples79@gmail.com">
          Compare notes
        </a>
      </aside>
    </main>
  );
}
