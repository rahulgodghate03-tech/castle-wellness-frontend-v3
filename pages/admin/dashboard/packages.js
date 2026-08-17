import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import BusinessSwitcher from "../../../components/admin/BusinessSwitcher";
import api from "../../../lib/api";

const emptyForm = { title: "", therapyCount: "", price: "", isFeatured: false };

export default function PackagesPage() {
  const [business, setBusiness] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const loadPackages = async (biz) => {
    if (!biz) return;
    setLoading(true);
    try {
      const { data } = await api.get(`/admin/packages?business=${biz._id}`);
      setPackages(data.packages);
    } catch (err) {
      toast.error("Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPackages(business);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business]);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (pkg) => {
    setEditingId(pkg._id);
    setForm({
      title: pkg.title,
      therapyCount: pkg.therapyCount,
      price: pkg.price,
      isFeatured: pkg.isFeatured,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!business) return;
    setSaving(true);
    try {
      if (editingId) {
        await api.put(`/admin/packages/${editingId}`, form);
        toast.success("Package updated");
      } else {
        await api.post("/admin/packages", { ...form, business: business._id });
        toast.success("Package added");
      }
      resetForm();
      loadPackages(business);
    } catch (err) {
      toast.error(err.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this package?")) return;
    try {
      await api.delete(`/admin/packages/${id}`);
      toast.success("Package deleted");
      loadPackages(business);
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <DashboardLayout title="Packages">
      <BusinessSwitcher selected={business} onChange={setBusiness} />

      {business && (
        <>
          <form onSubmit={handleSubmit} className="card mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Package Title</label>
              <input
                required
                className="input-field"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. 20 Therapy Package"
              />
            </div>
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Therapy Count</label>
              <input
                required
                type="number"
                min="1"
                className="input-field"
                value={form.therapyCount}
                onChange={(e) => setForm({ ...form, therapyCount: e.target.value })}
                placeholder="20"
              />
            </div>
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Price (₹)</label>
              <input
                required
                type="number"
                min="0"
                className="input-field"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="15000"
              />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <input
                type="checkbox"
                id="featured"
                checked={form.isFeatured}
                onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
                className="accent-gold w-4 h-4"
              />
              <label htmlFor="featured" className="text-sm text-ivory/70">
                Mark as "Most Popular"
              </label>
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" disabled={saving} className="btn-primary">
                {saving ? "Saving..." : editingId ? "Update Package" : "Add Package"}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="btn-ghost">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>

          {loading ? (
            <p className="text-ivory/40 text-sm">Loading packages...</p>
          ) : packages.length === 0 ? (
            <p className="text-ivory/40 text-sm">No packages yet for {business.name} — add the first one above.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {packages.map((p) => (
                <div key={p._id} className={`card text-center relative ${p.isFeatured ? "border-gold" : ""}`}>
                  {p.isFeatured && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gold text-ink text-[10px] font-bold px-3 py-0.5 rounded">
                      Popular
                    </span>
                  )}
                  <div className="text-xs text-ivory/50 mt-2">{p.therapyCount} Sessions</div>
                  <div className="font-display text-3xl text-goldsoft my-2">₹{p.price}</div>
                  <div className="text-[11px] text-ivory/40 mb-4">{p.isActive ? "Active" : "Hidden"}</div>
                  <div className="flex gap-2 text-xs">
                    <button onClick={() => handleEdit(p)} className="btn-ghost flex-1 py-1.5">Edit</button>
                    <button onClick={() => handleDelete(p._id)} className="text-red-400 border border-red-400/30 rounded px-3 hover:bg-red-400/10">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
}
