import React from 'react'
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box,
    Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, TextField,
    Switch, Snackbar, Alert, Fab, Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, CircularProgress, LinearProgress, Chip, Avatar, Divider
} from '@mui/material';
import Greeting from './Greeting';
import Contact from './Contact';
import Footer from '../../shared/Footer';

function HomePage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Greeting />
            <Contact />
            <Footer />
        </Box>
    )
}

export default HomePage
