import { ForumPageProps } from "../Pages/ForumPage";
import ForumPost from "./ForumPost";

const ForumSection = (props: ForumPageProps) => {
  return (
    <div className="forum-page-posts-section">
      {props.forumPosts.map((post) => (
        <ForumPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ForumSection;
