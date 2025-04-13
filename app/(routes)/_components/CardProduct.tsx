'use client'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import * as React from 'react';
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
const CardProduct = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [isHovered, setIsHovered] = React.useState(false);
  const router = useRouter();
  return (
    <div className='px-[10px]'>
      <Card className='bg-[#383838] mt-12' sx={{ maxWidth: 348, backgroundColor: '#F6F9FC' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <CardActionArea >
          <CardMedia
            component="img"
            height={350}
            sx={{
              filter: isHovered ? 'blur(3px)' : 'none',
              transition: 'filter 0.3s ease',
            }}
            image="https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=1920&q=75"
            alt="green iguana"
          />
          <Chip sx={{
            position: 'absolute',
            top: '20px',
            left: '18px',
            bgcolor: '#D23F57',
            color: 'white',
            borderRadius: '4px',
            paddingX: '12px'
          }} size='small' label="7% off" />
        </CardActionArea>
      </Card>
      <Box component="div" className='text-center text-sm p-4'>
        <Typography className='cursor-pointer' sx={{ color: '#4B566B' }} gutterBottom fontSize={'14px'} component="label" onClick={()=> router.push('/products/page')}>
          Fresh lime
        </Typography>
        <Typography component="label" sx={{ color: 'text.secondary', display: 'flex', justifyContent: 'center', marginY: 0.5 }} fontSize={'14px'}>
          <Rating readOnly
            precision={1}
            name="size-small" size='small' value={value} getLabelText={getLabelText}
          />  {value !== null && (
            <Box component="label" fontSize={'12px'} sx={{ ml: 2 }}>{labels[value]}</Box>
          )}
        </Typography>
        <Box component="label" sx={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 1 }} >
          <Typography component="label" color='error' fontSize={14}>
            $145.96
          </Typography>
          <Typography component="label" className='text-gray-500 line-through opacity-750' fontSize={14}>
            $164.00
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default CardProduct