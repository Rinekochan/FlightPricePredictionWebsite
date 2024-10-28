import React from 'react'
import { Divider, Box } from '@mui/material';
import Footer from '../components/shared/Footer/Footer';
import Greeting from '../components/home/Greeting';
import Detail from '../components/home/Details';
import Contact from '../components/home/Contact';
import FeatureDisplay from '../components/home/FeatureDisplay';
import HomeProfileCarousel from '../components/home/HomeProfileCarousel';

function HomePage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Greeting />
            <Detail />
            {
                // Prem add your part here 
            }
            <FeatureDisplay />
            <Divider />
            <HomeProfileCarousel />
            <Divider />
            <Contact />
            <Footer />
        </Box>
    )
}

export default HomePage
