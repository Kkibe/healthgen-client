import React from 'react';
import { NavLink } from 'react-router-dom';
import './Post.scss';


const Post = ({post}) => {
    const PF = 'https://healthgen-api-wt86.onrender.com/api/';
    return (
    <NavLink to={`/posts/${post._id}`} className="post" title={`https://healthgen.onrender.com/posts/${post._id}`}>
        <div className="image-container">
            <img src={post.image && PF + post.image} alt={post.id} crossOrigin="anonymous"/>
        </div>
        <div className="content">
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <div className="info">
                <div className="author">By: <span>{post.author}</span></div>
                <div className="date"><i className="fa fa-clock"></i>{new Date(post.createdAt).toDateString()}</div>
            </div>
        </div>
    </NavLink>
    );
}
export default Post;
