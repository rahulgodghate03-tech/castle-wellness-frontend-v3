import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
});

// Attach the saved admin token automatically (harmless for public GET
// requests — the backend simply ignores the header on public routes).
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("cw_admin_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Auto-logout on an expired/invalid admin token.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("cw_admin_token");
      localStorage.removeItem("cw_admin_user");
      if (window.location.pathname.startsWith("/admin") && window.location.pathname !== "/admin/login") {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(err);
  }
);

export default api;

// Every business has its own WhatsApp number now, so this takes the number
// as an argument instead of reading one fixed env var.
export const whatsappLink = (number, message = "") =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
