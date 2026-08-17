import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import BusinessSwitcher from "../../../components/admin/BusinessSwitcher";
import api from "../../../lib/api";

export default function GalleryPage() {
  const [business, setBusiness] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("ambiance");
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const loadImages = async (biz) => {
    if (!biz) return;
    setLoading(true);
    try {
      const { data } = await api.get(`/admin/gallery?business=${biz._id}`);
      setImages(data.images);
    } catch (err) {
      toast.error("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages(business);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!business) return;
    if (!imageFile) {
      toast.error("Please choose an image first");
      return;
    }
    setSaving(true);
    const fd = new FormData();
    fd.append("business", business._id);
    fd.append("caption", caption);
    fd.append("category", category);
    fd.append("image", imageFile);

    try {
      await api.post("/admin/gallery", fd);
      toast.success("Image uploaded");
      setCaption("");
      setImageFile(null);
      document.getElementById("gallery-file-input").value = "";
      loadImages(business);
    } catch (err) {
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this image?")) return;
    try {
      await api.delete(`/admin/gallery/${id}`);
      toast.success("Image deleted");
      loadImages(business);
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const toggleActive = async (img) => {
    try {
      await api.put(`/admin/gallery/${img._id}`, { isActive: !img.isActive });
      loadImages(business);
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <DashboardLayout title="Gallery">
      <BusinessSwitcher selected={business} onChange={setBusiness} />

      {business && (
        <>
          <form onSubmit={handleUpload} className="card mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="text-xs text-ivory/50 mb-1.5 block">Image</label>
              <input
                id="gallery-file-input"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="input-field file:mr-3 file:bg-gold/20 file:border-0 file:text-goldsoft file:rounded file:px-3 file:py-1 file:text-xs"
              />
            </div>
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
                <option value="ambiance">Ambiance</option>
                <option value="suite">Suite</option>
                <option value="treatment">Treatment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-ivory/50 mb-1.5 block">Caption (optional)</label>
              <input
                className="input-field"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="e.g. Private steam suite"
              />
            </div>
            <div className="md:col-span-4">
              <button type="submit" disabled={saving} className="btn-primary">
                {saving ? "Uploading..." : "Upload Image"}
              </button>
            </div>
          </form>

          {loading ? (
            <p className="text-ivory/40 text-sm">Loading gallery...</p>
          ) : images.length === 0 ? (
            <p className="text-ivory/40 text-sm">No images yet for {business.name} — upload the first one above.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img) => (
                <div key={img._id} className="card p-2">
                  <img src={img.image.url} alt={img.caption} className="w-full h-40 object-cover rounded mb-2" />
                  <div className="text-xs text-ivory/60 px-1 mb-1 truncate">{img.caption || img.category}</div>
                  <div className="flex gap-1.5 text-[11px] px-1">
                    <button onClick={() => toggleActive(img)} className="btn-ghost flex-1 py-1">
                      {img.isActive ? "Hide" : "Show"}
                    </button>
                    <button onClick={() => handleDelete(img._id)} className="text-red-400 border border-red-400/30 rounded px-2">
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
