import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Styles/App.scss";
import "./Styles/Page.scss";
import "./Styles/Forum.scss";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";
import ForumPage from "./Pages/ForumPage";
import { ForumPostProps } from "./Components/ForumPost";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const [forumPosts, setForumPosts] = useState<ForumPostProps[]>([]);

  useEffect(() => {
    // fetch("/api/forum-posts")
    //   .then((response) => response.json())
    //   .then((data) => setForumPosts(data));

    let tempForumPosts: ForumPostProps[] = [];
    for (let i = 0; i < 10; i++) {
      // temporary data before backend is implemented
      tempForumPosts.push({
        id: i,
        title: `Post ${i}`,
        content: `Content of post ${i}`,
      });
    }
    setForumPosts(tempForumPosts);
  }, []);

  return (
    <div className={"app theme-" + theme}>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage topForumPosts={forumPosts} />} />
          <Route
            path="/forum"
            element={<ForumPage forumPosts={forumPosts} />}
          />
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
