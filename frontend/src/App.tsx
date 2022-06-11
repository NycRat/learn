import { HashRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import Navbar from "./Components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";
import ForumPage from "./Pages/ForumPage";
import PostInfo from "./Models/Post";
import ForumPostPage from "./Pages/ForumPostPage";
import { getRecentForumPosts } from "./Api/ForumApi";
import LoginPage from "./Pages/LoginPage";
import { getUserFromToken } from "./Api/UserApi";
import RegisterPage from "./Pages/RegisterPage";

type Theme = "light" | "dark";

export const UserContext = createContext({
  user: "",
  setUser: (val: string) => {},
});

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const [forumPosts, setForumPosts] = useState<PostInfo[]>([]);
  const [user, setUser] = useState<string>(""); // for now, just a string
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInfo = async () => {
      const user = await getUserFromToken(localStorage.getItem("token"));
      setUser(user ? user.username : "");
      const posts = await getRecentForumPosts();
      setForumPosts(posts);
      setIsLoading(false);
    };
    fetchInfo();
  }, []);

  return (
    <div className={"app theme-" + theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage topForumPosts={forumPosts} />} />
            <Route
              path="/forum/post/:id"
              element={<ForumPostPage id={null} />}
            />
            <Route
              path="/forum"
              element={<ForumPage forumPosts={forumPosts} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
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
      </UserContext.Provider>
    </div>
  );
};

export default App;
