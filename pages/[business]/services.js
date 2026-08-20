// import { useEffect, useState } from "react";
// import BusinessLayout from "../../components/BusinessLayout";
// import api, { whatsappLink } from "../../lib/api";
// import { useBusiness } from "../../hooks/useBusiness";

// export default function BusinessServices() {
//   const { slug } = useBusiness();
//   const [services, setServices] = useState(null);

//   useEffect(() => {
//     if (!slug) return;
//     api.get(`/services?business=${slug}`).then((res) => setServices(res.data.services)).catch(() => setServices([]));
//   }, [slug]);

//   return (
//     <BusinessLayout title="Services & Pricing">
//       {(b) => (
//         <>
//           <section className="page-hero">
//             <span className="eyebrow">Services</span>
//             <h1>Services & Pricing</h1>
//             <p>Every service {b.name} offers, at a glance.</p>
//           </section>

//           <section>
//             {services === null ? (
//               <p className="loading-note">Loading services...</p>
//             ) : services.length === 0 ? (
//               <p className="empty-note">Services will appear here once added from the admin panel.</p>
//             ) : (
//               <div className="services-grid">
//                 {services.map((s, i) => (
//                   <div className="svc-card fade-up" key={s._id}>
//                     {s.image?.url && <img src={s.image.url} alt={s.name} className="svc-img" />}
//                     <div className="svc-body">
//                       <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
//                       <h3>{s.name}</h3>
//                       <p>{s.description}</p>
//                       <div className="svc-price">
//                         <span className="amt">₹{s.price}</span>
//                         <span className="from">{s.durationMinutes} min</span>
//                       </div>
//                       {b.whatsappNumber && (
//                         <a
//                           className="svc-book"
//                           href={whatsappLink(b.whatsappNumber, `Hi! I'd like to book ${s.name} (₹${s.price}).`)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Book This
//                         </a>
//                       )}
//                     </div>
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

export default function BusinessServices() {
  const { slug } = useBusiness();
  const [services, setServices] = useState(null);

  useEffect(() => {
    if (!slug) return;
    api.get(`/services?business=${slug}`).then((res) => setServices(res.data.services)).catch(() => setServices([]));
  }, [slug]);

  const grouped = (services || []).reduce((acc, s) => {
    const cat = s.category || "Services";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(s);
    return acc;
  }, {});

  return (
    <BusinessLayout title="Services & Pricing">
      {(b) => (
        <>
          <section className="page-hero">
            <span className="eyebrow">Services</span>
            <h1>Services & Pricing</h1>
            <p>Every service {b.name} offers, at a glance.</p>
          </section>

          <section>
            {services === null ? (
              <p className="loading-note">Loading services...</p>
            ) : services.length === 0 ? (
              <p className="empty-note">Services will appear here once added from the admin panel.</p>
            ) : (
              Object.entries(grouped).map(([cat, items]) => (
                <div key={cat} className="mb-16">
                  <h2 className="font-display text-3xl text-goldsoft mb-6">{cat}</h2>
                  <div className="services-grid">
                    {items.map((s, i) => (
                      <div className="svc-card fade-up" key={s._id}>
                        {s.image?.url && <img src={s.image.url} alt={s.name} className="svc-img" />}
                        <div className="svc-body">
                          <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
                          <h3>{s.name}</h3>
                          <p>{s.description}</p>
                          <div className="svc-price">
                            <span className="amt">₹{s.price}</span>
                            <span className="from">{s.durationMinutes} min</span>
                          </div>
                          {b.whatsappNumber && (
                            <a
                              className="svc-book"
                              href={whatsappLink(b.whatsappNumber, `Hi! I'd like to book ${s.name} (₹${s.price}).`)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Book This
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </section>
        </>
      )}
    </BusinessLayout>
  );
}