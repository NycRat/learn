import PostInfo from "../Models/Post";
import ForumSection from "../Components/ForumSection";
import { postForumPost } from "../Api/ForumApi";

export interface ForumPageProps {
  forumPosts: PostInfo[];
}

const ForumPage = (props: ForumPageProps) => {
  return (
    <div className="page">
      <h1 className="page-title">FORUM</h1>
      <button
        className="idk"
        onClick={() => {
          postForumPost({
            login: {
              username: "user1",
              password: "password",
            },
            post: {
              title: "NEW POST",
              content: "GReat contTEktnt text",
              date: new Date(),
            },
          });
        }}
      >
        New Post
      </button>
      <ForumSection forumPosts={props.forumPosts} />
    </div>
  );
};

export default ForumPage;
