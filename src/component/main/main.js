import React from 'react';
import Blogs from './blog/blogs';


const Main = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12">
                 <Blogs></Blogs>
                    </div>
                    <div className="col-md-4 col-12">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;