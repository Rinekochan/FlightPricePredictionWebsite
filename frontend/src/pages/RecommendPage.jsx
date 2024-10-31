import React, {useState} from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import {Box, Grid2 as Grid} from '@mui/material';
import RecommendInputForm from '../components/recommend/RecommendInputForm';
import RecommendVisualisation from '../components/recommend/RecommendVisualisation';
import RecommendList from '../components/recommend/RecommendList';
import RecommendListVisualisation from '../components/recommend/RecommendListVisualisation';

function RecommendPage() {
    const [inputRecommendedPrice, setInputRecommendedPrice] = useState('');
    const [inputRecommendedDistance, setInputRecommendedDistance] = useState('');
    const [similarFlights, setSimilarFlights] = useState([]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            {/* This is the input component of RecommendPage */}
            <RecommendInputForm setSimilarFlights={setSimilarFlights} inputRecommendedPrice={inputRecommendedPrice} inputRecommendedDistance={inputRecommendedDistance} setInputRecommendedPrice={setInputRecommendedPrice} setInputRecommendedDistance={setInputRecommendedDistance}/>
            
            {/* This is the visualisation component of RecommendPage */}
            <Box sx={{ p: 3 }}>
                <RecommendVisualisation similarFlights={similarFlights} inputRecommendedPrice={inputRecommendedPrice} inputRecommendedDistance={inputRecommendedDistance}/>
            </Box>
            
            {/* This is the extravisualisation component of RecommendPage */}
            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item key={"List of Similar Flights"} size={{ xs: 12, sm: 6 }} sx={{ mx: 'auto', p: 3 }}>
                    <RecommendList similarFlights={similarFlights}/>
                </Grid>
                <Grid item key={"Bar Chart Visualisation"} size={{ xs: 12, sm: 6 }} sx={{ mx: 'auto', p: 3 }}>
                    <RecommendListVisualisation similarFlights={similarFlights}/>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}

export default RecommendPage
