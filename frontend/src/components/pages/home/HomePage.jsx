import React from 'react'
import { Divider, Box } from '@mui/material';
import Greeting from './Greeting';
import Contact from './Contact';
import Footer from '../../shared/Footer/Footer';
import FeatureDisplay from './FeatureDisplay';
import HomeProfileCarousel from './HomeProfileCarousel';

function HomePage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Greeting />
            {
            // Prem add your part here 
            }
            <FeatureDisplay />
            <Divider/>
            <HomeProfileCarousel />
            <Divider/>
            <Contact />
            <Footer />
        </Box>
    )
}

export default HomePage
