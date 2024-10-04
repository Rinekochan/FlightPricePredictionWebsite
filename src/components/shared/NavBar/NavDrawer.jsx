import React, { useState } from 'react'
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box,
    Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, TextField,
    Switch, Snackbar, Alert, Fab, Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, CircularProgress, LinearProgress, Chip, Avatar, Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    Help as HelpIcon,
    Flight as FlightIcon,
} from '@mui/icons-material';

function NavDrawer() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{display: 'flex', mr: 3}}>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><HomeIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/about">
                            <ListItemIcon><InfoIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="About" />
                        </ListItem>
                        <ListItem button component={Link} to="/flight">
                            <ListItemIcon><FlightIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="Flight" />
                        </ListItem>
                        <ListItem button component={Link} to="/faq">
                            <ListItemIcon><HelpIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="FAQ" />
                        </ListItem>
                    </List>
                    {/* <Divider />
            <List>
            <ListItem>
            <ListItemText primary="Dark Mode" />
            <Switch checked={darkMode} onChange={handleDarkModeToggle} />
            </ListItem>
            </List> */}
                </Box>
            </Drawer>
        </Box>
    )
}

export default NavDrawer
