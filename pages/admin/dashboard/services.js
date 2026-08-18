import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../../components/admin/DashboardLayout";
import BusinessSwitcher from "../../../components/admin/BusinessSwitcher";
import api from "../../../lib/api";

const emptyForm = { name: "", description: "", price: "", discountPrice: "", durationMinutes: 60 };

export default function ServicesPage() {
  const [business, setBusiness] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const loadServices = async (biz) => {
    if (!biz) return;
    setLoading(true);
    try {
      const { data } = await api.get(`/admin/services?business=${biz._id}`);
      setServices(data.services);
    } catch (err) {
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices(business);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business]);

  const resetForm = () => {
    setForm(emptyForm);
    setImageFile(null);
    setEditingId(null);
  };

  const handleEdit = (service) => {
    setEditingId(service._id);
       setForm({
      name: service.name,
      description: service.description,
      price: service.price,
      discountPrice: service.discountPrice || "",
      durationMinutes: service.durationMinutes,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!business) return;
    setSaving(true);

    const fd = new FormData();
    Object.entries(form).forEach(([key, val]) => fd.append(key, val));
    if (!editingId) fd.append("business", business._id);
    if (imageFile) fd.append("image", imageFile);

    try {
      if (editingId) {
        await api.put(`/admin/services/${editingId}`, fd);
        toast.success("Service updated");
      } else {
        await api.post("/admin/services", fd);
        toast.success("Service added");
      }
      resetForm();
      loadServices(business);
    } catch (err) {
      toast.error(err.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this service?")) return;
    try {
      await api.delete(`/admin/services/${id}`);
      toast.success("Service deleted");
      loadServices(business);
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const toggleActive = async (service) => {
    try {
      await api.put(`/admin/services/${service._id}`, { isActive: !service.isActive });
      loadServices(business);
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <DashboardLayout title="Services">
      <BusinessSwitcher selected={business} onChange={setBusiness} />

      {business && (
        <>
          <form onSubmit={handleSubmit} className="card mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Service Name</label>
              <input
                required
                className="input-field"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Balinese Massage"
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
                placeholder="3000"
              />
            </div>
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Discount Price (₹) — optional</label>
              <input
                type="number"
                min="0"
                className="input-field"
                value={form.discountPrice}
                onChange={(e) => setForm({ ...form, discountPrice: e.target.value })}
                placeholder="Leave empty for no discount"
              />
            </div>
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="input-field file:mr-3 file:bg-gold/20 file:border-0 file:text-goldsoft file:rounded file:px-3 file:py-1 file:text-xs"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-ivory/50 mb-1.5 block">Description</label>
              <textarea
                required
                rows={3}
                className="input-field"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Short description shown on the website"
              />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" disabled={saving} className="btn-primary">
                {saving ? "Saving..." : editingId ? "Update Service" : "Add Service"}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="btn-ghost">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>

          {loading ? (
            <p className="text-ivory/40 text-sm">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-ivory/40 text-sm">No services yet for {business.name} — add the first one above.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <div key={s._id} className="card">
                  {s.image?.url && (
                    <img src={s.image.url} alt={s.name} className="w-full h-36 object-cover rounded mb-3" />
                  )}
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-display text-xl text-ivory">{s.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded ${s.isActive ? "bg-forest text-ivory/80" : "bg-white/10 text-ivory/40"}`}>
                      {s.isActive ? "Active" : "Hidden"}
                    </span>
                  </div>
                  <p className="text-xs text-ivory/50 mb-3 line-clamp-2">{s.description}</p>
                                    <div className="mb-3">
                    {s.discountPrice ? (
                      <>
                        <span className="text-ivory/40 text-sm line-through mr-2">₹{s.price}</span>
                        <span className="text-goldsoft font-display text-lg">₹{s.discountPrice}</span>
                      </>
                    ) : (
                      <span className="text-goldsoft font-display text-lg">₹{s.price}</span>
                    )}
                  </div>
                  <div className="flex gap-2 text-xs">
                    <button onClick={() => handleEdit(s)} className="btn-ghost flex-1 py-1.5">Edit</button>
                    <button onClick={() => toggleActive(s)} className="btn-ghost flex-1 py-1.5">
                      {s.isActive ? "Hide" : "Show"}
                    </button>
                    <button onClick={() => handleDelete(s._id)} className="text-red-400 border border-red-400/30 rounded px-3 hover:bg-red-400/10">
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
