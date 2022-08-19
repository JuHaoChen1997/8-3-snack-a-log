import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//API url
const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  const { snackId } = useParams();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
  });

  const navigate = useNavigate();

  const updateSnack = (snack) => {
    axios
      .put(`${API}/snacks/${snackId}`, snack)
      .then(() => {
        navigate("/snacks");
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${snackId}`)
      .then((response) => {
        setSnack(response.data.payload);
      })
      .catch((error) => console.error(error));
  }, [snackId]);

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handeleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack);
  };

  return (
    <section className="form">
      <ul>
        <li>protein is above 5</li>
        <li>or fiber is above 5</li>
        <li>and sugar is less than 5</li>
      </ul>
      <form onSubmit={handeleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="image">Image: </label>
          <input
            id="image"
            value={snack.image}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="fiber">Fiber: </label>
          <input
            id="fiber"
            value={snack.fiber}
            type="number"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="protein">Protein: </label>
          <input
            id="protein"
            value={snack.protein}
            type="number"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="added_sugar">Added Sugar: </label>
          <input
            id="added_sugar"
            value={snack.added_sugar}
            type="number"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <input type="submit" value="Edit Snack" />
      </form>
      <button type="button">
        <Link to="/snacks">Back</Link>
      </button>
    </section>
  );
}

export default SnackEditForm;
