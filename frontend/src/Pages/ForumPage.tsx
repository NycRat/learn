import PostInfo from "../Models/Post";
import ForumSection from "../Components/ForumSection";
import { useNavigate } from "react-router-dom";

export interface ForumPageProps {
  forumPosts: PostInfo[];
}

const ForumPage = (props: ForumPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="page-title">FORUM</h1>
      <button
        className="idk"
        onClick={() => {
          navigate("/forum/newpost");
        }}
      >
        New Post
      </button>
      <ForumSection forumPosts={props.forumPosts} />
    </div>
  );
};

export default ForumPage;
