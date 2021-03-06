import React, { useState, useContext} from 'react'
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  //books state
  const [books, setBooks] = useState(data);   

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
