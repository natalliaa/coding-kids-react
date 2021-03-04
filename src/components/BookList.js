import React from 'react';
import Book from './Book';
import { useGlobalContext } from '../context';

const BookList = () => {

    const { books } = useGlobalContext();

    return (
        <section className="section">
            <div className="books-grid">
                {books.map((book) => {
                    return <Book key={book.id} {...book} />;
                })
                }
            </div>
        </section>
    )
};

export default BookList;