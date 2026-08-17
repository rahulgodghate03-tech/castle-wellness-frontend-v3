import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

export default function AdminIndex() {
  const { admin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    router.replace(admin ? "/admin/dashboard/services" : "/admin/login");
  }, [loading, admin, router]);

  return null;
}
