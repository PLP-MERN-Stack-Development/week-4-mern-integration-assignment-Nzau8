import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export async function getPosts() {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error || 'Failed to fetch posts';
  }
}

export async function getPostById(id) {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error || 'Failed to fetch post';
  }
}

export async function createPost(postData) {
  try {
    const res = await axios.post(API_URL, postData);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error || 'Failed to create post';
  }
} 