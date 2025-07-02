import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './config/db.js';

// 🌍 Route imports
import postRoutes from './routes/posts.js';
import categoryRoutes from './routes/categories.js';
import authRoutes from './routes/auth.js'; // Optional
import commentRoutes from './routes/comments.js'; // Optional

// 📁 Middleware imports
import { handleValidationErrors } from './utils/handleValidationErrors.js';

// 📂 Env config
dotenv.config();

// 🔌 Connect to MongoDB
connectDB();

// 🚀 Initialize Express
const app = express();

// 🧩 Core Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🖼️ Serve static files (e.g. images from /uploads)
app.use('/uploads', express.static('uploads'));

// 🔀 Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);        // Optional: Only if you handle login/register
app.use('/api/comments', commentRoutes); // Optional: If you've separated comment handling

// ⚠️ Catch validation errors globally (optional fallback)
app.use(handleValidationErrors);

// ⚡ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});