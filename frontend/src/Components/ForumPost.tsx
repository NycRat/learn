import { useNavigate } from "react-router-dom";
import PostInfo from "../Models/Post";

const ForumPost = (props: PostInfo) => {
  const navigate = useNavigate();

  return (
    <div
      className="forum-post"
      onClick={() => {
        navigate("/forum/post/" + props.id);
      }}
    >
      {/* div that reroutes user to forum post page on click */}
      <h2 className="forum-post-title">{props.title}</h2>
      <p className="forum-post-content">{props.content}</p>
    </div>
  );
};

export default ForumPost;
