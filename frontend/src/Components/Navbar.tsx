import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="navbar">
      <a className="nav-link nav-left" href="/#/">
        Home
      </a>
      <a className="nav-link nav-left" href="/#/forum">
        Forum
      </a>
      {user !== "" ? (
        <a className="nav-link nav-right" href="/#/TODO">
          {user}
        </a>
      ) : (
        <a className="nav-link nav-right" href="/#/login">
          Login
        </a>
      )}
    </nav>
  );
};

export default Navbar;
