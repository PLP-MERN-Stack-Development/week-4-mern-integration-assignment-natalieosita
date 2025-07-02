import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(id);
        setPost(data);
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      setIsSubmitting(true);
      const newComment = await postService.addComment(post._id, { content: commentText });
      setPost((prev) => ({
        ...prev,
        comments: [...prev.comments, newComment],
      }));
      setCommentText('');
    } catch (err) {
      console.error('Error adding comment:', err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading post...</p>;
  if (!post) return <p className="text-center mt-4 text-red-500">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <img
        src={`/uploads/${post.featuredImage}`}
        alt={post.title}
        className="w-full max-h-96 object-cover rounded mb-4"
      />
      <p className="text-gray-700 whitespace-pre-line mb-6">{post.content}</p>

      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        {post.comments?.length ? (
          <ul className="space-y-2">
            {post.comments.map((c, idx) => (
              <li key={idx} className="border p-3 rounded">
                <p className="text-sm text-gray-800">{c.content}</p>
                <p className="text-xs text-gray-500">
                  Posted on {new Date(c.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No comments yet.</p>
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-6 space-y-2">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full px-3 py-2 border rounded"
          rows={3}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
};

export default PostView;