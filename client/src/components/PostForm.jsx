import { useState } from 'react';

const PostForm = ({ initialData = {}, onSubmit, isSubmitting }) => {
  const [form, setForm] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    category: initialData.category || '',
    tags: initialData.tags?.join(', ') || '',
    featuredImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Post title"
        className="w-full border px-3 py-2"
        required
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full border px-3 py-2"
        rows={6}
        required
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category ID"
        className="w-full border px-3 py-2"
        required
      />
      <input
        name="tags"
        value={form.tags}
        onChange={handleChange}
        placeholder="Comma-separated tags"
        className="w-full border px-3 py-2"
      />
      <input
        type="file"
        name="featuredImage"
        onChange={handleChange}
        accept="image/*"
        className="w-full"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isSubmitting ? 'Publishing...' : 'Publish'}
      </button>
    </form>
  );
};

export default PostForm;