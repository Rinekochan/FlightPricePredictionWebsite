import React from 'react';
import NavBar from '../components/shared/NavBar/NavBar';
import Footer from '../components/shared/Footer/Footer';
import AboutGroup from '../components/about/AboutGroup';
import AboutProfileCarousel from '../components/about/AboutProfileCarousel';
import { Box, Divider } from '@mui/material';

function AboutPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <AboutGroup />
            <Divider />
            <AboutProfileCarousel />
            <Footer />
        </Box >
    );
}

export default AboutPage;
