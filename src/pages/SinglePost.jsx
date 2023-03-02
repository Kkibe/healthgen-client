import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import Post from '../components/Post';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const SinglePost = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const PF = 'https://healthgen-api.onrender.com/images/';
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState(null);

    const copyToBoard = (e) => {
        e.preventDefault();
        let link = document.querySelector('.board');
        link.select();
        navigator.clipboard.writeText(link.value)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://healthgen-api.onrender.com/api/posts/' + id)
                setPost(res.data);
            } catch (error) {
                console.log(error);
            }
            try {
                const res = await axios.get('https://healthgen-api.onrender.com/api/posts')
                setPosts(res.data.filter(item => {
                    return item._id  !== id
                }));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id])
    return (
        <div className="single-post">
            {
                post && (
            <div className='item'>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content={post.desc.slice(0, 100)}/>
                <title>{"Healthgen | " + post.title}</title>
                <link rel="canonical" href={window.location.href} />
            </Helmet>
                <div className="wrapper">
                    <img src={post.img && PF + post.img} alt={post.id} crossOrigin="anonymous"/>
                    <h2>{post.title}</h2>
                    <p>{post.desc}</p>
                </div>
                <aside>
                    <p>Author:<a href='#' title={post.author}>{post.author}</a></p>
                    <p className='date'>Date: <a title='date'>{new Date(post.createdAt).toLocaleDateString()}</a></p>
                    <p >Categories: 
                        {
                            post.categories && post.categories.map(category => {
                                return <a href={`https://healthgen-api.onrender.com/api/posts/?category=${category}`} key={category} title={category}>{category}</a>
                            })
                        }
                    </p>
                    <div className="container">
                        <a href="https://facebook.com" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
                        <a href="https://instagram.com" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
                        <a href="https://youtube.com" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
                        <a href="https://linkedin.com" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="copy-link">
                        <input type="text" className='link board' value={window.location.href} readOnly/>
                        <button  onClick={copyToBoard} type="button" title='copy link'>
                            <i className='fa fa-clone'/>
                        </button>
                    </div>
                </aside>
            </div>)}
            <h2>Similar Posts</h2>
            <div className="similar-blogs">
                {
                    posts && posts.map(post => {
                        return <Post key={post._id} post={post}/>
                    })
                }
            </div>
        </div>
    );
}
export default SinglePost; 