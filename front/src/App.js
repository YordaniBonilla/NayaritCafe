import React from "react"
import NavBar from './NavBar.js'
import Body from './Body.js'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'

function App() {

  return (
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Body/>
    </ThemeProvider>    
  );
}

export default App;
