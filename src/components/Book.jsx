import React from 'react';
const Book = ({book}) => {
    const PF = 'https://healthgen-api.onrender.com/images/';
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
           <button type='button' title='download' onClick={() => download(book.file && PF + book.file)}>DOWNLOAD</button>
           <a href={`https://healthgen.onrender.com/books/${book._id}`} title={`https://healthgen.onrender.com/books/${book._id}`}><button type='button' title='open'>OPEN</button></a>
        </div>
    </div>
    );
}
export default Book;