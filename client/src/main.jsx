import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

// 👉 Import your context provider
import { PostProvider } from './context/postContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);