import Image from 'next/image'
import React from 'react'
import headerlogo from '@/public/headerlogo.svg'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import {  Box, Button, FormControl, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { AccountCircleOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import SearchComponent from './_components/Search';
export default function Header() {
  return (
    <div className='h-20 w-full flex items-center justify-between'>
      <div className="flex items-center">
        <Link href={'/'}>
          <Image src={headerlogo} alt='logoheader' />
        </Link>
      </div>
      {/* search alanı */}
      <div className="">
      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <TextField
        placeholder="Searching for..."
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}

        // className='searchbar'
        // variant="outlined"
        sx={{ 
          width: 300,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
      borderBottomRightRadius: 0, // Burada border radius'u 0 yapıyoruz
      borderTopRightRadius: 0, // Burada border radius'u 0 yapıyoruz
      color:'#2b3445',
      border: '0.5px solid ##cfd0d3', // Border rengi ve kalınlığı
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#000000', // Hover durumunda border rengi
      },
      '&.Mui-focused fieldset':{
        border:'2px solid #e74c3c '
      },
    },  flex: 1,
    '& fieldset': {
      borderRight: 'none' // Sağ border'ı kaldır
    }
    
        }}
      
    />
      
      <FormControl sx={{ minWidth: 120 , bgcolor: 'red'}}>
        <Select
          value={'sadfas'}
        
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ 
            height: '56px',
            borderRadius: 2,
          }}
        >
          <MenuItem value="all">All Categories</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="clothing">Clothing</MenuItem>
          <MenuItem value="books">Books</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
    <SearchComponent />
      </div>
      {/* <div className="flex justify-between w-full rounded-lg h-[46px] mx-80 text-[#2b3445] bg-[#f3f5f9] border-2  ">
      
        <div className="flex items-center  h-full">
          <div className="flex items-center justify-center border-r-[1px] border-[#cfd0d3] px-4 mr-4 ">
            <div className="flex items-center flex-grow h-full">

              <SearchIcon sx={{ width: 17, height: 17 }} />
            </div>
          </div>
        </div>

        <TextField fullWidth variant='standard' className='border-b-0' />

        <Button  >clothes</Button>
      </div> */}


      <div className="flex w-20 h-10">
        <div className="p-2">
          <AccountCircleOutlined  fontSize='medium' color='disabled' />
        </div>
        <span className="p-2">
          <ShoppingBagOutlined  fontSize='medium' color='disabled' />
        </span>
      </div>
    </div>
  )
}
