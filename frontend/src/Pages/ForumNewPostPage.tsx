import { useState } from "react";
import { postForumPost } from "../Api/ForumApi";

const ForumNewPostPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  return (
    <div>
      <h1>New Post</h1>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className="login-input">
          <input
            placeholder="Title"
            type="text"
            name="title"
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </label>
        <br></br>
        <label className="login-input">
          <input
            placeholder="Content"
            type="text"
            name="content"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </label>
      </form>
      <button
        onClick={() => {
          postForumPost({
            title: postTitle,
            content: postContent,
            date: new Date(),
          });
        }}
      >
        Post
      </button>
    </div>
  );
};

export default ForumNewPostPage;
