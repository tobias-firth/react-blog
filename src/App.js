// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Blog from './components/BlogPage';
import BlogPost from './components/BlogPost';
import posts from './data';
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Blog posts={posts} />} />
          <Route
            path="/post/:index"
            element={<BlogPost posts={posts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
