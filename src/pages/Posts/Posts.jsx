import React, { useState, useEffect } from 'react'
import Post from '../Posts/Post';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import './Posts.scss';

const Posts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/posts')
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [])

    useEffect(() => {
        posts && console.log(posts)
    }, [posts])
    
    return (
        <div className='posts'>

            {
                posts && (
                <div className="wrapper">
                    {
                        posts.map(post => {
                            return <Post key={post._id} post={post}/>
                        })
                    }
                </div>
                )
            } 

            {
                !posts && (<div className='wrapper'>
                  <Loader />
                  <Loader />
                  <Loader />
                  <Loader />
                </div>)
            }               

            
        </div>
    );
}

export default Posts;
