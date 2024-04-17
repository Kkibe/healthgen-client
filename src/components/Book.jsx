import React from 'react';
import { NavLink } from 'react-router-dom';
const Book = ({book}) => {
    const PF = 'https://healthgen-api-wt86.onrender.com/images/';
    const download = (link) => {
        var element = document.createElement('a');
        element.setAttribute('href', link);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    return (
    <div className="book">
        <div className="image-container">
            <img src={book.img && PF + book.img} alt={book._id} crossOrigin="anonymous"/>
        </div>
        <h2>{book.title}</h2>
        <div className="btn-group">
           <button type='button' title='download' onClick={() => download(book.file && (PF + book.file))}>DOWNLOAD</button>
           <NavLink to={`https://healthgen.onrender.com/books/${book._id}`} title={`https://healthgen.onrender.com/books/${book._id}`} state={{ history: `https://healthgen.onrender.com/books/${book._id}` }}><button type='button' title='open'>OPEN</button></NavLink>
        </div>
    </div>
    );
}
export default Book;
