import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";
import ForumPage from "./Pages/ForumPage";
import PostInfo from "./Models/Post";
import ForumPostPage from "./Pages/ForumPostPage";
import { getRecentForumPosts } from "./Api/ForumApi";
import LoginPage from "./Pages/LoginPage";
import { getUserFromToken } from "./Api/UserApi";

type Theme = "light" | "dark";

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const [forumPosts, setForumPosts] = useState<PostInfo[]>([]);
  const [user, setUser] = useState<string>(""); // for now, just a string

  useEffect(() => {
    const fetchInfo = async () => {
      const user = await getUserFromToken();
      setUser(user ? user.username : "");
      const posts = await getRecentForumPosts();
      setForumPosts(posts);
    };
    fetchInfo();
  }, []);

  return (
    <div className={"app theme-" + theme}>
      <Navbar username={user} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage topForumPosts={forumPosts} />} />
          <Route path="/forum/post/:id" element={<ForumPostPage id={null} />} />
          <Route
            path="/forum"
            element={<ForumPage forumPosts={forumPosts} />}
          />
          <Route path="/login" element={<LoginPage />} />
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
