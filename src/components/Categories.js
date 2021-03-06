import React from 'react';
import { useGlobalContext } from '../context';
import data from '../data';

const Categories = () => {

    const { categories, setBooks } = useGlobalContext();

    //filter books by tags
    const filterBooks = (category) => {
        if (category === 'all books') {
            setBooks(data);
            return;
        }
        const newBooks = data.filter((book) => book.category === category);
        console.log(newBooks);
        setBooks(newBooks);
    }

    return <div className="tags-container">
        {categories.map((category, index) => {
            return <button type="button" className="btn btn-categories"
                key={index} onClick={() => filterBooks(category)} >{category}</button>
        })}
    </div>
};

export default Categories;