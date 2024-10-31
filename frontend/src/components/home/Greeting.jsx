import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import ToolBar from '../shared/NavBar/ToolBar'
import PlaneBackground from '../../assets/PlaneBackground.jpg'
import { Link } from 'react-router-dom';
import { normalButtonStyles, normalButtonHoverStyles } from '../../styles/styles';

function Greeting() {
    return (
        <Box sx={{ position: 'relative', backgroundColor: '#3F4B3B', overflow: 'hidden', height: '520px', boxShadow: 3, color: "white" }}>
            {/* Background image for the greeting section */}
            <Box component='img' src={PlaneBackground} alt="Home Background with a plane" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05 }} />
            <ToolBar /> {/* Render the navigation bar */}

            {/* Main content box for the greeting message */}
            <Box sx={{ margin: 'auto', mt: 12}}>
                {/* Main title for the component */}
                <Typography variant="h1" sx={{ fontSize: '44px', fontWeight: 'bold', textAlign: 'center'}}>Flight Prediction</Typography>
                
                {/* Subtitle with a brief description */}
                <Typography sx={{ fontSize: '18px', textAlign: 'center', mt: 3, maxWidth: '500px', width: "80%", mx: "auto" }}>An advanced machine learning model that predicts flight prices with an accuracy rate of 78.99%.</Typography>
                
                {/* Button container for navigation buttons */}
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 5, mx: "auto", maxWidth: '500px', width: "80%"}}>
                    <Button sx={{...normalButtonStyles, backgroundColor: '#202020', color: 'white', ...normalButtonHoverStyles}} color="inherit" component={Link} to="/flight">Get Started</Button>
                    <Button sx={{...normalButtonStyles, backgroundColor: 'white', color: 'black' , ...normalButtonHoverStyles}} color="inherit" component={Link} to="/about">About Us</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Greeting

