import { useContext, useEffect } from "react";
import { UserContext } from "../App";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const toggleNavbarDropdown = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (navbar.className === "navbar") {
        navbar.className += " dropdown-active";
      } else {
        navbar.className = "navbar";
      }
    }
  };

  return (
    <nav id="navbar" className="navbar">
      <a className="nav-link" href="/#/">
        Home
      </a>
      <span className="nav-dropdown">
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
      </span>
      <button className="nav-dropdown-icon" onClick={toggleNavbarDropdown}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
