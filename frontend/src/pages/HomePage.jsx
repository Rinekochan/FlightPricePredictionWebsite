import React from 'react'
import { Divider, Box } from '@mui/material';
import Footer from '../components/shared/Footer/Footer';
import Greeting from '../components/home/Greeting';
import Contact from '../components/home/Contact';
import FeatureDisplay from '../components/home/FeatureDisplay';
import HomeProfileCarousel from '../components/home/HomeProfileCarousel';
import Benefit from '../components/home/Benefit';

function HomePage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Greeting />
            <Benefit />
            <Divider />
            <HomeProfileCarousel />
            <Divider />
            <FeatureDisplay />
            <Divider />
            <Contact />
            <Footer />
        </Box>
    )
}

export default HomePage
