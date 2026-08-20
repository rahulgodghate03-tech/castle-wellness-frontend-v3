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








import { useEffect, useState } from "react";
import BusinessLayout from "../../components/BusinessLayout";
import api, { whatsappLink } from "../../lib/api";
import { useBusiness } from "../../hooks/useBusiness";

export default function BusinessPackages() {
  const { slug } = useBusiness();
  const [packages, setPackages] = useState(null);

  useEffect(() => {
    if (!slug) return;
    api.get(`/packages?business=${slug}`).then((res) => setPackages(res.data.packages)).catch(() => setPackages([]));
  }, [slug]);

  return (
    <BusinessLayout title="Packages">
      {(b) => (
        <>
          <section className="page-hero">
            <span className="eyebrow">Membership</span>
            <h1>Packages</h1>
            <p>Return often, save more — {b.name} package pricing.</p>
          </section>

          <section>
            {packages === null ? (
              <p className="loading-note">Loading packages...</p>
            ) : packages.length === 0 ? (
              <p className="empty-note">Packages will appear here once added from the admin panel.</p>
            ) : (
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
                      <div className="price">
                        <sup>₹</sup>
                        {p.price.toLocaleString("en-IN")}
                      </div>
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
            )}
          </section>
        </>
      )}
    </BusinessLayout>
  );
}