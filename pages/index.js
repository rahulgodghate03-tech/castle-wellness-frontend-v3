// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import api from "../lib/api";

// export default function MRGroupHome() {
//   const [businesses, setBusinesses] = useState(null);

//   useEffect(() => {
//     api.get("/businesses").then((res) => setBusinesses(res.data.businesses)).catch(() => setBusinesses([]));
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>MR Group — Bhopal</title>
//         <meta name="description" content="MR Group — a family of wellness and grooming businesses in Bhopal." />
//       </Head>

//       <div className="mrg-page">
//         <header className="mrg-header">
//           <div className="mrg-logo">
//             <span className="mrg-logo-m">M</span>
//             <span className="mrg-logo-r">R</span>
//             <span className="mrg-logo-group">Group</span>
//           </div>
//         </header>

//         <section className="mrg-hero fade-up">
//           <span className="eyebrow">Bhopal</span>
//           <h1>One name, three spaces built around you.</h1>
//           <p>
//             From quiet spa retreats to sharp, precise grooming — MR Group brings together a
//             family of wellness and style businesses, each with its own identity, all under one roof.
//           </p>
//         </section>

//         <section className="mrg-grid-section">
//           {businesses === null ? (
//             <p className="loading-note" style={{ textAlign: "center" }}>Loading businesses...</p>
//           ) : businesses.length === 0 ? (
//             <p className="empty-note" style={{ textAlign: "center" }}>
//               Businesses will appear here once added from the admin panel.
//             </p>
//           ) : (
//             <div className="mrg-grid">
//               {businesses.map((b) => (
//                 <Link href={`/${b.slug}`} key={b._id} className="mrg-card fade-up">
//                   <div className="mrg-card-media">
//                     {b.coverImage?.url ? (
//                       <img src={b.coverImage.url} alt={b.name} />
//                     ) : (
//                       <div className="mrg-card-media-placeholder" />
//                     )}
//                   </div>
//                   <div className="mrg-card-body">
//                     {b.logo?.url && <img src={b.logo.url} alt={`${b.name} logo`} className="mrg-card-logo" />}
//                     <span className="mrg-card-type">{b.type}</span>
//                     <h3>{b.name}</h3>
//                     {b.tagline && <p>{b.tagline}</p>}
//                     <span className="mrg-card-link">Visit {b.name} →</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </section>

//         <footer className="mrg-footer">
//           <p>© {new Date().getFullYear()} MR Group, Bhopal. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }






// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import api from "../lib/api";

// export default function MRGroupHome() {
//   const [businesses, setBusinesses] = useState(null);

//   useEffect(() => {
//     api.get("/businesses").then((res) => setBusinesses(res.data.businesses)).catch(() => setBusinesses([]));
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>MR Group — Bhopal</title>
//         <meta name="description" content="MR Group — a family of wellness and grooming businesses in Bhopal." />
//       </Head>

//       <div className="mrg-page">
//         <div className="mrg-bg-glow" />

//         <header className="mrg-header">
//           <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-logo-img" />
//         </header>

//         <section className="mrg-hero fade-up">
//           <span className="eyebrow">Bhopal</span>
//           <h1>One name, three spaces built around you.</h1>
//           <p>
//             From quiet spa retreats to sharp, precise grooming — MR Group brings together a
//             family of wellness and style businesses, each with its own identity, all under one roof.
//           </p>
//           <div className="mrg-hero-divider">
//             <span></span>
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//               <path d="M10 2 C6 6 6 14 10 18 C14 14 14 6 10 2Z" stroke="#c9a24b" strokeWidth="1" opacity="0.7" />
//             </svg>
//             <span></span>
//           </div>
//         </section>

