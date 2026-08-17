import { useEffect, useState } from "react";
import BusinessLayout from "../../components/BusinessLayout";
import api from "../../lib/api";
import { useBusiness } from "../../hooks/useBusiness";

export default function BusinessGallery() {
  const { slug } = useBusiness();
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (!slug) return;
    api.get(`/gallery?business=${slug}`).then((res) => setImages(res.data.images)).catch(() => setImages([]));
  }, [slug]);

  return (
    <BusinessLayout title="Gallery">
      {(b) => (
        <>
          <section className="page-hero">
            <span className="eyebrow">A Glimpse Within</span>
            <h1>Gallery</h1>
            <p>An impression of the space, straight from {b.name}.</p>
          </section>

          <section>
            {images === null ? (
              <p className="loading-note">Loading gallery...</p>
            ) : images.length === 0 ? (
              <div className="gallery-strip">
                <div className="g-empty">Photos will appear here once uploaded from the admin panel.</div>
              </div>
            ) : (
              <div className="gallery-strip">
                {images.map((img) => (
                  <div className="g-tile fade-up" key={img._id}>
                    <img src={img.image.url} alt={img.caption || img.category} />
                    {img.caption && <span className="tile-label">{img.caption}</span>}
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </BusinessLayout>
  );
}
