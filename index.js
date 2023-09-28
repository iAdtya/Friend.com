import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// const router = express.Router();

const port = process.env.port;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("rendering home page");
  return res.render("home");
});

app.get("/chat", (req, res) => {
  console.log("rendering chating page");
  return res.render("login");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port::${port}`);
});
