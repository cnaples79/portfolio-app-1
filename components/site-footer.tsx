import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/cnaples79" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chase-naples" },
  { label: "Email", href: "mailto:cnaples79@gmail.com" },
  { label: "Résumé", href: "/resume/chase-naples-resume.pdf" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Let&apos;s build reliable AI</p>
          <h2>Complex systems. Clear decisions. Production outcomes.</h2>
        </div>
        <div className="footer-links">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Chase Naples · Charlotte, NC</p>
        <Link href="/">AI engineering portfolio</Link>
      </div>
    </footer>
  );
}
