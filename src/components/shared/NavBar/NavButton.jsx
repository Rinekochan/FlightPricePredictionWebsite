import React from 'react'
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box,
    Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, TextField,
    Switch, Snackbar, Alert, Fab, Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, CircularProgress, LinearProgress, Chip, Avatar, Divider,
    useColorScheme
} from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import { navButtonHoverStyles, navButtonActive } from '../../../constants/styles';

function NavButton() {
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
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit" component={Link} to="/flight">Flight</Button>
            </NavLink>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <NavLink to="/faq" style={({ isActive }) => ({ color: isActive ? '#E4BB97' : "inherit", borderBottom: isActive ? '2px solid #E4BB97' : 'none' })}>
                <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit" component={Link} to="/faq">FAQ</Button>
            </NavLink>
        </Box>
    )
}

export default NavButton
