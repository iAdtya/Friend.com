import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js"
import { connectDB } from "./config/mongoose.js";
dotenv.config();
const app = express();

app.use(express.static("./assets"));

const port = process.env.port;

app.use(express.urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", routes);

app.listen(port, async (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port::${port}`);
  await connectDB();
});
