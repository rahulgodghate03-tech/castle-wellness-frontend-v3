// import { useEffect, useState } from "react";
// import BusinessLayout from "../../components/BusinessLayout";
// import api, { whatsappLink } from "../../lib/api";
// import { useBusiness } from "../../hooks/useBusiness";

// export default function BusinessPackages() {
//   const { slug } = useBusiness();
//   const [packages, setPackages] = useState(null);

//   useEffect(() => {
//     if (!slug) return;
//     api.get(`/packages?business=${slug}`).then((res) => setPackages(res.data.packages)).catch(() => setPackages([]));
//   }, [slug]);

//   return (
//     <BusinessLayout title="Packages">
//       {(b) => (
//         <>
//           <section className="page-hero">
//             <span className="eyebrow">Membership</span>
//             <h1>Packages</h1>
//             <p>Return often, save more — {b.name} package pricing.</p>
//           </section>

//           <section>
//             {packages === null ? (
//               <p className="loading-note">Loading packages...</p>
//             ) : packages.length === 0 ? (
//               <p className="empty-note">Packages will appear here once added from the admin panel.</p>
//             ) : (
//               <div className="pkg-row">
//                 {packages.map((p) => (
//                   <div className={`pkg-card fade-up ${p.isFeatured ? "featured" : ""}`} key={p._id}>
//                     {p.isFeatured && <div className="tag">Most Popular</div>}
//                     <div className="therapy-count">{p.therapyCount} Sessions</div>
//                                        {p.discountPrice ? (
//                       <div className="price">
//                         <span className="price-strike-lg">₹{p.price.toLocaleString("en-IN")}</span>
//                         <sup>₹</sup>{p.discountPrice.toLocaleString("en-IN")}
//                       </div>
//                     ) : (
//                       <div className="price">
//                         <sup>₹</sup>
//                         {p.price.toLocaleString("en-IN")}
//                       </div>
//                     )}
//                     {b.whatsappNumber && (
//                       <a
//                         className="pkg-mini-btn"
//                         href={whatsappLink(b.whatsappNumber, `Hi! I'm interested in the ${p.title}.`)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Enquire
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </>
//       )}
//     </BusinessLayout>
//   );
// }








// import { useEffect, useState } from "react";
// import BusinessLayout from "../../components/BusinessLayout";
// import api, { whatsappLink } from "../../lib/api";
// import { useBusiness } from "../../hooks/useBusiness";

// export default function BusinessPackages() {
//   const { slug } = useBusiness();
//   const [packages, setPackages] = useState(null);

//   useEffect(() => {
//     if (!slug) return;
//     api.get(`/packages?business=${slug}`).then((res) => setPackages(res.data.packages)).catch(() => setPackages([]));
//   }, [slug]);

//   return (
//     <BusinessLayout title="Packages">
//       {(b) => (
//         <>
//           <section className="page-hero">
//             <span className="eyebrow">Membership</span>
//             <h1>Packages</h1>
//             <p>Return often, save more — {b.name} package pricing.</p>
//           </section>

//           <section>
//             {packages === null ? (
//               <p className="loading-note">Loading packages...</p>
//             ) : packages.length === 0 ? (
//               <p className="empty-note">Packages will appear here once added from the admin panel.</p>
//             ) : (
//               <div className="pkg-row">
//                 {packages.map((p) => (
//                   <div className={`pkg-card fade-up ${p.isFeatured ? "featured" : ""}`} key={p._id}>
//                     {p.isFeatured && <div className="tag">Most Popular</div>}
//                     <h3 className="font-display text-2xl text-ivory mb-1">{p.title}</h3>
//                     {p.subtitle && <div className="therapy-count">{p.subtitle}</div>}
//                     {!p.subtitle && p.therapyCount && <div className="therapy-count">{p.therapyCount} Sessions</div>}
//                     {p.discountPrice ? (
//                       <div className="price">
//                         <span className="price-strike-lg">₹{p.price.toLocaleString("en-IN")}</span>
//                         <sup>₹</sup>{p.discountPrice.toLocaleString("en-IN")}
//                       </div>
//                     ) : (
//                       <div className="price">
//                         <sup>₹</sup>
//                         {p.price.toLocaleString("en-IN")}
//                       </div>
//                     )}
//                     {b.whatsappNumber && (
//                       <a
//                         className="pkg-mini-btn"
//                         href={whatsappLink(b.whatsappNumber, `Hi! I'm interested in the ${p.title}.`)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Enquire
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </>
//       )}
//     </BusinessLayout>
//   );
// }















import { useEffect, useState } from "react";
import BusinessLayout from "../../components/BusinessLayout";
import api, { whatsappLink } from "../../lib/api";
import { useBusiness } from "../../hooks/useBusiness";

