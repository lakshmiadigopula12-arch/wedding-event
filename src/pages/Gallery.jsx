import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryCard from "../components/GalleryCard";

function Gallery() {

  const images = [
    "/wedding-event/images/D1.jpeg",
    "/wedding-event/images/D2.jpeg",
    "/wedding-event/images/D3.jpeg",
    "/wedding-event/images/D4.jpeg",
    "/wedding-event/images/D5.jpeg",
    "/wedding-event/images/D6.jpeg",
    "/wedding-event/images/D7.jpeg",
    "/wedding-event/images/D8.jpeg",
    "/wedding-event/images/H1.jpeg",
    "/wedding-event/images/H2.jpeg",
    "/wedding-event/images/H3.jpeg",
    "/wedding-event/images/H4.jpeg",
    "/wedding-event/images/H5.jpeg",
    "/wedding-event/images/H6.jpeg",
    "/wedding-event/images/H7.jpeg",
    "/wedding-event/images/H8.jpeg",
    "/wedding-event/images/H9.jpeg",
    "/wedding-event/images/H10.jpeg",
    "/wedding-event/images/H11.jpeg",
    "/wedding-event/images/Service1.jpeg",
    "/wedding-event/images/service2.jpeg",
    "/wedding-event/images/service3.jpeg",
    "/wedding-event/images/service4.jpeg",
    "/wedding-event/images/service5.jpeg",
    "/wedding-event/images/service6.jpeg",
    "/wedding-event/images/service7.jpeg",
    "/wedding-event/images/service8.jpeg",
    "/wedding-event/images/service9.jpeg",
    "/wedding-event/images/service10.jpeg",
    "/wedding-event/images/T&C1.jpeg",
    "/wedding-event/images/T&C2.jpeg",
    "/wedding-event/images/T&C3.jpeg",
    "/wedding-event/images/T&C4.jpeg",
    "/wedding-event/images/T&C5.jpeg",
    "/wedding-event/images/T&C6.jpeg",
    "/wedding-event/images/T&C7.jpeg",
    "/wedding-event/images/T&C8.jpeg",
    "/wedding-event/images/T&C9.jpeg"
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