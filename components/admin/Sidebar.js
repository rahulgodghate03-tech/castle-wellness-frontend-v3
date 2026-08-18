import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const links = [
  { href: "/admin/dashboard/businesses", label: "Businesses", icon: "🏢" },
  { href: "/admin/dashboard/services", label: "Services", icon: "🧖" },
  { href: "/admin/dashboard/packages", label: "Packages", icon: "📦" },
  { href: "/admin/dashboard/gallery", label: "Gallery", icon: "🖼️" },
];

export default function Sidebar() {
  const router = useRouter();
  const { admin, logout } = useAuth();

  return (
    <aside className="w-64 shrink-0 bg-inksoft border-r border-gold/15 min-h-screen flex flex-col">
      <div className="p-6 border-b border-gold/15">
        <div className="font-display text-2xl">
          Mr <span className="text-gold">Group</span>
        </div>
        <div className="text-xs text-ivory/40 mt-1 tracking-wide">Admin Panel</div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const active = router.pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded text-sm transition-colors ${
                active
                  ? "bg-gold/10 text-goldsoft border border-gold/30"
                  : "text-ivory/70 hover:bg-white/5 border border-transparent"
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gold/15">
        <div className="text-xs text-ivory/50 mb-3 px-1">
          Logged in as
          <br />
          <span className="text-ivory/80">{admin?.name}</span>
        </div>
        <button onClick={logout} className="btn-ghost w-full text-center">
          Log Out
        </button>
      </div>
    </aside>
  );
}
