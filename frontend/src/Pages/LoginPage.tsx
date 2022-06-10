import { useState } from "react";
import { login, register } from "../Api/UserApi";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page">
      <h1 className="login-title">Login</h1>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className="login-input">
          Username:{" "}
          <input
            placeholder="Enter username"
            type="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label className="login-input">
          Password:{" "}
          <input
            placeholder="Enter password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  );
};

export default LoginPage;
