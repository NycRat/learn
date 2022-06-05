import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./server.routes";

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

// router
app.use("/api", router);
app.get("/api/*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
