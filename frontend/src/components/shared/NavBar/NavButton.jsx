import React from 'react'
import {
    Typography, Button, Box, useColorScheme
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navButtonHoverStyles } from '../../../styles/styles';

// This is the Navigation Button, used when the screen is desktop
function NavButton() {
    // eslint-disable-next-line no-unused-expressions
    useColorScheme
    return (
        <Box sx={{ position: 'absolute', left: '50%', display: 'flex', transform: 'translateX(-50%)', alignItems: 'baseline' }}>
            {/* Display a list of navigation links */}
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">Home</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">About</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/predict" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">Predict</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/recommend" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">Recommend</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/classify" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">Classify</Button>
            </NavLink>
        </Box>
    )
}

export default NavButton
