import React, { useState } from 'react';
import { createPost } from '../services/api';
import { useNavigate } from 'react-router-dom';

const DUMMY_AUTHOR_ID = '64b7c2f2f2f2f2f2f2f2f2f2'; // Replace with real user ID if available

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createPost({ title, content, author: DUMMY_AUTHOR_ID });
      setTitle('');
      setContent('');
      navigate('/');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ padding: 8, fontSize: 16 }}
          disabled={loading}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={6}
          style={{ padding: 8, fontSize: 16 }}
          disabled={loading}
        />
        <button type="submit" style={{ padding: 10, fontSize: 16, background: '#333', color: '#fff', border: 'none', borderRadius: 4 }} disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default CreatePost; 