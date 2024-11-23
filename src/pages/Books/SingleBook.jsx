import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import {useLocation} from 'react-router-dom';
import { download } from '../../download';
import './SingleBook.scss';

export default function SingleBook() {
    const location = useLocation();
    const PF = 'https://healthgen-api-wt86.onrender.com/api/';
    const id = location.pathname.split('/')[2];
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get('https://healthgen-api-wt86.onrender.com/api/books/' + id)
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBook();
    }, [id]);
  return (
    <div className='single-book'>
        {
            book && (
                <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content={book.desc.slice(0, 100)}/>
                <title>{"Healthgen | " + book.title}</title>
                <link rel="canonical" href={window.location.href} />
            </Helmet>
                    <h1>{book.title}</h1>
                    <img src={book.image && PF + book.image} alt={book._id} crossOrigin="anonymous"/>
                    <p>
                        {book.desc && book.desc}
                    </p>
                </div>
                
            )
        }

        {
            book && (
            <div>
                <span>
                    <span>Author:<a>{book.author}</a></span>
                    <span className='date'>Date: <a title='date'>{new Date(book.createdAt).toLocaleDateString()}</a></span>
                </span>

                <span>
                    Genres: 
                    {
                        book.categories && book.categories.map(category => {
                            return (<span title={category}>{ category }</span>)
                        })
                    }
                </span>
                <button onClick={() => download(book.file && PF + book.file, book.file &&  book.file)}>DOWNLOAD</button>
            </div>
            )
        }
    </div>
  );
}
