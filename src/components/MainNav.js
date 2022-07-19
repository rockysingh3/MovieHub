import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie'
import SearchIcon from '@mui/icons-material/Search'
import TvIcon from '@mui/icons-material/Tv'


export default function SimpleBottomNavigation() {
  /* state is used to track which nav the user clicked */
  const [value, setValue] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if(value === 0) navigate('/')
    else if (value === 1) navigate('/movies')
    else if (value === 2) navigate('/series')
    else if (value === 3) navigate('/search')
  }, [value, navigate])

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0,  zindex: 100 }}>
      <BottomNavigation
        sx={{backgroundColor: '#2d313a'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ color: 'white'}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction sx={{ color: 'white'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction sx={{ color: 'white'}} label="TV Series" icon={<SearchIcon />} />
        <BottomNavigationAction sx={{ color: 'white'}} label="Search" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}