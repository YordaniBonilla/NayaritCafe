import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import ItemCard from './ItemCard.js'

export default function ProductsCard() {

    const heights = [50, 30,150,150,150,150,150,150];
    return (
      <Masonry columns={4} spacing={3}>
          {heights.map((height, index) => (
            <ItemCard key={index}/>
          ))}
      </Masonry>
    );
  }
  