import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SnackNewForm.css";
import pokemonsnacks from "../images/pokemonsnacks.jpg";

//API url
const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [newSnack, setNewSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
  });

  const navigate = useNavigate();

  const addNewSnack = (newSnack) => {
    axios
      .post(`${API}/snacks/`, newSnack)
      .then(() => {
        navigate("/snacks");
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setNewSnack({ ...newSnack, [event.target.id]: event.target.value });
  };

  const handeleSubmit = (event) => {
    event.preventDefault();
    addNewSnack(newSnack);
  };

  return (
    <header className="poke" id="pokemon">
      <img
        classname="pokemon-logo"
        src={pokemonsnacks}
        width="300"
        height="200"
        alt="wait unitl the page loads"
      />
      <section className="form">
        <p>Snack Health is determined by</p>
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
              value={newSnack.name}
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
              value={newSnack.image}
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
              value={newSnack.fiber}
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
              value={newSnack.protein}
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
              value={newSnack.added_sugar}
              type="number"
              onChange={handleTextChange}
              required
            ></input>
          </div>
          <br />
          <input type="submit" value="Create New Snack" />
        </form>
        <button type="button">
          <Link to="/snacks">Back</Link>
        </button>
      </section>
    </header>
  );
}

export default SnackNewForm;
