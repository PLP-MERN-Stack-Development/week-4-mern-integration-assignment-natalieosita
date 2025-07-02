const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { validateCreatePost } = require('../middlewares/validators/postValidator');

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.post('/', validateCreatePost, postController.createPost);

// Get a single post by ID or slug
router.get('/:id', postController.getPostById);

// Update a post
router.put('/:id', postController.updatePost);

// Delete a post
router.delete('/:id', postController.deletePost);