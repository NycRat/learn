import { useContext, useState } from "react";
import { getUserFromToken, login, register } from "../Api/UserApi";
import { UserContext } from "../App";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="page">
      <h1 className="login-title">Login</h1>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Username:{" "}
          <input
            className="login-input"
            placeholder="Enter username"
            type="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:{" "}
          <input
            className="login-input"
            placeholder="Enter password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <button
        onClick={() => {
          register(username, password).then(async (res) => {
            if (res) {
              localStorage.setItem("token", res.data.token);
              const user = await getUserFromToken(
                localStorage.getItem("token")
              );
              setUser(user.username);
            }
          });
        }}
      >
        Sign up
      </button>
    </div>
  );
};

export default RegisterPage;
