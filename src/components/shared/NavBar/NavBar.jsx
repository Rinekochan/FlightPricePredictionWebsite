import React from 'react'
import {
  AppBar, Toolbar, Typography, IconButton,
  Box,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  AirplanemodeActive as AirplanemodeActiveIcon,
} from '@mui/icons-material';
import NavDrawer from './NavDrawer';
import NavButton from './NavButton';

function NavBar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md')); // Adjust according to your breakpoint
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3F4B3B' }}>
      <Toolbar>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: isMobile ? 1 : 0 }}>
          <AirplanemodeActiveIcon sx={{ ml: 5, mr: 1.5 }} />
          <Typography variant="h6">
            Kamikaze
          </Typography>
        </Box>
        {
          isMobile ?
            ( // If the screen size is as small as mobile screen, show drawer
                <NavDrawer />
            ) : ( // else show normal buttons
                <NavButton />
            )
        }
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
