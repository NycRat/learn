import PostInfo from "../Models/Post";
import ForumSection from "../Components/ForumSection";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export interface ForumPageProps {
  forumPosts: PostInfo[];
}

const ForumPage = (props: ForumPageProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="page">
      <h1 className="page-title">FORUM</h1>
      {user !== "" ? (
        <button
          className="fourm-page-new-post-button"
          onClick={() => {
            navigate("/forum/newpost");
          }}
        >
          New Post
        </button>
      ) : null}
      <ForumSection forumPosts={props.forumPosts} />
    </div>
  );
};

export default ForumPage;
