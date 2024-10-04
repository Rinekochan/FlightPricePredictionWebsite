import React from 'react'
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box,
    Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, TextField,
    Switch, Snackbar, Alert, Fab, Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, CircularProgress, LinearProgress, Chip, Avatar, Divider,
    useColorScheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { navButtonHoverStyles } from '../../../constants/styles';

function NavButton() {
    useColorScheme
    return (
        <Box sx={{ position: 'absolute', left: '50%', display: 'flex', transform: 'translateX(-50%)', alignItems: 'baseline' }}>
            <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit" component={Link} to="/">Home</Button>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit" component={Link} to="/about">About</Button>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit" component={Link} to="/flight">Flight</Button>
            <Typography sx={{ display: 'inline' }}> | </Typography>
            <Button sx={{ ml: 1, mr: 1, '&:hover': navButtonHoverStyles }} color="inherit" component={Link} to="/faq">FAQ</Button>
        </Box>
    )
}

export default NavButton
