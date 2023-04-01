import React from 'react';
import './blog.css'




 

const Blog = (props) => {
  
    
    const {id,author_name,blog_title,cover_image,author_image,read_time,publish_date}=props.blog;
    return (
        <div className='blog'>
            <img src={cover_image} alt="" />
            <div className='description_flex'>
                <div>
                      <div className="img_flex">
                        <div>
                        <img className='author_img' src={author_image} alt="" />
                        </div>
                      <div style={{marginLeft:'20px'}}>
                      <h4>{author_name}</h4>
                        <p>{publish_date}</p>
                      </div>
                        
                      </div>
                      <h3>{blog_title}</h3>
                    <button onClick={()=>props.handleMinCount(props.blog.read_time)}>Mark as read</button>
                </div>
                <div className='bookmark_flex'>
                  <div><p>{read_time} min read</p></div>
                  <div><i onClick={()=>props.handleAddtoBookmark(props.blog)}  class="fa-regular fa-bookmark"></i></div>
                </div>

            </div>
            
        </div>
    );
};

export default Blog;