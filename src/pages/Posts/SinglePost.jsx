import React, { useState, useEffect } from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import Post from './Post';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './SinglePost.scss'
import Loader from '../../components/Spinner/Spinner';
import Newsletter from '../../components/Newsletter/Newsletter';

const SinglePost = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const PF = 'https://healthgen-api-wt86.onrender.com/api/';
    const [post, setPost] = useState(null);
    const [scroll, setScroll] = useState(0);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState(null);



    const readingTime = (articleText) => {
        const wordsArray = articleText.split(' ');
        // Count the number of words in the array
        const wordCount = wordsArray.length;
        // Calculate the estimated reading time
        const wordsPerMinute = 200;
        return Math.ceil(wordCount / wordsPerMinute);
    }
    
    function truncateTitle(input, value) {
      if (input.length > value) {
         return input.substring(0, value) + '...';
      }
      return input;
   };
    
    useEffect(() => {
      window.onscroll = () => {
        var windowTop = document.documentElement.scrollTop;
        var documentHeight = window.document.body.offsetHeight;//document.documentElement.clientHeight;
        var windowHeight = window.innerHeight;
        setScroll((windowTop / (documentHeight - windowHeight))*100);
      }
    }, [location]);

    const copyToBoard = (e) => {
        e.preventDefault();
        let link = document.querySelector('.board');
        link.select();
        navigator.clipboard.writeText(link.value)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/posts/' + id)
                setPost(res.data);
                setTags(res.data.categories);
                console.log(res.data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
            try {
                const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/posts')
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
        <div className='single-news'>
            {post &&<Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content={post.desc.slice(0, 100)}/>
                <title>{"Healthgen | " + post.title}</title>
                <link rel="canonical" href={window.location.href} />
            </Helmet>}
              <div className="scroll-line" style={{width: scroll + '%'}}></div>
              {post && <div className="wrapper">
                <img src={PF + post.image} alt={truncateTitle(post.title, 5)} crossOrigin="anonymous"/>
                <h2>{post.title}</h2>
                <h4>
                    <NavLink to={`/post?category=${post.categories}`} className="category">By: {post.author}</NavLink>
                    <span className="article-pre__aut date">{new Date(post.createdAt).toDateString()}</span> 
                    <span className="read">{readingTime(post.desc)} min read</span>
                </h4>
                <p style={{ whiteSpace: 'pre-wrap' }}>{post.desc}</p>
              </div>}
              
              {post && <div className="sidebar">
                <h4>Categories: 
                    {
                        tags && tags.map(category => {
                            return <a href={`https://healthgen-api.onrender.com/api/posts/?category=${category}`} key={category} title={category}>{category}</a>
                        })
                    }
                </h4>

                <div className="container">
                    <a href="https://facebook.com" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
                    <a href="https://instagram.com" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
                    <a href="https://youtube.com" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
                    <a href="https://linkedin.com" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
                </div>
                <div className="copy-link">
                    <input type="text" className='board' value={window.location.href} readOnly/>
                    <button  onClick={copyToBoard} type="button" title='copy'>
                        <i className='fa fa-clone'/>
                    </button>
                </div>
                <h2>Related Posts:</h2>
                <div className="news-items similar-blogs">
                {
                  posts.length > 0 && posts.filter((blog) =>{
                    return blog.id !== post.id;
                  }).map((blog) => {
                    return <Post key={blog.id}  post={blog}/>
                  })
                }
                </div>
                <Newsletter />
              </div>}
    
              {
                (!post && loading) && <Loader />
              }
        </div>
      )
}
export default SinglePost; 
