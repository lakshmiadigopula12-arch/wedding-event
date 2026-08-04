import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";

function Packages() {
  return (
    <>
      <Navbar />

      <h1 className="title">Wedding Packages</h1>

      <div className="package-container">
        <PackageCard
          title="Silver Package"
          price="$90,000"
          image="/images/silver package.jpeg"
        />

        <PackageCard
          title="Gold Package"
          price="$1,20,000"
          image="/images/golden package.jpeg"
        />

        <PackageCard
          title="Platinum Package"
          price="$1,50,000"
          image="/images/platinum package.jpeg"
        />
      </div>

      <Footer />
    </>
  );
}

export default Packages;