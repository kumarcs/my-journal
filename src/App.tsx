
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ResumeViewer from './components/ResumeViewer';
import PhotoGrid from './components/PhotoGrid';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
// import './index.css';
import './output.css';

const App = () => (
  <Router>
    <div className="container mx-auto p-4">
      <Header />
      <Routes>
        <Route path="/" element={(
          <>
            <PhotoGrid />
            <BlogList />
            <ResumeViewer />
          </>
        )} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  </Router>
);

export default App;
