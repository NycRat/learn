import axios from "axios";
import PostInfo from "../Models/Post";
import UserInfo from "../Models/User";

export const getUserByName = (name: string): UserInfo => {
  // temporary
  return {
    name: name,
    email: name + "@example.com",
  };
};

export const getRecentForumPosts = async () => {
  let recentPosts: PostInfo[] = [];
  await axios.get("/api/forum/posts").then((res) => {
    try {
      recentPosts = res.data;
    } catch (err) {
      console.log(err);
    }
  });
  return recentPosts;
};

export const getForumPostById = async (id: string) => {
  let post: PostInfo | null = null;
  await axios.get("/api/forum/posts/" + id).then((res) => {
    try {
      post = res.data;
      if (post !== null) {
        post.date = new Date(post.date);
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  });
  return post;
};

export const postForumPost = async (post: any) => {
  await axios.post("/api/forum/posts", post);
};
