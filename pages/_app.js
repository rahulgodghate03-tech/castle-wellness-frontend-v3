import "../styles/globals.css";
import "../styles/admin.css";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1b1815",
            color: "#f3ece0",
            border: "1px solid rgba(201,162,75,0.3)",
            fontSize: "14px",
          },
        }}
      />
    </AuthProvider>
  );
}
