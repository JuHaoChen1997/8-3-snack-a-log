import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";
import "./SnackDetail.css";

const API = process.env.REACT_APP_API_URL;

function SnackDetail() {
  const { snackId } = useParams(); //get the snackId from the broswer url
  const [snack, setSnack] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${snackId}`)
      .then((response) => {
        setSnack(response.data.payload);
      })
      .catch((error) => console.error("catch", error));
  }, [snackId]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${snackId}`)
      .then((response) => {
        navigate("/snacks");
      })
      .catch((error) => console.error("catch", error));
  };

  return (
    <section>
      <article>
        <h3>Name: {snack.name} </h3>
        <div>
          <img src={snack.image} alt={snack.name} />
        </div>
        <div>Protein: {snack.protein}</div>
        <div>Fiber: {snack.fiber}</div>
        <div>Added Sugar: {snack.added_sugar}</div>
      </article>
      <div>
        <aside>
          <img
            src={snack.is_healthy ? heartSolid : heartRegular}
            alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
            className="heartImage"
          />
        </aside>
        <div>
          {snack.is_healthy
            ? "this snack is healthy"
            : "this snack is unhealthy"}
        </div>
      </div>
      <div>
        <Link to="/snacks">
          <button>Back</button>
        </Link>
        <button>
          <Link to={`/snacks/${snackId}/edit`}>Edit</Link>
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
}

export default SnackDetail;
