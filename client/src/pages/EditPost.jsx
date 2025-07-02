import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/postForm';
import { postService } from '../services/api';

const EditPost = () => {
  const { id } = useParams(); // post ID or slug
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(id);
        setPost(data);
      } catch (err) {
        console.error('Failed to fetch post:', err);
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (formData) => {
    setIsSubmitting(true);
    try {
      const updated = new FormData();
      updated.append('title', formData.title);
      updated.append('content', formData.content);
      updated.append('category', formData.category);
      updated.append('tags', formData.tags);
      if (formData.featuredImage instanceof File) {
        updated.append('featuredImage', formData.featuredImage);
      }

      await postService.updatePost(post._id, updated);
      navigate(`/posts/${post._id}`);
    } catch (err) {
      console.error('Failed to update post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
      <PostForm initialData={post} onSubmit={handleUpdate} isSubmitting={isSubmitting} />
    </div>
  );
};

export default EditPost;