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
      borderRadius: 1,
      width: '100%',
      // maxWidth: 600,
      overflow: 'hidden',
      '&:focus-within': {
        borderColor: 'red',
        borderWidth: 2,
        margin: '-1px' // Border kalınlaşınca kaymayı önler
      }
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
          <InputAdornment position="start">
            <SearchIcon color="action" />
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
        }
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
        '& .MuiSelect-select': {
          padding: '12px 14px',
          color:'red'
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