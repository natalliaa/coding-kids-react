import React from 'react';
import Book from './Book';
import { useGlobalContext } from '../context';
import data from '../data';

const BookList = () => {

    const { books, setBooks } = useGlobalContext();

    React.useEffect(()=>{
        setBooks(data);
    }, [])

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