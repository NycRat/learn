import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./Styles/App.scss";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";
import ForumPage from "./Pages/ForumPage";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <div className={"app theme-" + theme}>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/forum" element={<ForumPage />} />
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
