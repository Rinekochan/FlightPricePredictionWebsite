import React from 'react';
import NavBar from '../components/shared/NavBar/NavBar';
import Footer from '../components/shared/Footer/Footer';
import HowWeBegan from '../components/about/HowWeBeganSection';
import AboutProfileCarousel from '../components/about/AboutProfileCarousel';
import { Box, Typography, Divider } from '@mui/material';

function AboutPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <HowWeBegan />
            <Divider />
            <AboutProfileCarousel />
            <Footer />
        </Box >
    );
}

export default AboutPage;
