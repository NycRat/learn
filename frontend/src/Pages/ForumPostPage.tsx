import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForumPostById } from "../Api/ForumApi";
import PostInfo from "../Models/Post";
import NotFoundPage from "./NotFoundPage";

const ForumPostPage = (props: { id: string | null }) => {
  // this the page for displaying a single post

  let { id } = useParams();
  const [post, setPost] = useState<PostInfo | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (props.id === null) {
        if (id !== undefined) {
          setPost(await getForumPostById(id));
        }
      } else {
        setPost(await getForumPostById(props.id));
      }
    };
    fetchPost();
  }, [props.id, id]);

  const [showComments, setShowComments] = useState(false);

  return post === null ? (
    <NotFoundPage />
  ) : (
    <div className="page">
      <div className="forum-post-page-section">
        <h1 className="forum-post-page-title">{post.title}</h1>
        <p className="forum-post-page-info-text">
          {post.author.name} on {post.date.toLocaleDateString("en-US")}
        </p>
        <div className="forum-post-page-content">{post.content}</div>
      </div>

      <div className="forum-post-comment-section">
        <button
          className="show-comments-button"
          onClick={() => setShowComments(!showComments)}
        >
          Comments: {post.comments.length}
        </button>

        {showComments &&
          post.comments.map((comment) => (
            <div className="forum-post-comment">
              {comment.author.name}: {comment.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ForumPostPage;
