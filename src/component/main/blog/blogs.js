import React, { useEffect, useState } from 'react';
import Blog from './blog';
import './blogs.css';
import Bookmarks from '../bookmark/bookmarks';



const Blogs = () => {
 
  const [blogs,setBlogs]=useState([]);
  const [bookmarks,setBookmarks]=useState([]);
  const [time,setTime]=useState(0);
  


const handleMinCount=(min)=>{

setTime(time+parseInt(min));
console.log(time);


   
   
}


   

  const handleAddtoBookmark=(bookmark)=>{
  
        const newBookmark=[...bookmarks,bookmark];
        setBookmarks(newBookmark);
        
  }

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=''>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12">
                    <div className="blog-container">
           {
                blogs.map(blog=><Blog blog={blog} handleAddtoBookmark={handleAddtoBookmark} handleMinCount={handleMinCount}></Blog>)
            }
           </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="spent">
                            <h3>Spent time on read:{time}min</h3>
                        </div>
                    <div className='bookmark-container'>

               
               <h3>Bookmarked Blogs:{bookmarks.length}</h3>
        
                {
                    bookmarks.map(bookmark=><Bookmarks bookmark={bookmark}></Bookmarks>)
                }
           
            
               </div>

                    </div>
                </div>
            </div>
         
          
            
        </div>
    );
};

export default Blogs;