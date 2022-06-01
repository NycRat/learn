import UserInfo from "../Models/User";

export const getUserById = (id: number): UserInfo => {
  return {
    id: id,
    name: "User " + id,
    email: "user" + id + "@example.com",
  };
};

export const getRecentForumPosts = () => {
  // temporary data before backend is implemented
  let recentPosts = [];
  for (let i = 0; i < 10; i++) {
    recentPosts.push({
      id: i,
      author: getUserById(0), // temp
      date: new Date(),
      title: `Post ${i}`,
      content: `Content of post ${i}`,
      comments: [],
    });
  }
  return recentPosts;
};

export const getForumPostById = (id: number) => {
  // temporary data before backend is implemented
  return {
    id: id,
    author: getUserById(0),
    date: new Date(),
    title: `Post ${id}`,
    content: `Content of post ${id}`,
    comments: [
      {
        id: 0,
        author: getUserById(0),
        date: new Date(),
        content: "wao",
      },
      {
        id: 32,
        author: getUserById(2),
        date: new Date(),
        content: "Something else",
      },
    ],
  };
};
