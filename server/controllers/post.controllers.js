import Post from "../models/Post.js"

export const getPosts = async (req, res) => {

    const posts = await Post.find()
    res.send(posts)
};

export const createPost = (req, res) => {
     const {title, description, user_name} = req.body;
     
    const post = new Post({title, description, user_name})

    console.log(post);
    post.save()
    return res.send("received")
};

export const updatePost = (req, res) => res.send("Updating post");

export const deletePost = (req, res) => res.send("Deleting post");

export const getPost = (req, res) => res.send("Getting a post");