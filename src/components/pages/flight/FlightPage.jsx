import React from 'react'
import NavBar from '../../shared/NavBar/NavBar'
import {
    AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box,
    Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, TextField,
    Switch, Snackbar, Alert, Fab, Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, CircularProgress, LinearProgress, Chip, Avatar, Divider
} from '@mui/material';

function FlightPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            <Box sx={{my: 5}}>
                I'm Flight Page
            </Box>
        </Box>
    )
}

export default FlightPage
