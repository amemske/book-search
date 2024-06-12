import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchableBookResults from './pages/SearchableBookResults'
import ReadingListView from './components/ReadListView';
import { ReadingListProvider } from './context/ReadingListContext';
import { Typography } from '@mui/material';
import '@fontsource/mulish';
import '@fontsource/mulish/800.css';


function App() {

  return (
    <ReadingListProvider>
       
          <CssBaseline />

        <Container maxWidth="lg" style={{ paddingTop: '30px', paddingBottom: '30px' }}>

        <Grid container spacing={4}  style={{ paddingBottom: '30px'}}>
            <Grid item xs={12} md={12}>
                <Typography variant="h4" component="h2" >
                      Search for a book
                </Typography>
            </Grid>

            
          </Grid>
        

        <Grid container spacing={4}>
            <Grid item xs={12} md={9}>
              <SearchableBookResults />
            </Grid>
            <Grid item xs={12} md={3}>
              <ReadingListView />
            </Grid>
          </Grid>
        
            
          
        </Container>
       
    </ReadingListProvider>
  )
}

export default App
