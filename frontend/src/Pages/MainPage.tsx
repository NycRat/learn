import PostInfo from "../Models/Post";
import ForumSection from "../Components/ForumSection";

export interface MainPageProps {
  topForumPosts: PostInfo[];
}

const MainPage = (props: MainPageProps) => {
  return (
    <div className="page">
      <h1 className="page-title">LEARN</h1>
      <div className="main-page-left-section">
        <ForumSection forumPosts={props.topForumPosts} />
      </div>
    </div>
  );
};

export default MainPage;
