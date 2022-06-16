import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getForumPostById,
  forumSendComment,
  getCommentsByPostId,
} from "../Api/ForumApi";
import PostInfo from "../Models/Post";
import CommentInfo from "../Models/Comment";
import NotFoundPage from "./NotFoundPage";
import { useContext } from "react";
import { UserContext } from "../App";

const ForumPostPage = (props: { id: string | null }) => {
  // this the page for displaying a single post

  let { id } = useParams();
  const [post, setPost] = useState<PostInfo | null>({
    _id: "",
    author: "",
    date: new Date(),
    title: "",
    content: "",
  });

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState<CommentInfo[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      if (props.id === null) {
        if (id !== undefined) {
          setPost(await getForumPostById(id));
          setPostComments(await getCommentsByPostId(id));
        }
      } else {
        setPost(await getForumPostById(props.id));
        setPostComments(await getCommentsByPostId(props.id));
      }
      setLoading(false);
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
          By {post.author} on {post.date.toLocaleDateString("en-US")}
        </p>
        <pre>
          <div className="forum-post-page-content">{post.content}</div>
        </pre>
      </div>

      <div className="forum-post-comment-section">
        <button
          className="show-comments-button"
          onClick={() => setShowComments(!showComments)}
        >
          Comments: {postComments.length}
        </button>

        {showComments && (
          <div>
            {user !== "" ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  className="comment-input"
                  placeholder="Comment"
                  type="text"
                  name="comment"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  className=""
                  onClick={async () => {
                    await forumSendComment(post._id, comment);
                    setTimeout(async () => {
                      setPostComments(await getCommentsByPostId(post._id));
                    }, 500); // TODO - make this garenteed to work
                  }}
                >
                  Send
                </button>
              </form>
            ) : (
              <p>You must be logged in to comment</p>
            )}

            {postComments.map((comment, i) => (
              <div className="forum-post-comment" key={i}>
                {comment.author}: {comment.content}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPostPage;
