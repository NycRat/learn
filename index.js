const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const router = require("./backend/build/Server.routes.js");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api", router.default);

app.use(express.static("frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
