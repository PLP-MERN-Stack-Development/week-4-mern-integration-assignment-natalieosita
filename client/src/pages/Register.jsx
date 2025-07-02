import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border px-3 py-2" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border px-3 py-2" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full border px-3 py-2" required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;