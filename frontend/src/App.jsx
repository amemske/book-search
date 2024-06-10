import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SearchableBookResults from './pages/SearchableBookResults'




function App() {

  return (
    <>
      <CssBaseline />
    <Container maxWidth="md">
     
        <SearchableBookResults />
      
    </Container>
    </>
  )
}

export default App
