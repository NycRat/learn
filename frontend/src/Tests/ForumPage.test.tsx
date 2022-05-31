import { render, screen } from "@testing-library/react";
import ForumPage from "../Pages/ForumPage";

test("Renders posts", () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Post 2",
      content: "Content 2",
    },
  ];
  render(<ForumPage forumPosts={posts} />);
  const post1 = screen.getByText("Post 1");
  const post2 = screen.getByText("Post 2");
  expect(post1).toBeInTheDocument();
  expect(post2).toBeInTheDocument();
});
