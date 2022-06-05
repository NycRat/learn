import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";
import ForumPage from "./Pages/ForumPage";
import PostInfo from "./Models/Post";
import ForumPostPage from "./Pages/ForumPostPage";
import { getRecentForumPosts } from "./Api/ForumApi";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const [forumPosts, setForumPosts] = useState<PostInfo[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getRecentForumPosts();
      setForumPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className={"app theme-" + theme}>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage topForumPosts={forumPosts} />} />
          <Route path="/forum/post/:id" element={<ForumPostPage id={null} />} />
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
