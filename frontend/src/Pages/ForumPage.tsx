import { ForumPostProps } from "../Components/ForumPost";
import ForumPost from "../Components/ForumPost";

export interface ForumPageProps {
  forumPosts: ForumPostProps[];
}

const ForumPage = (props: ForumPageProps) => {
  return (
    <div className="page">
      <h1 className="page-title">FORUM</h1>
      <div className="forum-page-posts-section">
        {props.forumPosts.map((post) => (
          <ForumPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
