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
          res.status(500).json({ message: err });
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
            res.status(500).json({ message: err });
          } else {
            res.status(200).json(result);
          }
        });
    });
  });

forumRouter.route("/posts/:id").get((req, res) => {
  getDB("forumDB")
    .collection("posts")
    .findOne({ _id: new ObjectId(req.params.id) }, (err, result) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json(result);
      }
    });
});

export default forumRouter;
