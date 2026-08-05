import { Link } from "react-router-dom";

function PackageCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />

      <h2>{props.title}</h2>

      <h3>{props.price}</h3>

      <Link to="/Contact">
        <button>Book Now</button>
      </Link>
    </div>
  );
}

export default PackageCard;