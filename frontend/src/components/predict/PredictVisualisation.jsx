import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { Box } from '@mui/material';

function PredictVisualisation({ predictedPrice }) {
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


    // Map historical and predicted data to x and y arrays for Plotly
    const historicalX = historicalData.map(d => `${d.year} Q${d.quarter}`);
    const historicalY = historicalData.map(d => d.price);

    const predictedX = predictedPrice ? [`${predictedPrice.year} Q${predictedPrice.quarter}`] : [];
    const predictedY = predictedPrice ? [predictedPrice.price] : [];

    // Generate open, high, low, close values for the candlestick chart
    const candlestickOpen = [historicalY[0]]; // Set first open as the first price
    const candlestickClose = [];
    const candlestickHigh = [];
    const candlestickLow = [];

    // Loop through historical prices to create OHLC values
    for (let i = 0; i < historicalY.length; i++) {
        if (i === 0) {
            candlestickClose.push(historicalY[i]); // The first close is the first price
            candlestickHigh.push(historicalY[i]);
            candlestickLow.push(historicalY[i]);
        } else {
            candlestickOpen.push(historicalY[i - 1]); // Previous price as the current open
            candlestickClose.push(historicalY[i]); // Current price as the close
            candlestickHigh.push(Math.max(historicalY[i], historicalY[i - 1])); // Max of current and previous
            candlestickLow.push(Math.min(historicalY[i], historicalY[i - 1])); // Min of current and previous
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', m: "0 auto", my: 5 }}>
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
                        x: historicalX,
                        open: candlestickOpen,
                        high: candlestickHigh,
                        low: candlestickLow,
                        close: candlestickClose,
                        type: 'candlestick',
                        name: 'Candlestick Prices',
                        increasing: { line: { color: 'green' } },
                        decreasing: { line: { color: 'red' } },
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
                style={{ width: '100%', height: '100%' }} // Ensures the Plotly component takes full width/height
            />
        </Box>
    );
}

export default PredictVisualisation;
