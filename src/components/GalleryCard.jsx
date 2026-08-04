import "./GalleryCard.css";

function GalleryCard({ image, title }) {
  return (
    <div className="gallery-card">
      <img src={image} alt={title} />

      <div className="gallery-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default GalleryCard;