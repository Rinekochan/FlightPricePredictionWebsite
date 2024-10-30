import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { Box } from '@mui/material';

function PredictVisualisation({predictedPrice }) {
    const [historicalData, setHistoricalData] = useState([]); // Store historical data

    useEffect(() => {
        const fetchDataset = async () => {
            try {
                const response = await axios.get('http://localhost:8000/datasets');
                console.log(response.data); // Log the response data to inspect its structure
                
                const processedData = response.data.data.map(item => ({
                    year: item.Year,
                    quarter: item.Quarter,
                    price: item.Fare
                }));
                setHistoricalData(processedData);
            } catch (error) {
                console.error("Error fetching dataset:", error);
            }
        };
        fetchDataset();
    }, []);

    const historicalX = historicalData.map(d => `${d.year} Q${d.quarter}`);
    const historicalY = historicalData.map(d => d.price);

    const predictedX = predictedPrice ? [`${predictedPrice.year} Q${predictedPrice.quarter}`] : [];
    const predictedY = predictedPrice ? [predictedPrice.price] : [];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', m: "0 auto", my: 5}}>
            <Plot
                data={[
                    {
                        x: historicalX,
                        y: historicalY,
                        mode: 'lines+markers',
                        type: 'scatter',
                        name: 'Historical Prices',
                        line: { color: 'steelblue' },
                    },
                    {
                        x: predictedX,
                        y: predictedY,
                        mode: 'markers',
                        type: 'scatter',
                        name: 'Predicted Price',
                        marker: { color: 'red', size: 10 },
                    },
                ]}
                layout={{
                    title: 'Flight Price Prediction',
                    xaxis: { title: 'Year and Quarter' },
                    yaxis: { title: 'Price' },
                    autosize: true,
                    responsive: true, // Make the plot responsive
                }}
                config={{ responsive: true }} // Ensure the configuration is set for responsiveness
                style={{ width: '100%', height: '100%' }} // Ensures the Plotly component takes full width/height
            />
        </Box>
    );
}

export default PredictVisualisation;
