import { useEffect, useState } from 'react';
import { postService } from '../services/api';
import PostItem from '../components/PostItem';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const results = query
        ? await postService.searchPosts(query)
        : await postService.getAllPosts(page);
      setPosts(results.posts || results); 
      setHasMore(results.hasMore || false); 
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [query, page]);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        placeholder="Search posts..."
        className="w-full border px-3 py-2 mb-4"
      />

      {loading ? <p>Loading...</p> : posts.map(post => <PostItem key={post._id} post={post} />)}

      <div className="flex justify-between mt-4">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>
          Previous
        </button>
        <button onClick={() => setPage((p) => p + 1)} disabled={!hasMore}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;