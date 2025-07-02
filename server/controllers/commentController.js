import Post from '../models/post.js';

// @desc   Add a comment to a post
export const addCommentToPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = {
      user: userId,
      text,
      createdAt: new Date(),
    };

    post.comments.push(comment);
    await post.save();

    res.status(201).json({ message: 'Comment added', comments: post.comments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add comment', error: error.message });
  }
};

// @desc   Delete a comment from a post
export const deleteCommentFromPost = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (comment.user.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    comment.remove();
    await post.save();

    res.json({ message: 'Comment deleted', comments: post.comments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete comment', error: error.message });
  }
};