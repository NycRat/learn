import { useState } from "react";
import { postForumPost } from "../Api/ForumApi";
import { useNavigate } from "react-router-dom";

const ForumNewPostPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <form
        className="new-post-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="new-post-title-input"
          placeholder="Title"
          type="text"
          name="title"
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <textarea
          className="new-post-content-textarea"
          placeholder="Content"
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        />
        <br />
        <button
          className="new-post-submit-button"
          onClick={() => {
            postForumPost({
              title: postTitle,
              content: postContent,
              date: new Date(),
            });
            navigate("/forum");
            window.location.reload();
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default ForumNewPostPage;
