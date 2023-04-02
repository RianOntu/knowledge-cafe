import React from 'react';
import "./bookmark.css"

const Bookmarks = (props) => {
    return (
        <div className='bookmark'>
            <h5>{props.bookmark.blog_title}</h5>
        </div>
    );
};

export default Bookmarks;