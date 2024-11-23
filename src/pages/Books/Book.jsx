import React from 'react';
import { NavLink } from 'react-router-dom';
import { download } from '../../download';
import './Book.scss';

const Book = ({book}) => {
    const PF = 'https://healthgen-api-wt86.onrender.com/api/';
    return (
    <div className="book">
        <div className="image-container">
            <img src={book.image && PF + book.image} alt={book._id} crossOrigin="anonymous"/>
        </div>
        <h2>{book.title}</h2>
        <div className="btn-group">
           <button type='button' title='download' onClick={() => download(book.file && PF + book.file, book.file &&  book.file)}>DOWNLOAD</button>
           <NavLink to={`/books/${book._id}`} title={`https://healthgen.onrender.com/books/${book._id}`} state={{ history: `https://healthgen.onrender.com/books/${book._id}` }}><button type='button' title='open'>OPEN</button></NavLink>
        </div>
    </div>
    );
}
export default Book;
