import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <h1 className="logo">Snacks</h1>
      <Link to="/snacks/new" className="newSnackLink">
        New Snack
      </Link>
      <Link to="/snacks" className="allSnacks">
        All Snacks
      </Link>
      <Link to="/" className="homeLink">
        Home
      </Link>
    </nav>
  );
}

export default Nav;
