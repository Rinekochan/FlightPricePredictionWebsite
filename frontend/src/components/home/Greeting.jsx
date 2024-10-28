import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import ToolBar from '../shared/NavBar/ToolBar'
import PlaneBackground from '../../assets/PlaneBackground.jpg'
import { Link } from 'react-router-dom';
import { normalButtonStyles, normalButtonHoverStyles } from '../../styles/styles';

function Greeting() {
    return (
        <Box sx={{ position: 'relative', backgroundColor: '#3F4B3B', overflow: 'hidden', height: '520px', boxShadow: 3, color: "white" }}>
            <Box component='img' src={PlaneBackground} alt="Home Background with a plane" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05 }} />
            <ToolBar />
            <Box sx={{ width: '420px', margin: 'auto', mt: 12}}>
                <Typography variant="h1" sx={{ fontSize: '44px', fontWeight: 'bold', textAlign: 'center'}}>Flight Prediction</Typography>
                <Typography sx={{ fontSize: '18px', textAlign: 'center', mt: 3 }}>An advanced machine learning model that predicts flight prices with an accuracy rate of 78.99%.</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 5}}>
                    <Button sx={{...normalButtonStyles, backgroundColor: '#202020', color: 'white', ...normalButtonHoverStyles}} color="inherit" component={Link} to="/flight">Get Started</Button>
                    <Button sx={{...normalButtonStyles, backgroundColor: 'white', color: 'black' , ...normalButtonHoverStyles}} color="inherit" component={Link} to="/about">About Us</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Greeting

