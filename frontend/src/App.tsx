import { useState } from "react";
import "./App.scss";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <div className={"app " + theme}>
      <h1 className="app-title">LEARN</h1>
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Theme: {theme}
      </button>
    </div>
  );
};

export default App;
