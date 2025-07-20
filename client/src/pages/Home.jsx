import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h1>Blog Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && posts.length === 0 && <p>No posts found.</p>}
      {!loading && !error && posts.map(post => <PostCard key={post._id} post={{
        id: post._id,
        title: post.title,
        author: post.author?.name || 'Unknown',
        excerpt: post.excerpt || post.content?.substring(0, 100) + '...'
      }} />)}
    </div>
  );
};

export default Home; 