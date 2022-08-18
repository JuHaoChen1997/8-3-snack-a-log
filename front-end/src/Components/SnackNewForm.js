import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//API url
const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [newSnack, setNewSnack] = useState({
    name: "",
    image: "",
    fiber: null,
    protein: null,
    added_sugar: null,
  });

  const navigate = useNavigate();

  const addNewSnack = (newSnack) => {
    axios
      .post(`${API}/snacks/new`, newSnack)
      .then(() => {
        navigate("/snacks");
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setNewSnack({ ...newSnack, [event.target.id]: event.target.value });
  };

  const handeleSubmit = (event) => {
    event.preventDedault();
    addNewSnack(newSnack);
  };

  return (
    <section>
      <form onSubmit={handeleSubmit}>
        <div>
          <label></label>
        </div>
      </form>
    </section>
  );
}
