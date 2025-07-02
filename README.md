# 📰 MERN Blog Application

A full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring post creation, editing, category management, user authentication, image uploads, comments, and more.

---

## 🚀 Features

- 🔐 User registration & login
- 📝 Create, edit, and delete blog posts
- 📂 Organize posts by categories
- 💬 Add comments to posts
- 🖼️ Upload featured images
- 🔍 Search and filter posts
- 📄 Pagination support

---

## Project Structure
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation

---

## 🛠️ Tech Stack

- MongoDB + Mongoose
- Express.js + Node.js
- React + Vite
- Tailwind CSS (optional)
- JWT-based Authentication

---

## 🧰 Setup Instructions

1. **Clone the repo**

```bash
git clone <your-repo-url>
cd mern-blog
```

2. **Set up backend**

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

3. **Set up frontend**

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

4. **Environment Variables**

Both `client/.env.example` and `server/.env.example` include required settings. Provide values for:

- `MONGODB_URI`
- `JWT_SECRET`
- `VITE_API_URL` (frontend)

---

## 🔗 API Endpoints

| Method | Route                | Description              |
|--------|----------------------|--------------------------|
| GET    | /api/posts           | Get all posts            |
| POST   | /api/posts           | Create new post          |
| GET    | /api/posts/:id       | Get single post          |
| PUT    | /api/posts/:id       | Update a post            |
| DELETE | /api/posts/:id       | Delete a post            |
| GET    | /api/categories      | Get categories           |
| POST   | /api/categories      | Create new category      |
| POST   | /api/posts/:id/comments | Add comment         |
| POST   | /api/auth/register   | User signup              |
| POST   | /api/auth/login      | User login               |

---

## 📸 Screenshots

![Post view](screenshots/post.png)
![Edit form](screenshots/edit.png)

---

## ✅ Status

✅ All core features completed  
🎯 Bonus features (auth, pagination, search, image upload) implemented  

---

```

—


