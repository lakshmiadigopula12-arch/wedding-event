import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard.jsx";

function Testimonials() {

  const reviews = [

    {
      name:"Rahul & Priya",
      event:"Royal Wedding",
      location:"Hyderabad",
      rating:5,
      review:"Everything was perfectly organized. The decorations, food and photography exceeded our expectations."
    },

    {
      name:"Arjun & Sneha",
      event:"Reception",
      location:"Vijayawada",
      rating:5,
      review:"Our dream wedding became a reality. Every guest appreciated the beautiful arrangements."
    },

    {
      name:"Vamsi & Harika",
      event:"Destination Wedding",
      location:"Goa",
      rating:5,
      review:"Excellent planning, luxury decorations and a wonderful experience from beginning to end."
    },

    {
      name:"Karthik & Divya",
      event:"Engagement",
      location:"Chennai",
      rating:4,
      review:"Creative ideas and professional service. Highly recommended for wedding events."
    },

    {
      name:"Sai & Keerthi",
      event:"Wedding",
      location:"Bangalore",
      rating:5,
      review:"Our family loved every moment. The decorations were breathtaking."
    },

    {
      name:"Nikhil & Anusha",
      event:"Reception",
      location:"Hyderabad",
      rating:5,
      review:"Fantastic hospitality and beautiful floral arrangements. Thank you for making our day special."
    }

  ];

  return (

    <>

      <Navbar/>

      <section className="testimonials">

        <h1>Happy Couples ❤️</h1>

        <p>
          Trusted by hundreds of couples for creating unforgettable wedding memories.
        </p>

        <div className="testimonial-container">

          {reviews.map((item,index)=>(

            <TestimonialCard

              key={index}

              image={item.image}

              name={item.name}

              event={item.event}

              location={item.location}

              rating={item.rating}

              review={item.review}

            />

          ))}

        </div>

      </section>

      <Footer/>

    </>

  );

}

export default Testimonials;