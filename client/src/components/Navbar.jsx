import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { postService } from '../services/api';

const { data: posts, loading, error } = useApi(() => postService.getAllPosts(), []);

const Navbar = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const logout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between">
      <div><a href="/" className="font-bold">MERN Blog</a></div>
      <div className="space-x-3">
        {user ? (
          <>
            <button onClick={logout} className="hover:underline">Logout</button>
          </>
        ) : (
          <>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/register" className="hover:underline">Register</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;