//         <section className="mrg-grid-section">
//           {businesses === null ? (
//             <p className="loading-note" style={{ textAlign: "center" }}>Loading businesses...</p>
//           ) : businesses.length === 0 ? (
//             <p className="empty-note" style={{ textAlign: "center" }}>
//               Businesses will appear here once added from the admin panel.
//             </p>
//           ) : (
//             <div className="mrg-grid">
//               {businesses.map((b, i) => (
//                 <Link href={`/${b.slug}`} key={b._id} className="mrg-card fade-up">
//                   <div className="mrg-card-num">{String(i + 1).padStart(2, "0")}</div>
//                   <div className="mrg-card-media">
//                     {b.coverImage?.url ? (
//                       <img src={b.coverImage.url} alt={b.name} />
//                     ) : (
//                       <div className="mrg-card-media-placeholder">
//                         <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
//                           <circle cx="26" cy="26" r="19" stroke="#c9a24b" strokeWidth="0.8" opacity="0.5" />
//                           <circle cx="26" cy="26" r="12" stroke="#e2c98a" strokeWidth="0.8" opacity="0.6" />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="mrg-card-media-fade" />
//                   </div>
//                   <div className="mrg-card-body">
//                     {b.logo?.url && <img src={b.logo.url} alt={`${b.name} logo`} className="mrg-card-logo" />}
//                     <span className="mrg-card-type">{b.type}</span>
//                     <h3>{b.name}</h3>
//                     {b.tagline && <p>{b.tagline}</p>}
//                     <span className="mrg-card-link">
//                       Visit {b.name}
//                       <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
//                         <path d="M0 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
//                       </svg>
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </section>

//         <footer className="mrg-footer">
//           <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-footer-logo" />
//           <p>© {new Date().getFullYear()} MR Group, Bhopal. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }










// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import api from "../lib/api";

// export default function MRGroupHome() {
//   const [businesses, setBusinesses] = useState(null);

//   useEffect(() => {
//     api.get("/businesses").then((res) => setBusinesses(res.data.businesses)).catch(() => setBusinesses([]));
//   }, []);

//   const marqueeText = businesses?.length
//     ? businesses.map((b) => b.name).join("  ✦  ")
//     : "MR Group";

//   return (
//     <>
//       <Head>
//         <title>MR Group — Bhopal</title>
//         <meta name="description" content="MR Group — a family of wellness and grooming businesses in Bhopal." />
//       </Head>

//       <div className="mrg-page">
//         <div className="mrg-grain" />
//         <div className="mrg-bg-glow" />

//         <header className="mrg-header">
//           <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-logo-img" />
//         </header>

//         <section className="mrg-hero fade-up">
//           <span className="eyebrow mrg-eyebrow">Bhopal, Madhya Pradesh</span>
//           <h1>
//             One name.
//             <br />
//             <em>Three worlds</em> of style &amp; stillness.
//           </h1>
//           <p>
//             From quiet spa retreats to sharp, precise grooming — MR Group brings together a
//             family of wellness and style businesses, each with its own identity, all under one roof.
//           </p>
//         </section>

//         <div className="mrg-marquee">
//           <div className="mrg-marquee-track">
//             <span>{marqueeText}</span>
//             <span>{marqueeText}</span>
//           </div>
//         </div>

//         <section className="mrg-grid-section">
//           {businesses === null ? (
//             <p className="loading-note" style={{ textAlign: "center" }}>Loading businesses...</p>
//           ) : businesses.length === 0 ? (
//             <p className="empty-note" style={{ textAlign: "center" }}>
//               Businesses will appear here once added from the admin panel.
//             </p>
//           ) : (
//             <div className="mrg-grid">
//               {businesses.map((b, i) => (
//                 <Link href={`/${b.slug}`} key={b._id} className="mrg-card fade-up">
//                   <span className="mrg-card-bignum">{String(i + 1).padStart(2, "0")}</span>
//                   <div className="mrg-card-media">
//                     {b.coverImage?.url ? (
//                       <img src={b.coverImage.url} alt={b.name} />
//                     ) : (
//                       <div className="mrg-card-media-placeholder">
//                         <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
//                           <circle cx="26" cy="26" r="19" stroke="var(--mrg-gold)" strokeWidth="0.8" opacity="0.5" />
//                           <circle cx="26" cy="26" r="12" stroke="var(--mrg-red-soft)" strokeWidth="0.8" opacity="0.6" />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="mrg-card-media-fade" />
//                   </div>
//                   <div className="mrg-card-body">
//                     {b.logo?.url && <img src={b.logo.url} alt={`${b.name} logo`} className="mrg-card-logo" />}
//                     <span className="mrg-card-type">{b.type}</span>
//                     <h3>{b.name}</h3>
//                     {b.tagline && <p>{b.tagline}</p>}
//                     <span className="mrg-card-link">
//                       Visit {b.name}
//                       <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
//                         <path d="M0 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
//                       </svg>
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </section>

