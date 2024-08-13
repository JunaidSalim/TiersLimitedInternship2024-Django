import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || []);

  const getSnippet = (content) => {
    const plainText = content.replace(/<\/?[^>]+(>|$)/g, ""); 
    return plainText.length > 100 ? `${plainText.substring(0, 100)}...` : plainText;
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const deleteAllBlogs = () => {
    setBlogs([]);
    localStorage.removeItem('blogs');
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {blogs.length > 0 && (
        <button 
          onClick={deleteAllBlogs} 
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-4">
          Delete All Blogs
        </button>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{getSnippet(blog.content)}</p>
            <p className="text-gray-400 text-sm">Created at: {blog.createdAt}</p>
            <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">Read More</Link>
            <button 
              onClick={() => deleteBlog(blog.id)} 
              className="bg-red-500 ml-5 text-white py-1 px-2 mt-2 rounded hover:bg-red-600">
              Delete Blog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlogs;
