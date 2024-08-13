import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateBlog from './components/createBlog';
import ViewBlogs from './components/viewBlog';
import BlogDetails from './components/blogDetails';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-black text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <Link to="/">My Blog</Link>
            </h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Create Blog</Link>
              <Link to="/blogs" className="hover:underline">View Blogs</Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<CreateBlog />} />
            <Route path="/blogs" element={<ViewBlogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        <footer className="bg-black text-white text-center p-4">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
