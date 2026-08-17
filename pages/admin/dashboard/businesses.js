import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import api from "../../../lib/api";

const emptyForm = {
  name: "",
  type: "spa",
  tagline: "",
  description: "",
  phone: "",
  whatsappNumber: "",
  address: "",
};

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [logoFile, setLogoFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const loadBusinesses = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/admin/businesses");
      setBusinesses(data.businesses);
    } catch (err) {
      toast.error("Failed to load businesses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBusinesses();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setLogoFile(null);
    setCoverFile(null);
    setEditingId(null);
  };

  const handleEdit = (b) => {
    setEditingId(b._id);
    setForm({
      name: b.name,
      type: b.type,
      tagline: b.tagline || "",
      description: b.description || "",
      phone: b.phone || "",
      whatsappNumber: b.whatsappNumber || "",
      address: b.address || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, val]) => fd.append(key, val));
    if (logoFile) fd.append("logo", logoFile);
    if (coverFile) fd.append("coverImage", coverFile);

    try {
      if (editingId) {
        await api.put(`/admin/businesses/${editingId}`, fd);
        toast.success("Business updated");
      } else {
        await api.post("/admin/businesses", fd);
        toast.success("Business added");
      }
      resetForm();
      loadBusinesses();
    } catch (err) {
      toast.error(err.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this business? Its services/packages/gallery will remain but become unreachable.")) return;
    try {
      await api.delete(`/admin/businesses/${id}`);
      toast.success("Business deleted");
      loadBusinesses();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const toggleActive = async (b) => {
    try {
      await api.put(`/admin/businesses/${b._id}`, { isActive: !b.isActive });
      loadBusinesses();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <DashboardLayout title="Businesses">
      <form onSubmit={handleSubmit} className="card mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-ivory/50 mb-1.5 block">Business Name</label>
          <input
            required
            className="input-field"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. MR Barber"
          />
        </div>
        <div>
          <label className="text-xs text-ivory/50 mb-1.5 block">Type</label>
          <select className="input-field" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="spa">Spa</option>
            <option value="salon">Salon</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-ivory/50 mb-1.5 block">Phone</label>
          <input
            className="input-field"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 73895 69421"
          />
        </div>
        <div>
          <label className="text-xs text-ivory/50 mb-1.5 block">WhatsApp Number (digits only, with country code)</label>
          <input
            className="input-field"
            value={form.whatsappNumber}
            onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
            placeholder="917389569421"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs text-ivory/50 mb-1.5 block">Tagline (short, shown on MR Group homepage card)</label>
          <input
            className="input-field"
            value={form.tagline}
            onChange={(e) => setForm({ ...form, tagline: e.target.value })}
            placeholder="e.g. Precision cuts, sharp style."
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs text-ivory/50 mb-1.5 block">Description</label>
          <textarea
            rows={3}
            className="input-field"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Longer About text shown on this business's own page"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs text-ivory/50 mb-1.5 block">Address</label>
          <input
            className="input-field"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Full address for the location map"
          />
        </div>
        <div>
          <label className="text-xs text-ivory/50 mb-1.5 block">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogoFile(e.target.files[0])}
            className="input-field file:mr-3 file:bg-gold/20 file:border-0 file:text-goldsoft file:rounded file:px-3 file:py-1 file:text-xs"
          />
        </div>
        <div>
          <label className="text-xs text-ivory/50 mb-1.5 block">Cover Image (used on homepage card + About page)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverFile(e.target.files[0])}
            className="input-field file:mr-3 file:bg-gold/20 file:border-0 file:text-goldsoft file:rounded file:px-3 file:py-1 file:text-xs"
          />
        </div>
        <div className="md:col-span-2 flex gap-3">
          <button type="submit" disabled={saving} className="btn-primary">
            {saving ? "Saving..." : editingId ? "Update Business" : "Add Business"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="btn-ghost">
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p className="text-ivory/40 text-sm">Loading businesses...</p>
      ) : businesses.length === 0 ? (
        <p className="text-ivory/40 text-sm">No businesses yet — add your first one above.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businesses.map((b) => (
            <div key={b._id} className="card">
              {b.coverImage?.url && (
                <img src={b.coverImage.url} alt={b.name} className="w-full h-32 object-cover rounded mb-3" />
              )}
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-display text-xl text-ivory">{b.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded ${b.isActive ? "bg-forest text-ivory/80" : "bg-white/10 text-ivory/40"}`}>
                  {b.isActive ? "Live" : "Hidden"}
                </span>
              </div>
              <p className="text-xs text-ivory/40 mb-1">mrgroup.com/{b.slug}</p>
              <p className="text-xs text-ivory/50 mb-3">{b.tagline}</p>
              <div className="flex gap-2 text-xs">
                <button onClick={() => handleEdit(b)} className="btn-ghost flex-1 py-1.5">Edit</button>
                <button onClick={() => toggleActive(b)} className="btn-ghost flex-1 py-1.5">
                  {b.isActive ? "Hide" : "Show"}
                </button>
                <button onClick={() => handleDelete(b._id)} className="text-red-400 border border-red-400/30 rounded px-3 hover:bg-red-400/10">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}
