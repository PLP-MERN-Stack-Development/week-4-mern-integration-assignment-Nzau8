import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPostById(id)
      .then(setPost)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{ maxWidth: 600, margin: '2rem auto' }}>Loading...</div>;
  if (error) return <div style={{ maxWidth: 600, margin: '2rem auto', color: 'red' }}>{error}</div>;
  if (!post) return <div style={{ maxWidth: 600, margin: '2rem auto' }}>Post not found.</div>;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h1>{post.title}</h1>
      <p style={{ color: '#666' }}>By {post.author?.name || 'Unknown'}</p>
      <div style={{ marginTop: 16 }}>{post.content}</div>
    </div>
  );
};

export default SinglePost; 