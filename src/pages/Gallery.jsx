
import { useState } from "react";

function Gallery() {
  const images = [
    "https://picsum.photos/seed/techfest1/600/400",
    "https://picsum.photos/seed/techfest2/600/400",
    "https://picsum.photos/seed/techfest3/600/400",
    "https://picsum.photos/seed/techfest4/600/400",
    "https://picsum.photos/seed/techfest5/600/400",
    "https://picsum.photos/seed/techfest6/600/400"
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">

      <section className="gallery-header">
        <h1>TechFest Gallery 📸</h1>
        <p>Explore the moments, memories and excitement.</p>
      </section>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`TechFest event ${index + 1}`}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <span>×</span>
          <img src={selectedImage} alt="Selected TechFest" />
        </div>
      )}

    </div>
  );
}

export default Gallery;