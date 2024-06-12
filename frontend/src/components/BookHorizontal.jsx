import * as React from 'react';
import { useReadingList } from '../context/ReadingListContext';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

const BookHorizontal = ({ title, trimmedTitle, author, coverPhotoURL }) => {
  const { addToReadingList, removeFromReadingList, readingList } = useReadingList();
  const [isInReadingList, setIsInReadingList] = useState(false);

  useEffect(() => {
    const isBookInList = readingList.some(book => book.title === title);
    setIsInReadingList(isBookInList);
  }, [readingList, title]);

  const handleClick = () => {
    if (!isInReadingList) {
      addToReadingList({ title, author, coverPhotoURL });
    } else {
      removeFromReadingList(title);
    }
    setIsInReadingList(!isInReadingList);
  };

  return (
    <Card sx={{ display: 'flex', boxShadow: '0 8px 20px 1px rgba(0,0,0,.05)'  }}>
      <CardMedia
        component="img"
        sx={{ width: 121 }}
        image={coverPhotoURL}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1">
            {trimmedTitle}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            by {author}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button size="small" onClick={handleClick}>
            <DeleteIcon/> Remove
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BookHorizontal;
