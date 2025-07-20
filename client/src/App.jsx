import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';
import Login from './pages/Login';

const App = () => (
  <Router>
    <Navbar />
    <div style={{ padding: '2rem 0' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
);

export default App;
