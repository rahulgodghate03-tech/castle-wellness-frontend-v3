import Sidebar from "./Sidebar";
import ProtectedRoute from "./ProtectedRoute";

export default function DashboardLayout({ title, children }) {
  return (
    <ProtectedRoute>
      <div className="admin-root flex">
        <Sidebar />
        <main className="flex-1 p-8 max-w-6xl">
          <h1 className="font-display text-3xl text-ivory mb-8">{title}</h1>
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
