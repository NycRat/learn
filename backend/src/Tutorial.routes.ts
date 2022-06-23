import express from "express";
import { ObjectId } from "mongodb";
import { getDB } from "./ConnectionDB";
import { verifyToken } from "./LoginToken";

const tutorialRouter = express.Router();

tutorialRouter
  .route("/")
  .post((req, res) => {
    const { title, description, content } = req.body;
    if (!(title && description && content)) {
      res
        .status(400)
        .json({ message: "Title, description, and content is required" });
      return;
    }
    verifyToken(req, res, (user) => {
      getDB("tutorialDB")
        .collection("tutorials")
        .insertOne({
          title: title,
          description: description,
          content: content,
          author: user.username,
          date: new Date(),
        })
        .then((result) => {
          res.status(201).json({ message: "Tutorial created" });
        })
        .catch((err) => {
          res.status(500).json({ message: "Error creating tutorial" });
        });
    });
  })
  .get((req, res) => {
    const db = getDB("tutorialDB");
    db.collection("tutorials")
      .find({})
      .toArray()
      .then((tutorials) => {
        if (tutorials) {
          res.status(200).json(tutorials);
        } else {
          res.status(404).json({ message: "Tutorials not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Error getting tutorials" });
      });
  });

tutorialRouter.route("/name/:name").get((req, res) => {
  const db = getDB("tutorialDB");
  const { name } = req.params;
  db.collection("tutorials")
    .findOne({ title: name })
    .then((tutorial) => {
      if (tutorial) {
        res.status(200).json(tutorial);
      } else {
        res.status(404).json({ message: "Tutorial not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting tutorial" });
    });
});

tutorialRouter.route("/id/:id").get((req, res) => {
  const db = getDB("tutorialDB");
  const { id } = req.params;
  db.collection("tutorials")
    .findOne({ _id: new ObjectId(id) })
    .then((tutorial) => {
      if (tutorial) {
        res.status(200).json(tutorial);
      } else {
        res.status(404).json({ message: "Tutorial not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting tutorial" });
    });
});

export default tutorialRouter;
