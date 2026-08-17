import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back");
      router.push("/admin/dashboard/services");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-root min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <form onSubmit={handleSubmit} className="w-full max-w-sm card">
        <div className="text-center mb-8">
          <div className="font-display text-3xl">
            Castle <span className="text-gold">Wellness</span>
          </div>
          <div className="text-xs text-ivory/40 mt-1 tracking-widest uppercase">Admin Panel</div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-ivory/50 mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="admin@castlewellness.com"
            />
          </div>
          <div>
            <label className="text-xs text-ivory/50 mb-1.5 block">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full mt-6">
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
