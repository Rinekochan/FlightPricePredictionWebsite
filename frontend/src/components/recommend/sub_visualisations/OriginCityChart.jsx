// OriginCityChart.js
import React from 'react';
import Plot from 'react-plotly.js';
import { Box, Typography } from '@mui/material';

const OriginCityChart = ({ originCityCounts }) => {
    const originCityLabels = Object.keys(originCityCounts);
    const originCityValues = Object.values(originCityCounts);

    return (
        <Box sx={{ width: '100%', mb: 4 }}>
            <Plot
                data={[
                    {
                        x: originCityLabels,
                        y: originCityValues,
                        type: 'bar',
                        marker: { color: 'blue' },
                    },
                ]}
                layout={{
                    title: 'Origin City Frequency',
                    xaxis: { title: 'Origin Cities' },
                    yaxis: { title: 'Count' },
                }}
                config={{ responsive: true }} // Ensure the configuration is set for responsiveness
                style={{ width: '100%', height: '100%' }} // Ensures the Plotly component takes full width/height
            />
        </Box>
    );
};

export default OriginCityChart;
