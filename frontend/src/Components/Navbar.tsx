import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="navbar">
      <a className="nav-link" href="/#/">
        Home
      </a>
      <a className="nav-link" href="/#/forum">
        Forum
      </a>
      <a className="nav-link" href="/#/tutorials">
        Tutorials
      </a>
      {user !== "" ? (
        <a className="nav-link nav-right" href={"/#/user/" + user}>
          {user}
        </a>
      ) : (
        <span>
          <a className="nav-link nav-right" href="/#/signup">
            Signup
          </a>
          <a className="nav-link nav-right" href="/#/login">
            Login
          </a>
        </span>
      )}
    </nav>
  );
};

export default Navbar;
