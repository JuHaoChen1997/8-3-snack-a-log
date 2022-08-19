import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";
import "./Snacks.css";

//get the API url
const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        setSnacks(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="snacksDisplay">
      {snacks.map((snack) => {
        return <Snack data={snack} key={snack.id} />;
      })}
    </section>
  );
}

export default Snacks;
