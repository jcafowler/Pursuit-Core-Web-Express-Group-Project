const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3000
const app = express()
const postsRouter = require("./routes/posts/posts.js")
const picturesRouter = require("./routes/pictures/pictures.js")
const albumRouter = require("./routes/albums/albums")
const likesRouter = require("./routes/likes/likes")
const usersRouter = require("./routes/users/users")
const commentsRouter = require("./routes/comments/comments")

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/posts", postsRouter)
app.use("/pictures", picturesRouter)
app.use("/albums",albumRouter)
app.use("/likes",likesRouter)
app.use("/users",usersRouter)
app.use("/comments",commentsRouter)
app.use((err, req, res, next) => {
  if(err.status){
    res.status(err.status).json(err.error)
  }else {
    res.json(err)
  }
})

app.listen(port, () => {
  console.log("The server is currently running on port " + port)
})