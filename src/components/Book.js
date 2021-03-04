import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ id, title, image, author, age }) => {
    return (
        <article className="book">
            <div className="img-container">
                {/* <a href={`/coding-kids-react/book/${id}`}><img src={image} alt={title} /></a> */}
                <Link to={`/coding-kids-react/book/${id}`}><img src={image} alt={title} /></Link>
            </div>
            <div className="book-footer">
                <h2>{title}</h2>
                <p>{age} years</p>
                <Link to={`/coding-kids-react/book/${id}`} className="btn">open</Link>
            </div>
        </article>
    )
};

export default Book;