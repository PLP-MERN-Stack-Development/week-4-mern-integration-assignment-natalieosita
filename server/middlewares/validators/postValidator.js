const { body } = require('express-validator');

exports.validateCreatePost = [
  body('title')
    .notEmpty()
    .withMessage('Title is required'),
  body('content')
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters'),
];