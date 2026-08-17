import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("cw_admin_token");
    const savedUser = localStorage.getItem("cw_admin_user");
    if (token && savedUser) {
      setAdmin(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("cw_admin_token", data.token);
    localStorage.setItem("cw_admin_user", JSON.stringify(data.admin));
    setAdmin(data.admin);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("cw_admin_token");
    localStorage.removeItem("cw_admin_user");
    setAdmin(null);
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
