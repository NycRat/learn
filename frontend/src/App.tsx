import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import NotFoundPage from "./NotFoundPage";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <div className={"app theme-" + theme}>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
      <button
        className="theme-button"
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
