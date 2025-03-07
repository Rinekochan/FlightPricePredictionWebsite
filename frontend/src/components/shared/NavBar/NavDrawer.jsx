import React, { useState } from 'react'
import {
    Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    PriceChange as PriceChangeIcon,
    Recommend as RecommendIcon,
    Category as CategoryIcon
} from '@mui/icons-material';

// This is the Navigation Drawer component, used when the screen is mobile
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
                    {/* Display a list of navigation links */}
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><HomeIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/about">
                            <ListItemIcon><InfoIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="About" />
                        </ListItem>
                        <ListItem button component={Link} to="/predict">
                            <ListItemIcon><PriceChangeIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="Predict" />
                        </ListItem>
                        <ListItem button component={Link} to="/recommend">
                            <ListItemIcon><RecommendIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="Recommend" />
                        </ListItem>
                        <ListItem button component={Link} to="/classify">
                            <ListItemIcon><CategoryIcon sx = {{color: '#3F4B3B'}} /></ListItemIcon>
                            <ListItemText sx = {{color: 'black'}} primary="Classify" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default NavDrawer
