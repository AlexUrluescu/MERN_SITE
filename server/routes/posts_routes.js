import { Router } from "express"
import { getPosts, createPost, updatePost, deletePost, getPost, registerUser } from "../controllers/post.controllers.js";

const router = Router()

router.get('/posts', getPosts)

router.post('/posts', createPost)

router.put('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost)

router.get('/posts/:id', getPost)

router.post('/register', registerUser)

export default router