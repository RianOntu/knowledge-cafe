import React, { useEffect, useState } from 'react';
import Blog from './blog';

const Blogs = () => {
  const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog=><Blog blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;