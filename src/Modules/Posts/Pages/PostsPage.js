import React from 'react';
import PostsBoard from '../Components/PostsBoard';
import Footer from '../../../Layouts/Components/Footer/Footer';
import Header from '../../../Layouts/Components/Header/Header';

const PostsPage = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"80%", margin:"auto", paddingTop:"50px", zIndex:"-20"}}>
                <PostsBoard/>
            </div>
            <div style={{display:"flex", flexDirection:"column", margin:"auto", paddingTop:"50px", zIndex:"-20"}}>
                <Footer/>
            </div>
        </div>
    );
};

export default PostsPage;