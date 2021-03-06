import React, { useState, useContext, useEffect } from 'react'
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  //books state
  const [books, setBooks] = useState(data);

  useEffect(() => {
    setBooks(data);
  }, []);

  return <AppContext.Provider
    value={{
      books,
      setBooks
    }}>
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider };
