import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import Categories from '../components/Categories';
import { useGlobalContext } from '../context';

const Books = () => {

    return (
        <main>
            <h1 className="title">Coding Books for Kids</h1>
            <Categories />
            <BookList />
        </main>
    )
}

export default Books;