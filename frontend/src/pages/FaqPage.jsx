import React from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import {
    Box
} from '@mui/material';

function FaqPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            <Box sx={{my: 5}}>
                I'm FAQ Page
            </Box>
            <Footer />
        </Box>
    )
}

export default FaqPage
