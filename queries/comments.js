const db = require("../db/index.js");
// GET /comments/posts/:post_id - Get all comments for a single post.
// POST /comments/posts/:post_id/:commenter_id - Add single comment.
// PATCH /comments/:post_id/:commenter_id - Edit single comment.
// DELETE /comments/:post_id/:commenter_id - Delete single comment.

const getAllComments = async (req, res, next) => {
    try {
        let edit = await db.any("SELECT * FROM comments");
        res.status(200).json({
            status: "status",
            message: "get all comments",
            body: edit
        })
    } catch (err) {
        res.status(400).json({
            message: "Could not get none of the users"
        })
    }
}

const getSingleComment = async (req, res, next) => {
    try {
        let singleComment = await db.one("SELECT * FROM comments WHERE id = $1", req.params.commenter_id);
        res.status(200).json({
            status: "status",
            message: "got the single comment",
            body: singleComment
        })
    } catch (err) {
        next(err)
    }
}

const editSingleComment = async (req, res, next) => {
    try {
        let editComment = await db.one(`UPDATE comments SET body ='${req.params.user_id}' WHERE id = ${req.params.user_id} RETURNING *`);
        res.status(200).json({
            status: "status",
            message: "the single comment is now edited",
            body: editComment
        })
    } catch (err) {
        res.status(400).json({
            message: "Could not get user",
        })
        
    }
}

const deleteSingleComments = async (req, res, next) => {
    try {
        let removeComment = await db.none("DELETE FROM comments WHERE id = $1", req.params.commenter_id);
        res.status(200).json({
            status: "status",
            message: "delete was a success",
            body: removeComment
        })

    } catch (err) {
        res.status(400).json({
            message:'Could not delete Users'
        })
    }
}

const addComment = async(req, res, next) =>{
    try{
        let addComment = await db.one("INSERT INTO comments (user_id, post_id) VALUES (${user_id}, ${post_id}) RETURNING *", req.body)
        res.status(200).json({
            status:"status",
            message:"comment added",
            body: addComment
        })
    }catch(err){
        res.status(400).json({
            message: "No comment was not made"
        })
    }
}
module.exports = { getAllComments, getSingleComment, editSingleComment, deleteSingleComments, addComment };