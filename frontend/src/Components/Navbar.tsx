const Navbar = (props: { username: string }) => {
  return (
    <nav className="navbar">
      <a className="nav-link nav-left" href="/#/">
        Home
      </a>
      <a className="nav-link nav-left" href="/#/forum">
        Forum
      </a>
      {props.username !== "" ? (
        <a className="nav-link nav-right" href="/#/TODO">
          {props.username}
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
