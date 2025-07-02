import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 mb-4">
      <Link to={`/posts/${post._id}`} className="block mb-2">
        <img
          src={`/uploads/${post.featuredImage || 'default-post.jpg'}`}
          alt={post.title}
          className="w-full h-48 object-cover rounded"
        />
      </Link>

      <div className="mt-3">
        {post.category && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-800 dark:text-white">
            {post.category.name || 'Uncategorized'}
          </span>
        )}

        <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
          <Link to={`/posts/${post._id}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {post.excerpt
            ? post.excerpt
            : post.content.slice(0, 140).trim() + '...'}
        </p>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>Views: {post.viewCount}</span>
          <Link
            to={`/posts/${post._id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;