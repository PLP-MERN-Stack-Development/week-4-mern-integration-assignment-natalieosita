import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostView from './pages/PostView';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="/edit/:id" element={<ProtectedRoute><EditPost /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;