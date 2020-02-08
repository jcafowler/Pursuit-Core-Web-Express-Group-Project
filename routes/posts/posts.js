const posts = require("express").Router()
const {getAllPosts, getSinglePost, registerPosts, deletePost, editPost, getAllUserPosts} = require("../../queries/posts.js")

posts.get("/", getAllPosts)

posts.get("/:post_id", getSinglePost)

posts.get("/users/:user_id", getAllUserPosts)

posts.post("/", registerPosts)

posts.patch("/:post_id", editPost)

posts.delete("/:post_id", deletePost)

module.exports = posts