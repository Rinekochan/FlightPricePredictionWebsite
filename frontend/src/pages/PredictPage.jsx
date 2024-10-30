import React, {useState, useEffect} from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/Footer/Footer';
import axios from 'axios';
import {Box} from '@mui/material';
import PredictInputForm from '../components/predict/PredictInputForm';
import PredictVisualisation from '../components/predict/PredictVisualisation';

function PredictPage() {
    const [predictedPrice, setPredictedPrice] = useState(null);
    const [dataset, setDataset] = useState([]); // Store historical data

    useEffect(() => {
        const fetchDataset = async () => {
            try {
                // const response = await axios.get('http://localhost:8000/datasets');
                console.log(response.data); // Log the response data to inspect its structure
                
                const processedData = response.data.data.map(item => ({
                    year: item.Year,
                    quarter: item.Quarter,
                    price: item.Fare
                }));
                setDataset(processedData);
            } catch (error) {
                console.error("Error fetching dataset:", error);
            }
        };
        fetchDataset();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <NavBar />
            <PredictInputForm setPredictedPrice={setPredictedPrice}/>
            <PredictVisualisation historicalData={dataset} predictedPrice={predictedPrice}/>
            <Footer />
        </Box>
    )
}

export default PredictPage
