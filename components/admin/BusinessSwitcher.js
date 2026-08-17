import { useEffect, useState } from "react";
import api from "../../lib/api";

const STORAGE_KEY = "cw_admin_selected_business";

export default function BusinessSwitcher({ selected, onChange }) {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/admin/businesses")
      .then((res) => {
        const list = res.data.businesses;
        setBusinesses(list);

        const savedId = localStorage.getItem(STORAGE_KEY);
        const savedBusiness = list.find((b) => b._id === savedId);
        const initial = savedBusiness || list[0] || null;
        if (initial) onChange(initial);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const business = businesses.find((b) => b._id === e.target.value);
    if (business) {
      localStorage.setItem(STORAGE_KEY, business._id);
      onChange(business);
    }
  };

  if (loading) return <p className="text-ivory/40 text-sm mb-6">Loading businesses...</p>;

  if (businesses.length === 0) {
    return (
      <div className="card mb-6 text-sm text-ivory/60">
        No businesses yet — add one first from{" "}
        <a href="/admin/dashboard/businesses" className="text-goldsoft underline">
          Businesses
        </a>
        .
      </div>
    );
  }

  return (
    <div className="mb-6 flex items-center gap-3">
      <label className="text-xs text-ivory/50 whitespace-nowrap">Managing:</label>
      <select value={selected?._id || ""} onChange={handleChange} className="input-field max-w-xs">
        {businesses.map((b) => (
          <option key={b._id} value={b._id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>
  );
}
