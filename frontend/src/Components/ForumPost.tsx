export interface ForumPostProps {
  id: number;
  title: string;
  content: string;
}

const ForumPost = (props: ForumPostProps) => {
  return (
    <div className="forum-post">
      <h2 className="forum-post-title">{props.title}</h2>
      <p className="forum-post-content">{props.content}</p>
    </div>
  );
};

export default ForumPost;
