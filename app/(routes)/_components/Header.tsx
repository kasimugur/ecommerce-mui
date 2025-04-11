import Image from 'next/image'
import React from 'react'
import headerlogo from '@/public/headerlogo.svg'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import {  Box, Button, FormControl, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { AccountCircleOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import SearchComponent from './Search';
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
    <SearchComponent />
      </div>
      
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
