import express from 'express';
import { body } from 'express-validator';
import {
  addCommentToPost,
  deleteCommentFromPost,
} from '../controllers/commentController.js';
import { handleValidationErrors } from '../utils/handleValidationErrors.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add a comment to a post
router.post(
  '/:postId',
  authenticate,
  [body('text').notEmpty().withMessage('Comment cannot be empty')],
  handleValidationErrors,
  addCommentToPost
);

// Delete a specific comment from a post
router.delete('/:postId/:commentId', authenticate, deleteCommentFromPost);

export default router;