import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./Server.routes";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3230;

app.use("/api", router);
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
