import React from 'react';
import Blogs from './blog/blogs';
import Header from './header/Header';
import Qna from './qna/Qna';


const Main = () => {
    return (
        <div>
          <Header></Header>
          <Blogs></Blogs>
          <Qna></Qna>
        </div>
    );
};

export default Main;