import React from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import {
    Box
} from '@mui/material';

function ClassifyPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            <Box sx={{my: 5}}>
                I'm ClassifyPage Page
            </Box>
            <Footer />
        </Box>
    )
}

export default ClassifyPage
