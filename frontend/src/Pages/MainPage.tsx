import { ForumPostProps } from "../Components/ForumPost";

export interface MainPageProps {
  topForumPosts: ForumPostProps[];
}

const MainPage = (props: MainPageProps) => {
  return (
    <div className="page">
      <h1 className="page-title">LEARN</h1>
      <div className="forum-section"></div>
    </div>
  );
};

export default MainPage;
