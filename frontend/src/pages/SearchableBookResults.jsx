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


const BOOKS_QUERY = gql`
  query {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const SearchableBookResults = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  const [searchText, setSearchText] = useState('');
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Input
        label="Search Books"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        }
      />

      {filteredBooks.length == 0 && searchText.trim() !== '' && (
  <Typography variant='h4' style={{ marginTop: '20px', minHeightheight: '100vh'}}>No books found matching the term {searchText}.</Typography>
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