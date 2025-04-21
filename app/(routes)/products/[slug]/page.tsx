'use client'
import { Avatar, Box, Button, ButtonGroup, Card, CardMedia, Chip, ImageList, ImageListItem, Rating, Tab, Tabs, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

function Review({ name, rating, time, text, avatar }) {
  return (
    <Box display="flex" alignItems="flex-start" mb={4}>
      <Avatar alt={`Profile picture of ${name}`} src={avatar} />
      <Box ml={2}>
        <Typography variant="subtitle1" component="div">{name}</Typography>
        <Box display="flex" alignItems="center">
          <Rating size='small' value={rating} readOnly />
          <Typography variant="body2" color="textSecondary" ml={1}>{rating}</Typography>
          <Typography variant="body2" color="textSecondary" ml={2}>{time}</Typography>
        </Box>
        <Typography width={600} fontSize={14} sx={{ color: '#4B566B' }} variant="body2">{text}</Typography>
      </Box>
    </Box>
  );
}
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
  const reviews = [
    { name: "Jannie Schumm", rating: 4.7, time: "4 years ago", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.", avatar: "/avatar1.png" },
    {
      name: "Joe Kenan",
      rating: 4.7,
      time: "6 years ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      avatar: "/avatar2.png" // Avatar URL'sini buraya ekleyebilirsiniz
    },
    {
      name: "Jenifer Tulio",
      rating: 4.7,
      time: "4 years ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      avatar: "/avatar3.png" // İkinci avatar URL'sini buraya ekleyebilirsiniz
    }
  ]

  const Specification = [
    "Brand: Beats",
    "Model: S450",
    "Wireless Bluetooth Headset",
    "FM Frequency Response: 87.5 – 108 MHz",
    "Feature: FM Radio, Card Supported (Micro SD / TF)",
    "Made in China"
  ]
  
  return (
    <>  
      <div className="flex container justify-start w-full gap-24 mx-8">
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
                  className='rounded-[10px] cursor-pointer'
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
      <Box sx={{ marginBottom: 4 }} component={'div'} className='text-start'>
        <Tabs sx={{
          fontSize: '14px',
          color: '#D23F57',
          '& .MuiTabs-indicator': {
            backgroundColor: '#D23F57',
          }, marginBottom: 2
        }} indicatorColor="secondary" value={valueTabs} onChange={handleChangeTabs}>
          <Tab sx={{
            '&.Mui-selected': {
              color: '#D23F57', // Seçili tabın metin rengi
            },
          }} label="Description" />
          <Tab sx={{
            '&.Mui-selected': {
              color: '#D23F57', // Seçili tabın metin rengi
            },
          }} label="Review (3)" />
        </Tabs>
        {valueTabs === 0 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#2B3445', marginBottom: 2 }}>Specification:</Typography>

            <Box>
              {Specification.map((item, index) => (
                <Typography key={index} sx={{ marginBottom: 1, color: '#2B3445', fontSize: '14px' }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
        {valueTabs === 1 && (
          <>
            <Box mt={2}>
              {reviews.map((item, index) => (
                <Review
                  key={index}
                  name={item.name}
                  rating={item.rating}
                  time={item.time}
                  text={item.text}
                  avatar={item.avatar}
                />
              ))}

            </Box>
            <Box mt={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#2B3445' }}>Write a Review for this product</Typography>
              <Box component={'div'} className='flex' mt={2}>
                <Typography component={'span'} className='text-sm text-[#4B566B]'>Your Rating *</Typography>
                <Rating name="simple-controlled" value={2} />
              </Box>
              <Box mt={2}>
                <Typography component={'span'} className='
                text-sm text-[#4B566B]'>Your Review *</Typography>
                <TextField
                  fullWidth
                  sx={{
                      height: '200px', color: '#2B3445', '& .MuiOutlinedInput-root': {
                      color: '#2B3445',
                      borderRadius: '8px',
                      border: '1px solid #2b34451a', // Başlangıçta kenar rengi
                      '&:hover': {
                        borderColor: 'black', // Hover durumunda kenar rengi
                      },
                      '&:focus-within': {
                        borderColor: '#E3364E',
                      },
                      '& fieldset': {
                        border: 'none',
                        fontSize: '14px', // Kenarı kaldır
                      },
                    },
                  }}
                  multiline
                  size='small'
                  rows={8}
                  variant="outlined"
                  placeholder="Write a review here..."
                />
              </Box>
              <Box mt={2}>
                <Button sx={{ borderRadius: 2, backgroundColor: '#E3364E' }} variant="contained" >Submit</Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  )
}

export default ProductsDetail