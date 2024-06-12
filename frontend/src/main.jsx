import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from './apollo.js'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          textTransform: 'none',
        },
      },
    },
    MuiAutocomplete: { 
      defaultProps: { 
        sx: { 
          backgroundColor: 'white', 
      },
    },
  },
  },
  palette: {
    primary: {
      main: '#28b8b8',
      SteelBlue: '#335c6e',  
      Yellow: '#fabd33'
    },
    secondary: {
      main: '#4aa088', //teal
      TurquoiseLight: '#cffafa',
      TurquoiseDark1: '#53c2c2',
      OrangePastel: '#ffe6dc',
      
    },
    common: {
      white: '#ffffff',  
    },
    other: {
      OrangeRed: '#f76434',
      TurquoiseDark2: '#28b8b8',
      YellowDark: '#faad00'
    },
    background: {
      default: '#f9fafb', 
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
    h1: {
      fontWeight: 800,
      color: '#335c6e'
    },
    h2: {
      fontWeight: 800,
       color: '#335c6e'
    },
    h3: {
      fontWeight: 800,
       color: '#335c6e'
    },
    h4: {
      fontWeight: 800,
      color: '#335c6e'
    },
    h5: {
      fontWeight: 800,
      color: '#335c6e'
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </ApolloProvider>
);
