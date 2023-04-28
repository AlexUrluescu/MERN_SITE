import express from "express";
import post_routes from "./routes/posts_routes.js";

const app = express();

app.use(post_routes)

export default app;