import React from 'react'
import {
  AppBar
} from '@mui/material';
import ToolBar from './ToolBar';

// This is the shared NavBar component
function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3F4B3B" }}>
      <ToolBar />
    </AppBar>
  )
}

export default NavBar
