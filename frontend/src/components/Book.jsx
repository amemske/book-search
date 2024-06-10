import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import { useState } from 'react';

const Book =  ({title, author, coverPhotoURL, onAddToReadingList, onRemoveFromReadingList}) => {

    const [isInReadingList, setIsInReadingList] = useState(false);

  const handleClick = () => {
    setIsInReadingList(!isInReadingList);
    if (!isInReadingList) {
      onAddToReadingList();
    } else {
      onRemoveFromReadingList();
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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
          
            <Button size="small" onClick={() => {onAddToReadingList(); handleClick();} }>
            {isInReadingList ?    <BookmarkAddedIcon/> : <BookmarkIcon/>} 
              {isInReadingList ? 'Added to Reading List' : 'Add to Reading List'}</Button>
            
        </CardActions>
    </Card>
  );
};

export default Book;