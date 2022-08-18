import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";
import "./Snack.css";

function Snack(props) {
  const { id, name, is_healthy, image } = props.data;
  return (
    <div className="Snack">
      <Link to={`/snacks/${id}`}>
        <h4>
          <span>
            {" "}
            <img
              src={is_healthy ? heartSolid : heartRegular}
              alt={is_healthy ? "healthy food" : "unhealthy food"}
            />
          </span>
          {name}
        </h4>
        <span>
          <img src={`${image}`} alt={`${name}`} />
        </span>
      </Link>
    </div>
  );
}

export default Snack;
