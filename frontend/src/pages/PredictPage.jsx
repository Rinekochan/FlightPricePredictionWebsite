import React, {useState} from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import {Box} from '@mui/material';
import PredictInputForm from '../components/predict/PredictInputForm';
import PredictVisualisation from '../components/predict/PredictVisualisation';

function PredictPage() {
    const [predictedPrice, setPredictedPrice] = useState(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            <PredictInputForm setPredictedPrice={setPredictedPrice}/>
            <Box sx={{ p: 3 }}>
                <PredictVisualisation predictedPrice={predictedPrice}/>
            </Box>
            <Footer />
        </Box>
    )
}

export default PredictPage
