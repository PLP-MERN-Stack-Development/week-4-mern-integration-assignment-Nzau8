import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: '#333', padding: '1rem' }}>
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
      <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
      <li><Link to="/create" style={{ color: '#fff', textDecoration: 'none' }}>Create Post</Link></li>
      <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
    </ul>
  </nav>
);

export default Navbar; 