//         <footer className="mrg-footer">
//           <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-footer-logo" />
//           <p>© {new Date().getFullYear()} MR Group, Bhopal. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }










// import Head from "next/head";
// import Link from "next/link";
// import api from "../lib/api";

// export default function MRGroupHome({ businesses }) {
//   const marqueeText = businesses?.length
//     ? businesses.map((b) => b.name).join("  ✦  ")
//     : "MR Group";

//   return (
//     <>
//       <Head>
//         <title>MR Group — Bhopal</title>
//         <meta name="description" content="MR Group — a family of wellness and grooming businesses in Bhopal." />
//       </Head>

//       <div className="mrg-page">
//         <div className="mrg-grain" />
//         <div className="mrg-bg-glow" />

//         <header className="mrg-header">
//           <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-logo-img" />
//         </header>

//         <section className="mrg-hero fade-up">
//           <span className="eyebrow mrg-eyebrow">Bhopal, Madhya Pradesh</span>
//           <h1>
//             One name.
//             <br />
//             <em>Three worlds</em> of style &amp; stillness.
//           </h1>
//           <p>
//             From quiet spa retreats to sharp, precise grooming — MR Group brings together a
//             family of wellness and style businesses, each with its own identity, all under one roof.
//           </p>
//         </section>

//         <div className="mrg-marquee">
//           <div className="mrg-marquee-track">
//             <span>{marqueeText}</span>
//             <span>{marqueeText}</span>
//           </div>
//         </div>

//         <section className="mrg-grid-section">
//           {businesses.length === 0 ? (
//             <p className="empty-note" style={{ textAlign: "center" }}>
//               Businesses will appear here once added from the admin panel.
//             </p>
//           ) : (
//             <div className="mrg-grid">
//               {businesses.map((b, i) => (
//                 <Link href={`/${b.slug}`} key={b._id} className="mrg-card fade-up">
//                   <span className="mrg-card-bignum">{String(i + 1).padStart(2, "0")}</span>
//                   <div className="mrg-card-media">
//                     {b.coverImage?.url ? (
//                       <img src={b.coverImage.url} alt={b.name} />
//                     ) : (
//                       <div className="mrg-card-media-placeholder">
//                         <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
//                           <circle cx="26" cy="26" r="19" stroke="var(--mrg-gold)" strokeWidth="0.8" opacity="0.5" />
//                           <circle cx="26" cy="26" r="12" stroke="var(--mrg-red-soft)" strokeWidth="0.8" opacity="0.6" />
//                         </svg>
//                       </div>
//                     )}
//                     <div className="mrg-card-media-fade" />
//                   </div>
//                   <div className="mrg-card-body">
//                     {b.logo?.url && <img src={b.logo.url} alt={`${b.name} logo`} className="mrg-card-logo" />}
//                     <span className="mrg-card-type">{b.type}</span>
//                     <h3>{b.name}</h3>
//                     {b.tagline && <p>{b.tagline}</p>}
//                     <span className="mrg-card-link">
//                       Visit {b.name}
//                       <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
//                         <path d="M0 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
//                       </svg>
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </section>

