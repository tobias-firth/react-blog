// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
  const { index } = useParams();
  const post = posts[Number(index)];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
