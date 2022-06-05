import express from "express";
import forumRouter from "./forum.routes";

const router = express.Router();

router.use("/forum", forumRouter);

export default router;
