'use client'
import { Box, Button, ButtonGroup, Card, CardMedia, Chip, ImageList, ImageListItem, Rating, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';


const ProductsDetail = () => {
  const labels: { [index: string]: string } = {
    1: '(1)',
    2: '(2)',
    3: '(3)',
    4: '(4)',
    5: '(5)',
  };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  const [selectedChip, setSelectedChip] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [value, setValue] = React.useState<number | null>(2);
  const [currentImage, setCurrentImage] = useState('/freshlime.jpg');
  const [selectedImage, setSelectedImage] = useState(1)
  const [valueTabs, setValueTabs] = React.useState(0);
  const images = [
    { id: 1, src: '/freshlime.jpg', title: 'Image-1' },
    { id: 2, src: '/freshlime.jpg', title: 'Image-2' },
    { id: 3, src: '/freshlime.jpg', title: 'Image-3' },
  ];
  const handleTypeClick = (type: any) => {
    setSelectedType(type);
  };
  const handleChipClick = (chip: any) => {
    setSelectedChip(chip);
  };
  const handleImageClick = (img: number) => {
    setSelectedImage(img);
  };
  const handleThumbnailClick = (src: string) => {
    setCurrentImage(src);
  };
  const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };
  return (
    <>
      <div className="flex container justify-start w-full gap-24 mx-8  ">
        <div className='basis-2/5 mb-12'>
          <Card className='mb-12' sx={{ maxWidth: 600 }}>
            <CardMedia image={currentImage}
              sx={{ height: 500, width: 599 }}
            />
          </Card>
          <Box className='h-16 flex justify-center gap-2'>
            {images.map((item) => (
              <Box className='border' sx={{
                opacity: selectedImage === item.id ? 1 : 0.4,
                borderRadius: '10px',
                borderColor: selectedImage === item.id ? '#D23F57' : '#2B3445',

              }} onClick={() => handleImageClick(item.id)} component={'span'}>
                <Image
                  className='rounded-[10px]'
                  src={item.src}
                  alt={item.title}
                  width={62}
                  height={62}
                  onClick={() => handleThumbnailClick(item.src)}
                />
              </Box>
            ))}
          </Box>
        </div>
        <Box component={'div'} className='w-full text-[#2B3445] basis-3/5 ' >
          <Typography gutterBottom variant="h4" sx={{ marginBottom: '8px' }}
            className=' text-3xl font-semibold' component="div">
            Fresh Line
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }} fontSize={14} color="text.secondary">
            <Box component="label" >
              Rated:</Box>
            <Rating readOnly component="label"
              precision={1}
              name="size-small" size='small' value={value} getLabelText={getLabelText}
            />   {value !== null && (
              <Box component="label" fontSize={'14px'} >{labels[value]}</Box>
            )}
          </Typography>
          <Box sx={{ marginBottom: 2 }} component={'div'} color={'#2B3445'}>
            <Typography fontSize={14} sx={{ marginBottom: '8px' }}>Option</Typography>
            <Box className='flex gap-2' component={'div'}>
              {['option 1', 'option 2', 'option 3', 'option 4'].map((option, index) => (
                <Chip
                  key={index}
                  label={option}
                  variant="outlined"
                  size="medium"
                  sx={{
                    borderRadius: '6px',
                    borderColor: selectedChip === option ? '#D23F57' : undefined,
                    color: selectedChip === option ? '#D23F57' : undefined,
                    '&:hover': {
                      // transition:
                      borderColor: selectedChip === option ? '#D23F57' : undefined,
                      color: selectedChip === option ? '#D23F57' : undefined,
                    },
                  }}
                  onClick={() => handleChipClick(option)}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ marginBottom: 2 }} component={'div'} color={'#2B3445'}>
            <Typography fontSize={14} sx={{ marginBottom: '8px' }}>Type</Typography>
            <Box className='flex gap-2' component={'div'}>
              {['type 1', 'type 2', 'type 3'].map((type, index) => (
                <Chip
                  key={index}
                  label={type}
                  variant="outlined"
                  size="medium"
                  sx={{
                    borderRadius: '6px',
                    borderColor: selectedType === type ? '#D23F57' : undefined,
                    color: selectedType === type ? '#D23F57' : undefined,
                    '&:hover': {
                      borderColor: selectedType === type ? '#D23F57' : undefined,
                      color: selectedType === type ? '#D23F57' : undefined,
                    },
                  }}
                  onClick={() => handleTypeClick(type)}
                />
              ))}
            </Box>
          </Box>
          <Box component={'div'} className='pt-2 mb-6'>

            <Typography sx={{ marginBottom: 0.5 }} fontSize={'25px'} lineHeight={'25px'} fontWeight={600} color="#D23F57">
              $146.00
            </Typography>
            <Typography>
              Stock Available
            </Typography>
          </Box>
          <Button variant="contained" sx={{
            marginTop: 1.3, backgroundColor: '#E3364E',
            fontWeight: 500, color: '#FFFFFF', fontSize: '14px',
            borderRadius: 2, height: '40px', fontFamily: 'sans-serif'
          }}>
            Add To Cart
          </Button>
        </Box>
      </div>
      <Box component={'div'} className='text-start'>
      <Tabs value={valueTabs} onChange={handleChangeTabs}>
        <Tab label="Description" />
        <Tab label="Review (3)" />
      </Tabs>
      
      {valueTabs === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Specification:</Typography>
          <Typography>Brand: Beats</Typography>
          <Typography>Model: S450</Typography>
          <Typography>Wireless Bluetooth Headset</Typography>
          <Typography>FM Frequency Response: 87.5 – 108 MHz</Typography>
          <Typography>Feature: FM Radio, Card Supported (Micro SD / TF)</Typography>
          <Typography>Made in China</Typography>
        </Box>
      )}
      
      {valueTabs === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Reviews</Typography>
          <Typography>Jannie Schumm - ⭐⭐⭐⭐ 4.7 (4 years ago)</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography>Joe Kenan - ⭐⭐⭐⭐ 4.7 (6 years ago)</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography>Jenifer Tulio - ⭐⭐⭐⭐ 4.7 (4 years ago)</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Box>
      )}
    </Box>
    </>
  )
}

export default ProductsDetail