import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SearchResultCard = ({ title, author, coverPhotoURL }) => {

  return (
    <Card sx={{ display: 'flex' }}  style={{ width: '100%' }}>
      <CardMedia
        component="img"
        sx={{ width: 60 }}
        image={coverPhotoURL}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            by {author}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SearchResultCard;
