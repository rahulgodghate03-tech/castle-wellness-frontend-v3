import Link from "next/link";
import { useRouter } from "next/router";
import { whatsappLink } from "../lib/api";

export default function BusinessHeader({ business }) {
  const router = useRouter();
  const base = `/${business.slug}`;

  const links = [
    { href: base, label: "Home" },
    { href: `${base}/about`, label: "About" },
    { href: `${base}/services`, label: "Services" },
    { href: `${base}/packages`, label: "Packages" },
    { href: `${base}/gallery`, label: "Gallery" },
  ];

  return (
    <header>
      <Link href={base} className="logo">
        {business.logo?.url ? (
          <img src={business.logo.url} alt={business.name} style={{ height: 34, width: "auto" }} />
        ) : (
          business.name.split(" ").map((word, i) =>
            i === 0 ? word : <strong key={i}> {word}</strong>
          )
        )}
      </Link>

      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={router.asPath === link.href ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {business.whatsappNumber && (
        <a
          className="cta-btn navbar-cta"
          href={whatsappLink(business.whatsappNumber, `Hi! I'd like to book an appointment at ${business.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book on WhatsApp
        </a>
      )}

      <Link href="/" className="mrg-back-link" title="Back to MR Group">
        MR Group ↗
      </Link>
    </header>
  );
}
