import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const newBlog = { 
      id: Date.now(), 
      title, 
      content, 
      createdAt: new Date().toLocaleString() 
    };
    localStorage.setItem('blogs', JSON.stringify([...blogs, newBlog]));
    
    setTitle('');
    setContent('');
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
      <input 
        type="text" 
        placeholder="Title" 
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <ReactQuill 
        value={content} 
        onChange={setContent} 
        className="mb-4"
        style={{ height: '300px' }}  
      />
      <button 
        onClick={handleSubmit} 
        className={`py-2 px-4 mt-10 rounded text-white ${submitted ? 'bg-green-500' : 'bg-blue-500'} hover:bg-blue-600`}>
        {submitted ? 'Blog Published' : 'Submit'}
      </button>
      {submitted && <p className="text-green-500 mt-2">Blog has been submitted successfully!</p>}
    </div>
  );
};

export default CreateBlog;
