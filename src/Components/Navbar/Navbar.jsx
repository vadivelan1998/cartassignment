import "./Navbar.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button className="signup">Signup</button>
      </Link>
      <Link to="/">
        <button className="login">Login</button>
      </Link>
      <Link to="">
        <button className="cartt">
          Cart :
          <FontAwesomeIcon
            style={{ color: "black", background: "white" }}
            icon={faCartShopping}
          />
          <sup style={{ background: "white" }}></sup>
        </button>
      </Link>
    </div>
  );
};
