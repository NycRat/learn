import PostInfo from "../Models/Post";
import ForumSection from "../Components/ForumSection";

export interface ForumPageProps {
  forumPosts: PostInfo[];
}

const ForumPage = (props: ForumPageProps) => {
  return (
    <div className="page">
      <h1 className="page-title">FORUM</h1>
      <ForumSection forumPosts={props.forumPosts} />
    </div>
  );
};

export default ForumPage;
