import express from "express";
import post_routes from "./routes/posts_routes.js";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";

const app = express();

connectDB();

app.use(post_routes)

app.listen(3000)
console.log(`Server is running port ${PORT}`);