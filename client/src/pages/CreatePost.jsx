import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../components/postForm';
import { postService } from '../services/api';

const CreatePost = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async (formData) => {
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('content', formData.content);
      data.append('category', formData.category);
      data.append('tags', formData.tags);
      if (formData.featuredImage) {
        data.append('featuredImage', formData.featuredImage);
      }

      await postService.createPost(data);
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
      <PostForm onSubmit={handleCreate} isSubmitting={isSubmitting} />
    </div>
  );
};

export default CreatePost;