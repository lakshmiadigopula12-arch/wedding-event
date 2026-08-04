import "./TestimonialCard.css";

function TestimonialCard(props) {
  return (
    <div className="testimonial-card">

      <h2>{props.name}</h2>

      <h4>{props.event}</h4>

      <p className="location">
        📍 {props.location}
      </p>

      <div className="stars">
        {"⭐".repeat(props.rating)}
      </div>

      <p className="review">
        "{props.review}"
      </p>

    </div>
  );
}

export default TestimonialCard;