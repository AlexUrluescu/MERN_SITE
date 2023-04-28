import express from "express";
import post_routes from "./routes/posts_routes.js";

const app = express();

app.use(post_routes)

app.listen(3000)
console.log('Server is running port 3000');