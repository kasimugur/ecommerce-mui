'use client'
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';


const ProductsDetail = () => {
  return (
    <div className="flex justify-start w-full gap-20 mx-8 ">
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia image='https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=1920&q=75'
          sx={{ height: 500, width: 599 }}
        />
      </Card>
      {/* <Box component={'div'} className='w-full' >
        <Typography gutterBottom variant="h5" component="div">
          Fresh Line
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rated: ★★★☆☆ (0)
        </Typography>
        <Typography variant="h6" color="text.primary">
          $146.00
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock Available
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Add To Cart
        </Button>
      </Box>
       */}
    </div>
  )
}

export default ProductsDetail