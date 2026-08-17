import { whatsappLink } from "../lib/api";

export default function BusinessFooter({ business }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="logo" style={{ marginBottom: 16 }}>
            {business.name}
          </div>
          {business.description && <p style={{ maxWidth: 280 }}>{business.description}</p>}
        </div>
        <div>
          <h4>Visit</h4>
          <p>{business.address || "Address coming soon"}</p>
        </div>
        <div>
          <h4>Connect</h4>
          {business.phone && <a href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a>}
          {business.whatsappNumber && (
            <a href={whatsappLink(business.whatsappNumber)} target="_blank" rel="noopener noreferrer">
              WhatsApp Booking
            </a>
          )}
          <a href="/" style={{ marginTop: 8, opacity: 0.6 }}>
            Part of MR Group
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <span>Open daily · By appointment</span>
      </div>
    </footer>
  );
}
