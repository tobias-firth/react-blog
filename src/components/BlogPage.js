// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ posts }) => {
  return (
    <div className="blog">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.blurb}</p>
          <Link to={`/post/${index}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;

