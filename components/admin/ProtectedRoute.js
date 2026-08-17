import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !admin) {
      router.replace("/admin/login");
    }
  }, [loading, admin, router]);

  if (loading || !admin) {
    return (
      <div className="admin-root min-h-screen flex items-center justify-center text-ivory/50 text-sm">
        Loading...
      </div>
    );
  }

  return children;
}
