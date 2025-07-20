import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginBottom: 16, background: '#fafafa' }}>
    <h2 style={{ margin: '0 0 8px 0' }}>
      <Link to={`/post/${post.id}`} style={{ color: '#333', textDecoration: 'none' }}>{post.title}</Link>
    </h2>
    <p style={{ color: '#666', margin: '0 0 8px 0' }}>By {post.author}</p>
    <p style={{ margin: 0 }}>{post.excerpt}</p>
  </div>
);

export default PostCard; 