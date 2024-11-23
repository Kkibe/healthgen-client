import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Book from './Book';
import Loader from '../../components/Loader/Loader';
import './Books.scss';

const Books = () => {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/books')
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBooks();

        
    }, [])

    useEffect(() => {
        books && console.log(books)
    }, [books])
    return (
        <div className='books'>
            <h1>Endless Stories Await – Discover and Download Your Favorite Books!</h1>
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
