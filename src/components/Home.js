import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../index';


function Home() {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(API_URL);
      if (res.status === 200) {
        const newBlogs = res.data.filter((e) => e.active_flag);
        setBlogs(newBlogs);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
       <h2 className='home-title'>Latest Blogs</h2>
      {
      blogs.map((e, i) => (
        <Blogitem blogdata={e} key={i} />
      ))
      }
    </div>
  );
}

function Blogitem({ blogdata }) {
  return (
    
       
      
      <div className='Blog-wrapper'>
       
        <div className='blog-title'>{blogdata.title}</div>
        <img src={blogdata.imageUrl}  className='blog-image' alt='img'/>   
        <div className='blog-description'>{blogdata.description}</div>
      </div>
   
  );
}

export default Home;
