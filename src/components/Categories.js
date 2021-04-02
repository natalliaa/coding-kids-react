import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import data from '../data';

const Categories = () => {

    const { setBooks } = useGlobalContext();

    //unique categories from books data and option 'all'
    const allCategories = ['all books', ...new Set(data.map((book) => book.category))];
    //categories state
    const [categories, setCategories] = useState(allCategories);

    //filter books by tags
    const filterBooks = (category) => {
        if (category === 'all books' || !category) {
            setBooks(data);
        }
        else {
            const newBooks = data.filter((book) => book.category === category);
            setBooks(newBooks);
        }
    }

    return <div className="tags-container">
        {categories.map((category, index) => {
            return <button type="button" className="btn btn-categories"
                key={index} onClick={() => filterBooks(category)} >{category}</button>
        })}
    </div>
};

export default Categories;