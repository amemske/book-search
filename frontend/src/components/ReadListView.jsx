import React from 'react';
import { useReadingList } from '../context/ReadingListContext';
import { Grid, Typography } from '@mui/material';
import BookHorizontal from './BookHorizontal';


const trimTitle = (title) => {
  if (title.length > 20) {
    return title.substring(0, 20) + '...'; 
  }
  return title;
};

const ReadingListView = () => {
  const { readingList } = useReadingList();

  return (
    <div>
      <Typography variant="h5" style={{ marginTop: '0px' }}>
        My Reading List
      </Typography>

      {readingList.length > 0 ? (
        <>
          <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
            {readingList.length} {readingList.length === 1 ? 'Book' : 'Books'} Added
          </Typography>
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            {readingList.map((book) => (
              <Grid item xs={12} sm={12} md={12} key={`${book.title}-${book.author}`}>
                <BookHorizontal
                  title={book.title}
                  trimmedTitle = {trimTitle(book.title)}
                  author={book.author}
                  coverPhotoURL={book.coverPhotoURL}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
          No books in the reading list.
        </Typography>
      )}
    </div>
  );
};

export default ReadingListView;
