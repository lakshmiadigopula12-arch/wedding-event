import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import "./Packages.css";

function Packages() {
  return (
    <>
      <Navbar />

      <section className="packages-page">
        <h1 className="title">Wedding Packages</h1>

        <div className="package-container">
          <PackageCard
            title="Silver Package"
            price="$90,000"
            image="/wedding-event/images/silver package.jpeg"
          />

          <PackageCard
            title="Gold Package"
            price="$1,20,000"
            image="/wedding-event/images/golden package.jpeg"
          />

          <PackageCard
            title="Platinum Package"
            price="$1,50,000"
            image="/wedding-event/images/platinum package.jpeg"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Packages;