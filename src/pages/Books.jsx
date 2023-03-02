import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Book from '../components/Book';
import Loader from '../components/Loader';

const Books = () => {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('https://healthgen-api.onrender.com/api/books')
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBooks();
    }, [])
    return (
        <div className='books'>
            <h2>Download E-book Of Your Choice</h2>
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
                  <Loader />
                </div>)
            }    
        </div>
    );
}

export default Books;
