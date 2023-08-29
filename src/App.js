import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreateBlog from './components/Createbook';
import Home from './components/Home';
import ManageBlog from './components/ManageBook';
import EditBlog from './components/EditBook';


// import { useState } from 'react';

function App() {

  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/manage-blog" element={<ManageBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
