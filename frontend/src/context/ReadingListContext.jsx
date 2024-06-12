import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const ReadingListContext = createContext();

// Create a provider component
export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState(() => {
    // Load reading list from localStorage
    const savedList = localStorage.getItem('readingList');
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    // Save reading list to localStorage whenever it changes
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  const addToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };


  
  const removeFromReadingList = (bookTitle) => {
    setReadingList((prevList) =>
      prevList.filter((book) => book.title !== bookTitle)
    );
  };

  return (
    <ReadingListContext.Provider
      value={{ readingList, addToReadingList, removeFromReadingList }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};

// Custom hook to use the Reading List context
export const useReadingList = () => {
  return useContext(ReadingListContext);
};
