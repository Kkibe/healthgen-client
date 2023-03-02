import React, { useState, useEffect } from 'react'
import Post from '../components/Post';
import Loader from '../components/Loader';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('https://healthgen-api.onrender.com/api/posts')
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, [])
    
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
