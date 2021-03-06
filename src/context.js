import React, { useState, useContext, useEffect } from 'react'
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  //books state
  const [books, setBooks] = useState(data);

  //unique categories from books data and option 'all'
  const allCategories = ['all books', ...new Set(books.map((book) => book.category))];
  //categories state
  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    setBooks(data);
  },[]);

  return <AppContext.Provider
    value={{
      books,
      setBooks,
      categories
    }}>
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider };
