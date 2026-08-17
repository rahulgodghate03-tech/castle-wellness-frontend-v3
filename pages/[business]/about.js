import BusinessLayout from "../../components/BusinessLayout";
import { whatsappLink } from "../../lib/api";

export default function BusinessAbout() {
  return (
    <BusinessLayout title="About & Location">
      {(b) => (
        <>
          <section className="page-hero">
            <span className="eyebrow">About</span>
            <h1>{b.name}</h1>
            {b.tagline && <p>{b.tagline}</p>}
          </section>

          <section>
            <div className="about-grid">
              <div className="about-visual fade-up">
                {b.coverImage?.url ? (
                  <img src={b.coverImage.url} alt={b.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <svg className="rings" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="70" stroke="#c9a24b" strokeWidth="0.8" opacity="0.5" />
                    <circle cx="100" cy="100" r="50" stroke="#c9a24b" strokeWidth="0.8" opacity="0.35" />
                    <circle cx="100" cy="100" r="30" stroke="#e2c98a" strokeWidth="1" />
                  </svg>
                )}
              </div>
              <div className="about-copy fade-up">
                <span className="eyebrow">Our Story</span>
                <h3>{b.name}</h3>
                <p>{b.description || "More about us coming soon."}</p>
              </div>
            </div>

            <div className="location-block">
              <div className="fade-up">
                <span className="eyebrow">Find Us</span>
                <h3>Visit {b.name}</h3>
                <p>{b.address || "Address coming soon"}</p>
                {b.phone && (
                  <p>
                    Phone: <a href={`tel:${b.phone.replace(/\s/g, "")}`} style={{ color: "var(--gold-soft)" }}>{b.phone}</a>
                  </p>
                )}
                <p style={{ marginBottom: 24 }}>Open daily · By appointment</p>
                {b.whatsappNumber && (
                  <a
                    className="cta-btn"
                    href={whatsappLink(b.whatsappNumber, `Hi! I'd like to know more about ${b.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Us on WhatsApp
                  </a>
                )}
              </div>
              {b.address && (
                <div className="fade-up">
                  <iframe
                    className="map-frame"
                    title={`${b.name} Location`}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps?q=${encodeURIComponent(b.address)}&output=embed`}
                  />
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </BusinessLayout>
  );
}
