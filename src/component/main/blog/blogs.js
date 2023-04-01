import React, { useEffect, useState } from 'react';
import Blog from './blog';
import './blogs.css';
import Bookmarks from '../bookmark/bookmarks';



const Blogs = () => {
  const [blogs,setBlogs]=useState([]);
  const [bookmarks,setBookmarks]=useState([]);
  const [time,setTime]=useState([]);
  let [sum,setSum]=useState(0);


const handleMinCount=(min)=>{
const newTime=[...time,min];
setTime(newTime);

for(let i=0;i<time.length;i++){
    sum=sum+parseInt(time[i]);
    setSum(sum)
   }
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
                            <h3>Spent time on read:{sum}min</h3>
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