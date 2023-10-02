import express  from  "express";
import users from './users.js';


import {home} from "../controllers/home_controllers.js";



const router = express.Router();


router.get("/", home);
router.use("/users", users);
// router.use('/users', usersRouter);

// router.use("/posts", require("./posts"));
// router.use("/comments", require("./comments"));

// for any further routes, access from here
console.log("router loaded");

export default router;