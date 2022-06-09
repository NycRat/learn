import { ForumPageProps } from "../Pages/ForumPage";
import ForumPost from "./ForumPost";

const ForumSection = (props: ForumPageProps) => {
  return (
    <div className="forum-page-posts-section">
      {!props.forumPosts ? (
        <div>Loading...</div>
      ) : (
        props.forumPosts.map((post) => <ForumPost key={post._id} {...post} />)
      )}
    </div>
  );
};

export default ForumSection;
