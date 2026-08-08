export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  topics: string[];
};

export const articles: Article[] = [
  {
    slug: "reliable-enterprise-ai-router",
    title: "Designing a Reliable Enterprise AI Router",
    description:
      "A practical control-plane pattern for choosing deterministic workflows, retrieval, clarification, and human escalation.",
    publishedAt: "2026-08-08",
    readTime: "8 min read",
    topics: ["Agentic architecture", "RAG", "Reliability"],
  },
  {
    slug: "rag-accuracy-without-ignoring-latency",
    title: "Improving RAG Accuracy Without Ignoring Latency",
    description:
      "How to tune retrieval, evidence quality, model choice, and measurement as one system rather than isolated components.",
    publishedAt: "2026-08-08",
    readTime: "7 min read",
    topics: ["RAG", "Evaluation", "Production AI"],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
