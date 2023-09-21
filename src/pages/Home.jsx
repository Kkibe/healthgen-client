import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Book from '../components/Book'
import Loader from '../components/Loader'
import Post from '../components/Post'
import Slider from '../components/Slider'

export default function Home() {
  const [books, setBooks] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/books')
              setBooks(res.data);
          } catch (error) {
              console.log(error);
          }
          try {
            const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/posts')
            setPosts(res.data);
        } catch (error) {
            console.log(error);
        }
      }
      fetchData();
  }, [])
  return (
    <div className='home'>
      <Slider />
      <div className="popular-posts">
        <h2>Popular Posts</h2>
        <div className="wrapper">
            {
                posts && posts.map(post => {
                    return <Post key={post._id} post={post}/>
                })
            }
            {
                !posts && (<div className='wrapper'>
                  <Loader />
                  <Loader />
                  <Loader />
                </div>)
            }    
        </div>
        <h2>Popular Books</h2>
            {
                books && (
                <div className="wrapper">
                    {
                        books.map(book => {
                            return <Book key={book._id} book={book}/>
                        })
                    }
                </div>
                )
            } 

            {
                !books && (<div className='wrapper'>
                  <Loader />
                  <Loader />
                  <Loader />
                </div>)
            }    
          
      </div>
    </div>
  )
}
