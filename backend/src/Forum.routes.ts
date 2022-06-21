import express from "express";
import { ObjectId } from "mongodb";
import { getDB } from "./ConnectionDB";
import { verifyToken } from "./LoginToken";

const forumRouter = express.Router();

forumRouter
  .route("/posts")
  .get((req, res) => {
    getDB("forumDB")
      .collection("posts")
      .find({})
      .sort({ $natural: -1 })
      .limit(10)
      .toArray((err, result) => {
        if (err) {
          res.status(500).json({ message: "Error getting posts" });
        } else {
          res.status(200).json(result);
        }
      });
  })
  .post((req, res) => {
    if (req.body.post.title === "" || req.body.post.content === "") {
      res.status(400).json({ message: "Title and content is required" });
      return;
    }

    verifyToken(req, res, (user) => {
      let post = {
        author: user.username,
        date: new Date(req.body.post.date),
        title: req.body.post.title,
        content: req.body.post.content,
        comments: [],
      };
      getDB("forumDB")
        .collection("posts")
        .insertOne(post, (err, result) => {
          if (err) {
            res.status(500).json({ message: "Error creating post" });
          } else {
            res.status(200).json(result);
          }
        });
    });
  });

forumRouter.route("/posts/id/:id").get((req, res) => {
  try {
    getDB("forumDB")
      .collection("posts")
      .findOne({ _id: new ObjectId(req.params.id) }, (err, result) => {
        if (err) {
          res.status(500).json({ message: "Error getting post" });
        } else {
          res.status(200).json(result);
        }
      });
  } catch (err) {
    res.status(500).json({ message: "Error getting post" });
  }
});

forumRouter
  .route("/posts/id/:id/comments")
  .get((req, res) => {
    getDB("forumDB")
      .collection("posts")
      .findOne({ _id: new ObjectId(req.params.id) }, (err, result) => {
        if (err) {
          res.status(500).json({ message: "Error getting post" });
        } else {
          if (result) {
            res.status(200).json(result.comments);
          } else {
            res.status(404).json({ message: "Post not found" });
          }
        }
      });
  })
  .post((req, res) => {
    const comment = req.body.comment;
    verifyToken(req, res, (user) => {
      getDB("forumDB")
        .collection("posts")
        .findOne({ _id: new ObjectId(req.params.id) }, (err, result) => {
          if (err) {
            res.status(500).json({ message: "Error getting post" });
          } else {
            if (result) {
              result.comments.push({
                content: comment,
                date: new Date(),
                author: user.username,
              });
              getDB("forumDB")
                .collection("posts")
                .updateOne(
                  { _id: new ObjectId(req.params.id) },
                  { $set: { comments: result.comments } },
                  (err, result) => {
                    if (err) {
                      res.status(500).json({ message: "Error updating post" });
                    }
                    res.status(200).json(result);
                  }
                );
            } else {
              res.status(404).json({ message: "Post not found" });
            }
          }
        });
    });
  });

export default forumRouter;
