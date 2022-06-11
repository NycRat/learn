import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByName } from "../Api/ForumApi";
import { UserContext } from "../App";
import NotFoundPage from "./NotFoundPage";

const UserPage = () => {
  let { username } = useParams();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (username) {
      getUserByName(username);
    }
  });

  return !username ? (
    <NotFoundPage />
  ) : (
    <div className="page">
      <h1 className="user-page-title">{username}</h1>
      {user === username ? (
        <button
          onClick={() => {
            setUser("");
            localStorage.removeItem("token");
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default UserPage;
