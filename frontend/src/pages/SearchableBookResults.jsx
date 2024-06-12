import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Book from '../components/Book';
import { gql, useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import SearchResultCard from '../components/searchResultCard';
import { useDebounce } from 'use-debounce';

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
  const [debouncedSearchText] = useDebounce(searchText, 500); 
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearchChange = (event, value) => {
    setSearchText(value);
  };

  useEffect(() => {
    if (data?.books) {
      const filtered = data.books.filter((book) =>
        book.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [data?.books, debouncedSearchText]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Autocomplete
        freeSolo
        options={filteredBooks.map((book) => book.title)}
        inputValue={searchText}
        onInputChange={handleSearchChange}
        renderOption={(props, option) => {
          const book = data.books.find((b) => b.title === option);
          return (
            <li {...props} style={{ width: '100%' }}>
              <SearchResultCard
                title={book.title}
                author={book.author}
                coverPhotoURL={book.coverPhotoURL}
                style={{ width: '100%' }}
              />
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: '100%' }}
          />
        )}
      />

      {filteredBooks.length === 0 && debouncedSearchText.trim() !== '' && (
        <Typography variant="h5" style={{ marginTop: '20px', minHeight: '70vh' }}>
          No books found matching the term {debouncedSearchText}.
        </Typography>
      )}

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={`${book.title}-${book.author}`}>
            <Book
              title={book.title}
              author={book.author}
              coverPhotoURL={book.coverPhotoURL}
              
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchableBookResults;
