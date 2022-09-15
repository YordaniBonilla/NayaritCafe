
import * as React from 'react';
import Box from '@mui/material/Box';
import ItemCard from './ItemCard'
function Body() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ p: 3 }}>
        <ItemCard/>
      </Box> 
    </Box>
  );
}
export default Body;