import express from "express";
import fileUpload from "express-fileupload";
import post_routes from "./routes/posts_routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

// routes
app.use(post_routes);

export default app;