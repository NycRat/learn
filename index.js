import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./backend/build/Server.routes.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api", router);
app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
