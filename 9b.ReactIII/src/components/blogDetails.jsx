import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs.find((b) => b.id === parseInt(id));

  const deleteBlog = () => {
    const updatedBlogs = blogs.filter((b) => b.id !== parseInt(id));
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/blogs'); 
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-400 text-sm mb-4">Created at: {blog.createdAt}</p>
      <div className="prose mb-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
      <button 
        onClick={deleteBlog} 
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Delete Blog
      </button>
    </div>
  );
};

export default BlogDetails;
