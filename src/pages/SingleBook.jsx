import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import {useLocation} from 'react-router-dom';

export default function SingleBook() {
    const location = useLocation();
    const PF = 'https://healthgen-api.onrender.com/images/';
    const id = location.pathname.split('/')[2];
    const [book, setBook] = useState(null);

    const download = (link) => {
        var element = document.createElement('a');
        element.setAttribute('href', link);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get('https://healthgen-api.onrender.com/api/books/' + id)
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
                    <h2>{book.title}</h2>
                    <img src={book.img && PF + book.img} alt={book._id} crossOrigin="anonymous"/>
                    <p>
                        {book.desc && book.desc}
                    </p>
                    
                </div>
                
            )
        }

        {
            book && (
            <div>
                <span>Authors:<a>{book.author}</a></span>
                <span>
                    Genres:
                    {
                        book.categories && book.categories.map(category => {
                            return <a title={category}>{category}</a>
                        })
                    }
                </span>
                <button onClick={() => download(book.file && PF + book.file)}>DOWNLOAD</button>
            </div>
            )
        }
    </div>
  );
}