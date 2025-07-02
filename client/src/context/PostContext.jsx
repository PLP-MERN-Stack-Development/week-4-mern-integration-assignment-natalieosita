import { createContext, useContext, useState, useEffect } from 'react';
import { postService } from '../services/api';

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const data = await postService.getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPosts, loading }}>
      {children}
    </PostContext.Provider>
  );
};