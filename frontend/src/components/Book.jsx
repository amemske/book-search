import * as React from 'react';
import { useReadingList } from '../context/ReadingListContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import { useState, useEffect } from 'react';

const Book =  ({title, author, coverPhotoURL}) => {
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
    <Card sx={{ boxShadow: '0 8px 20px 1px rgba(0,0,0,.05)' }}>
        <CardMedia
            component="img"
            alt={title}
            height="150"
            image={coverPhotoURL}
        />
        <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    by {author}
                </Typography>
        </CardContent>
        <CardActions>
          
        <Button size="small" onClick={handleClick}>
          {isInReadingList ? <BookmarkAddedIcon /> : <BookmarkIcon />}
          {isInReadingList ? 'Added to Reading List' : 'Add to Reading List'}
        </Button>
            
        </CardActions>
    </Card>
  );
};

export default Book;