//         <footer className="mrg-footer">
//           <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-footer-logo" />
//           <p>© {new Date().getFullYear()} MR Group, Bhopal. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const res = await api.get("/businesses");
//     return {
//       props: { businesses: res.data.businesses },
//       revalidate: 60,
//     };
//   } catch (err) {
//     return {
//       props: { businesses: [] },
//       revalidate: 60,
//     };
//   }
// }












import Head from "next/head";
import Link from "next/link";
import api from "../lib/api";
import useScrollFade from "../hooks/useScrollFade";

export default function MRGroupHome({ businesses }) {
  useScrollFade();
  const marqueeText = businesses?.length
    ? businesses.map((b) => b.name).join("  ✦  ")
    : "MR Group";
  

  return (
    <>
      <Head>
        <title>MR Group — Bhopal</title>
        <meta name="description" content="MR Group — a family of wellness and grooming businesses in Bhopal." />
      </Head>

      <div className="mrg-page">
        <div className="mrg-grain" />
        <div className="mrg-bg-glow" />

        <header className="mrg-header">
          <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-logo-img" />
        </header>

        <section className="mrg-hero fade-up">
          <span className="eyebrow mrg-eyebrow">Bhopal, Madhya Pradesh</span>
          <h1>
            One name.
            <br />
            <em>Three worlds</em> of style &amp; stillness.
          </h1>
          <p>
            From quiet spa retreats to sharp, precise grooming — MR Group brings together a
            family of wellness and style businesses, each with its own identity, all under one roof.
          </p>
        </section>

        <div className="mrg-marquee">
          <div className="mrg-marquee-track">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        {/* ---------- Stats bar ---------- */}
        <section className="mrg-stats">
          <div className="mrg-stat">
            <div className="mrg-stat-num">{businesses?.length || 3}</div>
            <div className="mrg-stat-label">Businesses</div>
          </div>
          <div className="mrg-stat-divider" />
          <div className="mrg-stat">
            <div className="mrg-stat-num">1000+</div>
            <div className="mrg-stat-label">Happy Clients</div>
          </div>
          <div className="mrg-stat-divider" />
          <div className="mrg-stat">
            <div className="mrg-stat-num">5+</div>
            <div className="mrg-stat-label">Years of Trust</div>
          </div>
          <div className="mrg-stat-divider" />
          <div className="mrg-stat">
            <div className="mrg-stat-num">Bhopal</div>
            <div className="mrg-stat-label">Proudly Local</div>
          </div>
        </section>

        <section className="mrg-grid-section">
          {businesses.length === 0 ? (
            <p className="empty-note" style={{ textAlign: "center" }}>
              Businesses will appear here once added from the admin panel.
            </p>
          ) : (
            <div className="mrg-grid">
              {businesses.map((b, i) => (
                <Link href={`/${b.slug}`} key={b._id} className="mrg-card fade-up-scroll">
                  <span className="mrg-card-bignum">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mrg-card-media">
                    {b.coverImage?.url ? (
                      <img src={b.coverImage.url} alt={b.name} />
                    ) : (
                      <div className="mrg-card-media-placeholder">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                          <circle cx="26" cy="26" r="19" stroke="var(--mrg-gold)" strokeWidth="0.8" opacity="0.5" />
                          <circle cx="26" cy="26" r="12" stroke="var(--mrg-red-soft)" strokeWidth="0.8" opacity="0.6" />
                        </svg>
                      </div>
                    )}
                    <div className="mrg-card-media-fade" />
                  </div>
                  <div className="mrg-card-body">
                    {b.logo?.url && <img src={b.logo.url} alt={`${b.name} logo`} className="mrg-card-logo" />}
                    <span className="mrg-card-type">{b.type}</span>
                    <h3>{b.name}</h3>
                    {b.tagline && <p>{b.tagline}</p>}
                    <span className="mrg-card-link">
                      Visit {b.name}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M0 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ---------- Why MR Group ---------- */}
        <section className="mrg-why">
          <div className="section-head fade-up-scroll" style={{ textAlign: "center", margin: "0 auto 56px", maxWidth: 600 }}>
            <span className="eyebrow mrg-eyebrow">The Difference</span>
            <h2>Why MR Group</h2>
          </div>
          <div className="mrg-why-grid">
            <div className="mrg-why-card fade-up-scroll">
              <div className="mrg-why-num">01</div>
              <h3>Family-Run, Personally Overseen</h3>
              <p>Every business under MR Group is hands-on managed — not a franchise, not outsourced. Quality is checked, not assumed.</p>
            </div>
            <div className="mrg-why-card fade-up-scroll">
              <div className="mrg-why-num">02</div>
              <h3>Rooted in Bhopal</h3>
              <p>Built for this city, by people who live in it. Every location is chosen to be easy to reach and comfortable to return to.</p>
            </div>
            <div className="mrg-why-card fade-up-scroll">
              <div className="mrg-why-num">03</div>
              <h3>One Standard, Every Time</h3>
              <p>Whether it's a spa session or a sharp fade, the same attention to detail follows you across every MR Group business.</p>
            </div>
          </div>
        </section>

        {/* ---------- Testimonials ---------- */}
        <section className="mrg-testimonials">
          <div className="section-head fade-up-scroll" style={{ textAlign: "center", margin: "0 auto 56px", maxWidth: 600 }}>
            <span className="eyebrow mrg-eyebrow">What People Say</span>
            <h2>Trusted by Bhopal</h2>
          </div>
          <div className="mrg-testi-row">
            <div className="mrg-testi-card fade-up-scroll">
              <div className="mrg-testi-stars">★★★★★</div>
              <p>"Been going to MR Barber for over a year now. Consistent, clean, and the staff actually listens to what you want."</p>
              <div className="mrg-testi-name">— Regular Client</div>
            </div>
            <div className="mrg-testi-card fade-up-scroll">
              <div className="mrg-testi-stars">★★★★★</div>
              <p>"Castle Wellness is my go-to for a proper reset. Calm space, skilled therapists, never feels rushed."</p>
              <div className="mrg-testi-name">— Regular Client</div>
            </div>
            <div className="mrg-testi-card fade-up-scroll">
              <div className="mrg-testi-stars">★★★★★</div>
              <p>"Love that one group runs multiple places I trust. Booking on WhatsApp is quick and they always confirm fast."</p>
              <div className="mrg-testi-name">— Regular Client</div>
            </div>
          </div>
        </section>

        {/* ---------- Second CTA ---------- */}
        <section className="mrg-cta-band fade-up-scroll">
          <h2>Ready to experience it yourself?</h2>
          <p>Pick a business above and book in seconds on WhatsApp — no forms, no waiting on hold.</p>
          <a
            className="cta-btn"
            href="https://wa.me/919644661776"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat With Us on WhatsApp
          </a>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="mrg-footer-full">
          <div className="mrg-footer-grid">
            <div className="mrg-footer-col">
              <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-footer-logo" />
              <p className="mrg-footer-desc">
                A family of wellness and grooming businesses in Bhopal, built on trust and consistency.
              </p>
            </div>
            <div className="mrg-footer-col">
              <h4>Our Businesses</h4>
              {businesses?.map((b) => (
                <Link href={`/${b.slug}`} key={b._id} className="mrg-footer-link">
                  {b.name}
                </Link>
              ))}
            </div>
            <div className="mrg-footer-col">
              <h4>Get in Touch</h4>
              <a href="https://wa.me/919644661776" target="_blank" rel="noopener noreferrer" className="mrg-footer-link">
                WhatsApp Us
              </a>
              <span className="mrg-footer-link" style={{ opacity: 0.6, cursor: "default" }}>
                Bhopal, Madhya Pradesh
              </span>
            </div>
          </div>
          <div className="mrg-footer-bottom-full">
            <p>© {new Date().getFullYear()} MR Group, Bhopal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await api.get("/businesses");
    return {
      props: { businesses: res.data.businesses },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: { businesses: [] },
      revalidate: 60,
    };
  }
}