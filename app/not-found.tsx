import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">404 · Route not found</p>
      <h1>This path doesn&apos;t resolve.</h1>
      <p>
        The portfolio has been rebuilt around real routes. The page you followed
        may belong to the previous version.
      </p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={17} aria-hidden="true" /> Back to the portfolio
      </Link>
    </main>
  );
}
