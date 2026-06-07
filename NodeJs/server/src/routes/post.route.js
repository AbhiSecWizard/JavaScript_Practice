const postRouter = require("express").Router()
const postController = require("../controllers/post.controllers")
const authMiddleware = require("../middleware/authMiddleware")


postRouter.post("/createpost",authMiddleware,postController.createPost)
postRouter.get("/posts",authMiddleware,postController.getPosts);

module.exports = postRouter