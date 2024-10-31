// DestinationCityChart.js
import React from 'react';
import Plot from 'react-plotly.js';
import { Box, Typography } from '@mui/material';

const DestinationCityChart = ({ destinationCityCounts }) => {
    const destinationCityLabels = Object.keys(destinationCityCounts);
    const destinationCityValues = Object.values(destinationCityCounts);

    return (
        <Box sx={{ width: '100%', mb: 4 }}>
            <Plot
                data={[
                    {
                        x: destinationCityLabels,
                        y: destinationCityValues,
                        type: 'bar',
                        marker: { color: 'green' },
                    },
                ]}
                layout={{
                    title: 'Destination City Frequency',
                    xaxis: { title: 'Destination Cities' },
                    yaxis: { title: 'Count' },
                }}
                config={{ responsive: true }} // Ensure the configuration is set for responsiveness
                style={{ width: '100%', height: '100%' }} // Ensures the Plotly component takes full width/height
            />
        </Box>
    );
};

export default DestinationCityChart;
