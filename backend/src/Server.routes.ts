import express from "express";
import forumRouter from "./Forum.routes.js";

const router = express.Router();

router.use("/forum", forumRouter);
router.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default router;
