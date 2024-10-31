import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { Box, Typography } from '@mui/material';

function RecommendVisualisation({ similarFlights, inputRecommendedPrice, inputRecommendedDistance }) {
    // Prepare data for Plotly
    const fares = similarFlights.map(flight => flight.Fare);
    const miles = similarFlights.map(flight => flight.Miles);
    const originCities = similarFlights.map(flight => flight.OriginCity);
    const destinationCities = similarFlights.map(flight => flight.DestinationCity);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', m: "0 auto", my: 5}}>
            <Plot
                data={[
                    {
                        x: miles,
                        y: fares,
                        mode: 'markers',
                        type: 'scatter',
                        text: originCities.map((city, index) => `${city} to ${destinationCities[index]}`),
                        textposition: 'top center',
                        textfont: { size: 14 }, // Increase the font size for clarity
                        marker: { size: 12, color: 'blue' },
                        name: 'Similar Flights', 
                    },
                    {
                        x: [inputRecommendedDistance],
                        y: [inputRecommendedPrice],
                        mode: 'markers',
                        type: 'scatter',
                        marker: { size: 14, color: 'red' }, // Red point for the input
                        name: 'Input Point', 
                    },
                ]}
                layout={{
                    title: 'Similar Flights',
                    xaxis: { title: 'Miles' },
                    yaxis: { title: 'Fare ($)' },
                    showlegend: true
                }}
                style={{ width: '100%', height: '200%' }} // Ensures the Plotly component takes full width/height
            />
        </Box>
    );
};


export default RecommendVisualisation;
