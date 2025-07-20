const express = require('express');
const router = express.Router();
const postController = require('../controllers/postcontroller');

// Get all posts
router.get('/', postController.getAllPosts);

// Get single post by ID
router.get('/:id', postController.getPostById);

// Create a new post
router.post('/', postController.createPost);

module.exports = router;
