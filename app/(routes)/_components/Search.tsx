import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const SearchComponent = () => {

  

  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 2,
      width: '100vh',
      height:'46px',
      maxWidth: '670px',
      overflow: 'hidden',
      fontSize:'14px',
      lineHeight:'25.2px',
      '&:focus-within': {
        borderColor: 'red',
        borderWidth: 2,
        margin: '-1px' // Border kalınlaşınca kaymayı önler
      },
      backgroundColor:'#F3F5F9',
      '&:hover':{border:'1px solid #000000'},
      color: '#2b3445'
    }}
  >
    {/* Arama kısmı */}
    <TextField
      fullWidth
      placeholder="Searching for..."
      // value={searchText}
      // onChange={(e) => setSearchText(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment 
          position="start">
          <div className='pr-4 pl-[2] border-r-[0.5px] border-solid border-[#e4e6e9]'>
          <SearchIcon  color="action" />
          </div>
          </InputAdornment>
        ),
        sx: {
          '& fieldset': { border: 'none' },
          '&.Mui-focused fieldset': { border: 'none' },
          color: '#2b3445'
        }
      }}
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 0
        },
        paddingLeft:0
        
      }}
    />

    {/* Kategori seçim dropdown'ı */}
    <Divider orientation="vertical" flexItem />
    <Select
    value='all'
    defaultValue={'all'}
      IconComponent={ExpandMoreIcon}
      variant="outlined"
      displayEmpty
      sx={{
        width: 180,
        fontSize:'14px',
        lineHeight:'25.2px',
        '& .MuiSelect-select': {
          // LepaddingLeft: '12px 14px',
          color:'#4B566B'
        },
        '& fieldset': {
          border: 'none',
          borderLeft: 'none'
        },
        '&.Mui-focused fieldset': {
          border: 'none'
        }
      }}
    >
      <MenuItem value="all">All Categories</MenuItem>
      <MenuItem value="electronics">Electronics</MenuItem>
      <MenuItem value="clothing">Clothing</MenuItem>
      <MenuItem value="books">Books</MenuItem>
    </Select>
  </Box>
  );
};

export default SearchComponent;