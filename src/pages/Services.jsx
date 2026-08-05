import "./Services.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

function Services(){

    return(

        <>

        <Navbar/>

        <section className="services-page">
          <h1>Our Services</h1>

          <div className="services">

            <ServiceCard
            title="Wedding Planning"
            description="Complete Wedding Planning"
            image="/wedding-event/images/T&C4.jpeg"
            />

            <ServiceCard
            title="Photography"
            description="Professional Photography"
            image="/wedding-event/images/service2.jpeg"
            />

            <ServiceCard
            title="Decoration"
            description="Luxury Decorations"
            image="/wedding-event/images/H2.jpeg"
            />

          <ServiceCard
          title="Catering"
          description="Delicious vegetarian and non-vegetarian menus with premium service."
          image="/wedding-event/images/service9.jpeg"
        />

        <ServiceCard
        title="Professional Staff"
        description="Experienced event coordinators, decorators, and hospitality staff."
        image="/wedding-event/images/Service1.jpeg"
        />

        <ServiceCard
          title="Entertainment"
          description="DJ, live music, dance performances, and cultural programs."
          image="/wedding-event/images/service4.jpeg"
        />

          </div>
        </section>

        <Footer/>

        </>

    );

}

export default Services;