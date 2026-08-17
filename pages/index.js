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










import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import api from "../lib/api";

export default function MRGroupHome() {
  const [businesses, setBusinesses] = useState(null);

  useEffect(() => {
    api.get("/businesses").then((res) => setBusinesses(res.data.businesses)).catch(() => setBusinesses([]));
  }, []);

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

        <section className="mrg-grid-section">
          {businesses === null ? (
            <p className="loading-note" style={{ textAlign: "center" }}>Loading businesses...</p>
          ) : businesses.length === 0 ? (
            <p className="empty-note" style={{ textAlign: "center" }}>
              Businesses will appear here once added from the admin panel.
            </p>
          ) : (
            <div className="mrg-grid">
              {businesses.map((b, i) => (
                <Link href={`/${b.slug}`} key={b._id} className="mrg-card fade-up">
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

        <footer className="mrg-footer">
          <img src="/mr-group-logo.jpg" alt="MR Group" className="mrg-footer-logo" />
          <p>© {new Date().getFullYear()} MR Group, Bhopal. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}