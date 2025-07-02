const Post = require('../models/post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('category author');
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// Add other CRUD functions here (getSinglePost, createPost, updatePost, deletePost)