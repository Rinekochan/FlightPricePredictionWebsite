import React from 'react'
import {
    Typography, Button, Box, useColorScheme
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navButtonHoverStyles } from '../../../styles/styles';

function NavButton() {
    // eslint-disable-next-line no-unused-expressions
    useColorScheme
    return (
        <Box sx={{ position: 'absolute', left: '50%', display: 'flex', transform: 'translateX(-50%)', alignItems: 'baseline' }}>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">Home</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">About</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/flight" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">Flight</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/faq" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit">FAQ</Button>
            </NavLink>
        </Box>
    )
}

export default NavButton
