import express from "express";
import { getDB } from "./ConnectionDB";

const userRouter = express.Router();

userRouter.route("/login").post((req, res) => {
  const db = getDB("userDB");
  const collection = db.collection("logins");
  const username = req.body.username;
  const password = req.body.password;
  if (username.length < 3 || password.length < 5) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  collection.findOne({ username: username }, (err, result) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (result) {
      if (result.password === password) {
        res.status(200).json({ token: result.token });
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  });
});

userRouter.route("/register").post((req, res) => {
  const db = getDB("userDB");
  const collection = db.collection("logins");
  const username = req.body.username;
  const password = req.body.password;
  collection.findOne({ username: username }, (err, result) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (result) {
      res.status(409).json({ message: "Username already exists" });
    } else {
      const token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        username;

      collection.insertOne(
        { username: username, password: password, token: token },
        (err, result) => {
          if (err) {
            res.status(500).json({ message: err });
          } else {
            res.status(200).json({ token: token });
          }
        }
      );
    }
  });
});

userRouter.route("/getFromToken").get((req, res) => {
  const db = getDB("userDB");
  const collection = db.collection("logins");
  const token = req.headers.authorization;
  collection.findOne({ token: token }, (err, result) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (result) {
      res.status(200).json({ username: result.username }); // TODO - get all info instead of just username
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  });
});

// userRouter.route("/getFromName").get((req, res) => {
//   const db = getDB("userDB");

export default userRouter;
