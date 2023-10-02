import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js"
dotenv.config();

const app = express();

const port = process.env.port;

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./assets"));

// app.use("/uploads", express.static(__dirname + "/uploads")); //todo old way
app.use("/uploads", express.static(new URL('./uploads', import.meta.url).pathname)); //todo es6 way


app.set("view engine", "ejs");
app.set("views", "./views");



// app.get("/", (req, res) => {
//   console.log("rendering home page");
//   return res.render("home");
// });

// app.get("/chat", (req, res) => {
//   console.log("rendering chating page");
//   return res.render("login");
// });

app.use("/", routes);


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port::${port}`);
});
