// SearchableBookResults.jsx
import React from 'react';
import { useState } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Book from '../components/Book'; 
import { gql, useQuery } from '@apollo/client';
import { Typography } from '@mui/material';



const SearchableBookResults = () => {
  

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      

      {filteredBooks.length == 0 && searchText.trim() !== '' && (
  <Typography variant='h4' style={{ marginTop: '20px', minHeightheight: '100vh'}}>There are no books in your reading list. <Button size="small" onClick={() => {onAddToReadingList(); handleClick();} }>
  {isInReadingList ?    <BookmarkAddedIcon/> : <BookmarkIcon/>} 
    {isInReadingList ? 'Added to Reading List' : 'Add to Reading List'}</Button>
    </Typography>
) }
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={`${book.title}-${book.author}`}>
            <Book
              title={book.title}
              author={book.author}
              coverPhotoURL={book.coverPhotoURL}
              onAddToReadingList={() => {
                // Add book to reading list
              }}
              onRemoveFromReadingList={() => {
                // Remove book from reading list
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchableBookResults;