import React from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import {
    Box
} from '@mui/material';

function PredictPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            <Box sx={{my: 5}}>
                I'm Prediction Page
            </Box>
            <Footer />
        </Box>
    )
}

export default PredictPage