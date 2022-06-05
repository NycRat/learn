import express from "express";
import { ObjectId } from "mongodb";
import { getDB } from "./connectionDB";

const forumRouter = express.Router();

forumRouter
  .route("/posts")
  .get((req, res) => {
    getDB("forumDB")
      .collection("posts")
      .find({})
      .toArray((err, result) => {
        if (err) {
          res.status(500).json({ message: err });
        } else {
          res.status(200).json(result);
        }
      });
  })
  .post((req, res) => {
    let post = {
      author: req.body.login.username,
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
