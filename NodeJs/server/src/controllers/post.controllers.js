const Post = require("../model/post.model");

const createPost = async (req, res) => {
  console.log("CREATE POST HIT");
  console.log(req.body);
  try {
    const { title, subtitle, description } = req.body;
    const post = await Post.create({
      title,
      subtitle,
      description,
      user: req.user.userId,
    });
    return res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getPosts = async (req, res) => {
  try {

    const posts = await Post.find({
      user: req.user.userId,
    }).populate("user", "username email");

    return res.status(200).json({
      success: true,
      posts,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const postControllers = {createPost,getPosts}


module.exports = postControllers