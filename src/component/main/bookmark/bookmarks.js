import React from 'react';
import "./bookmark.css"

const Bookmarks = (props) => {
    return (
        <div className='bookmark'>
            <h3>{props.bookmark.blog_title}</h3>
        </div>
    );
};

export default Bookmarks;