export default function BusinessHome() {
  const { business, slug } = useBusiness();
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (!slug) return;
    api.get(`/services?business=${slug}`).then((res) => setServices(res.data.services.slice(0, 4))).catch(() => {});
    api.get(`/packages?business=${slug}`).then((res) => setPackages(res.data.packages)).catch(() => {});
  }, [slug]);

  return (
    <BusinessLayout>
      {(b) => (
        <>
          <section className="hero" style={heroStyle}>
            <div className="hero-content fade-up" style={{ position: "relative", zIndex: 2, maxWidth: 640 }}>
              <span className="eyebrow">{b.type === "salon" ? "Unisex Salon" : "Spa & Wellness"} · Bhopal</span>
              <h1 style={{ fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.08, marginTop: 22 }}>
                {b.name}
              </h1>
              {b.tagline && (
                <p style={{ marginTop: 10, fontSize: 18, fontStyle: "italic", color: "var(--gold-soft)" }}>
                  {b.tagline}
                </p>
              )}
              {b.description && (
                <p style={{ marginTop: 20, maxWidth: 460, fontSize: 16, lineHeight: 1.7, color: "rgba(243,236,224,0.72)" }}>
                  {b.description}
                </p>
              )}
              <div style={{ display: "flex", gap: 18, marginTop: 36, flexWrap: "wrap" }}>
                {b.whatsappNumber && (
                  <a
                    className="cta-btn"
                    href={whatsappLink(b.whatsappNumber, `Hi! I'd like to book an appointment at ${b.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book on WhatsApp
                  </a>
                )}
                <a className="ghost-btn" href={`/${b.slug}/services`}>View Services</a>
              </div>
            </div>
          </section>

          <section id="services">
            <div className="section-head fade-up">
              <span className="eyebrow">Popular</span>
              <h2>Services</h2>
            </div>
            {services.length === 0 ? (
              <p className="empty-note">Services will appear here once added from the admin panel.</p>
            ) : (
              <div className="services-grid">
                {services.map((s, i) => (
                  <div className="svc-card fade-up" key={s._id}>
                    {s.image?.url && <img src={s.image.url} alt={s.name} className="svc-img" />}
                    <div className="svc-body">
                      <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
                      <h3>{s.name}</h3>
                      <p>{s.description}</p>
                      <div className="svc-price">
                        {s.discountPrice ? (
                          <span className="amt">
                            <span className="price-strike">₹{s.price}</span> ₹{s.discountPrice}
                          </span>
                        ) : (
                          <span className="amt">₹{s.price}</span>
                        )}
                        <span className="from">{s.durationMinutes} min</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a className="ghost-btn" href={`/${b.slug}/services`}>View All Services</a>
            </div>
          </section>

          {packages.length > 0 && (
            <section style={{ background: "linear-gradient(180deg, var(--ink), var(--forest-deep) 120%)" }}>
              <div className="section-head fade-up">
                <span className="eyebrow">Membership</span>
                <h2>Packages</h2>
              </div>
              <div className="pkg-row">
                {packages.map((p) => (
                  <div className={`pkg-card fade-up ${p.isFeatured ? "featured" : ""}`} key={p._id}>
                    {p.isFeatured && <div className="tag">Most Popular</div>}
                    <h3 className="font-display text-2xl text-ivory mb-1">{p.title}</h3>
                    {p.subtitle && <div className="therapy-count">{p.subtitle}</div>}
                    {!p.subtitle && p.therapyCount && <div className="therapy-count">{p.therapyCount} Sessions</div>}
                    {p.discountPrice ? (
                      <div className="price">
                        <span className="price-strike-lg">₹{p.price.toLocaleString("en-IN")}</span>
                        <sup>₹</sup>{p.discountPrice.toLocaleString("en-IN")}
                      </div>
                    ) : (
                      <div className="price"><sup>₹</sup>{p.price.toLocaleString("en-IN")}</div>
                    )}
                    {b.whatsappNumber && (
                    <a
                        className="pkg-mini-btn"
                        href={whatsappLink(b.whatsappNumber, `Hi! I'm interested in the ${p.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquire
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="footer-cta">
            <span className="eyebrow">Visit Us</span>
            <h2 className="fade-up">{b.name}</h2>
            {b.address && <p>{b.address}</p>}
            {b.whatsappNumber && (
              <a
                className="cta-btn"
                href={whatsappLink(b.whatsappNumber, `Hi! I'd like to book an appointment at ${b.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Us on WhatsApp
              </a>
            )}
          </section>
        </>
      )}
    </BusinessLayout>
  );
}

const heroStyle = {
  position: "relative",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  padding: "0 6vw",
  background:
    "radial-gradient(ellipse 60% 50% at 82% 15%, rgba(31,59,44,0.55), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(201,162,75,0.10), transparent 60%), var(--ink)",
  overflow: "hidden",
};