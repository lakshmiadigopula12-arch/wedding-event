import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryCard from "../components/GalleryCard";

function Gallery() {

  const images = [
    "/images/D1.jpeg",
    "/images/D2.jpeg",
    "/images/D3.jpeg",
    "/images/D4.jpeg",
    "/images/D5.jpeg",
    "/images/D6.jpeg",
    "/images/D7.jpeg",
    "/images/D8.jpeg",
    "/images/H1.jpeg",
    "/images/H2.jpeg",
    "/images/H3.jpeg",
    "/images/H4.jpeg",
    "/images/H5.jpeg",
    "/images/H6.jpeg",
    "/images/H7.jpeg",
    "/images/H8.jpeg",
    "/images/H9.jpeg",
    "/images/H10.jpeg",
    "/images/H11.jpeg",
    "/images/Service1.jpeg",
    "/images/service2.jpeg",
    "/images/service3.jpeg",
    "/images/service4.jpeg",
    "/images/service5.jpeg",
    "/images/service6.jpeg",
    "/images/service7.jpeg",
    "/images/service8.jpeg",
    "/images/service9.jpeg",
    "/images/service10.jpeg",
    "/images/T&C1.jpeg",
    "/images/T&C2.jpeg",
    "/images/T&C3.jpeg",
    "/images/T&C4.jpeg",
    "/images/T&C5.jpeg",
    "/images/T&C6.jpeg",
    "/images/T&C7.jpeg",
    "/images/T&C8.jpeg",
    "/images/T&C9.jpeg"
  ];

  return (
    <>
      <Navbar />

      <section className="gallery-section">
        <h1>Wedding Gallery</h1>

        <div className="gallery-container">
          {images.map((image, index) => (
            <GalleryCard
              key={index}
              image={image}
              title={`Gallery ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;