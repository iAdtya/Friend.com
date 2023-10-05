import express from "express";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes/index.js";
import { connectDB } from "./config/mongoose.js";
//todo session cookie
import cookieParser from "cookie-parser";
import passport from "passport";
import MongoStore from "connect-mongo";
import session from "express-session";

const app = express();

const port = process.env.port;

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views", "views");

const mongoStore = MongoStore.create({
  mongoUrl:process.env.uri ,
  collectionName: 'sessions',
  ttl: 60 * 60 * 24, // 1 day
  autoRemove: 'interval',
  autoRemoveInterval: 10, // In minutes. Default
  crypto: {
    secret: 'mysecretkey',
  },
});

app.use(
  session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.setAuthenticatedUser);

app.use("/", routes);

app.listen(port, async (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port::${port}`);
  await connectDB();
});
