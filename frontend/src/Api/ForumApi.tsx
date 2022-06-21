import axios from "axios";
import PostInfo from "../Models/Post";
import UserInfo from "../Models/User";
import CommentInfo from "../Models/Comment";
import apiURL from "./ApiUrl";

export const getUserByName = (name: string): UserInfo => {
  // temporary
  return {
    username: name,
  };
};

export const getRecentForumPosts = async () => {
  let recentPosts: PostInfo[] = [];
  await axios.get(`${apiURL}/forum/posts`).then((res) => {
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
  await axios
    .get(`${apiURL}/forum/posts/id/${id}`)
    .then((res) => {
      try {
        post = res.data;
        if (post !== null) {
          post.date = new Date(post.date);
        }
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => {
      post = null;
    });
  return post;
};

export const getCommentsByPostId = async (id: string) => {
  let comments: CommentInfo[] = [];
  await axios.get(`${apiURL}/forum/posts/id/${id}/comments`).then((res) => {
    if (comments) {
      comments = res.data;
    }
  });
  return comments;
};

export const postForumPost = async (post: any) => {
  await axios.post(
    `${apiURL}/forum/posts`,
    {
      post: post,
    },
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
};

export const forumSendComment = async (postID: string, comment: string) => {
  axios.post(
    `${apiURL}/forum/posts/id/${postID}/comments`,
    {
      comment: comment,
    },
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
};
