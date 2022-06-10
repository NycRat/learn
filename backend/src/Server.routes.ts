import express from "express";
import userRouter from "./User.routes";
import forumRouter from "./Forum.routes";

const router = express.Router();

router.use("/forum", forumRouter);
router.use("/user", userRouter);
router.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default router;
