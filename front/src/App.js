import React from "react"
import NavBar from './NavBar.js'


import Box from '@mui/material/Box';
import ProductsCard from "./ProductsCard.js";

function App() {

  return (
    <Box>

<NavBar/>
    <Box component="main" sx={{ p: 3 }}>
        <ProductsCard/>
    </Box> 
    </Box>
    
  );
}

export default App;
