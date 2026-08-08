import Link from "next/link";
import { Menu } from "lucide-react";

const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#open-source", label: "Open source" },
  { href: "/writing", label: "Writing" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Chase Naples, home">
          CN<span aria-hidden="true">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="nav-contact" href="mailto:cnaples79@gmail.com">
            Connect
          </a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={20} aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a href="mailto:cnaples79@gmail.com">Connect</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
