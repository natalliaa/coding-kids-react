import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Error from '../pages/Error';

const BookDetails = () => {
    const { books } = useGlobalContext();

    //state for a single book
    const [book, setBook] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const currentBook = books.find((book) => book.id === id);
        setBook(currentBook);
    }, [id, books]);

    //the book is not found
    if (!book) {
        return <Error />
    }

    return (
        <main>
            <h1 className="title">{book.title}</h1>
            <section className="section-container">
                <div className="card">
                    <div className="card-grid">
                        <div className="book-img-container">
                            <img src={book.image} alt={book.title} />
                        </div>
                        <div className="book-info">
                            <p className="book-description">{book.description}</p>
                            <p><span className="book-data-label">Age: </span>
                                {book.age}</p>
                            <p><span className="book-data-label">Author: </span>
                                {book.author}</p>
                            <p><span className="book-data-label">Publisher: </span>
                                {book.publisher}</p>
                            <p><span className="book-data-label">Year: </span>
                                {book.date}</p>
                            <p><span className="book-data-label">Pages: </span>
                                {book.pages}</p>
                            <p><span className="book-data-label">ISBN-13: </span>
                                {book.isbn13}</p>
                        </div>  
                </div>
                <div className='store-link'>
                        <a className='btn' href={book.amazon} rel="noreferrer" target="_blank">Amazon</a>
                    </div>

                </div>
            </section>
        </main>
    )
}
export default BookDetails;