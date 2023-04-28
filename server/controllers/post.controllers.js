import Post from "../models/Post.js"

export const getPosts = async (req, res) => {

    const posts = await Post.find()
    res.send(posts)
};

export const createPost = (req, res) => res.send("New post created");

export const updatePost = (req, res) => res.send("Updating post");

export const deletePost = (req, res) => res.send("Deleting post");

export const getPost = (req, res) => res.send("Getting a post");