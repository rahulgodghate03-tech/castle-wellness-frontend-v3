import Head from "next/head";
import BusinessHeader from "./BusinessHeader";
import BusinessFooter from "./BusinessFooter";
import { useBusiness } from "../hooks/useBusiness";

export default function BusinessLayout({ title, children }) {
  const { business, notFound } = useBusiness();

  if (notFound) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }}>Business not found</h1>
        <a href="/" className="ghost-btn">← Back to MR Group</a>
      </div>
    );
  }

  if (!business) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="loading-note">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{title ? `${title} — ${business.name}` : business.name}</title>
      </Head>
      <BusinessHeader business={business} />
      {typeof children === "function" ? children(business) : children}
      <BusinessFooter business={business} />
    </>
  );
}
