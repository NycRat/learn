import { useNavigate } from "react-router-dom";
import { ForumPageProps } from "../Pages/ForumPage";
import ForumPost from "./ForumPost";

const ForumSection = (props: ForumPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="forum-page-posts-section">
      {!props.forumPosts ? (
        <div>Loading...</div>
      ) : (
        props.forumPosts.map((post) => (
          <div
            key={post._id}
            className="forum-post"
            onClick={() => {
              navigate("/forum/post/" + post._id);
            }}
          >
            {/* div that reroutes user to forum post page on click */}
            <h2 className="forum-post-title">{post.title}</h2>
            <p className="forum-post-content">
              {post.content.substring(0, 20)}
              {post.content.length > 20 && "..."}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ForumSection;
