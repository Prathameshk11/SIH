import React, { useEffect, useState } from 'react';
import { createPost, getPosts } from '../services/forumService';

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'INTRA' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(newPost);
      setNewPost({ title: '', content: '', category: 'INTRA' });
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="forum">
      <h1>Discussion Forum</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Post Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <select
          value={newPost.category}
          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
        >
          <option value="INTRA">Intra Department</option>
          <option value="INTER">Inter Department</option>
          <option value="PUBLIC">Public</option>
        </select>
        <button type="submit">Create Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Category: {post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}