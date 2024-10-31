import React from 'react';
import Plot from 'react-plotly.js';
import { Box } from '@mui/material';

function RecommendVisualisation({ similarFlights, inputRecommendedPrice, inputRecommendedDistance }) {
    // Prepare data arrays for plotting on the chart using data from similarFlights
    const fares = similarFlights.map(flight => flight.Fare); // Array of fares for each flight
    const miles = similarFlights.map(flight => flight.Miles); // Array of distances for each flight
    const originCities = similarFlights.map(flight => flight.OriginCity); // Array of origin cities
    const destinationCities = similarFlights.map(flight => flight.DestinationCity); // Array of destination cities

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
