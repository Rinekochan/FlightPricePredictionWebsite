import React from 'react';
import Plot from 'react-plotly.js';
import { Box } from '@mui/material';

const RouteChart = ({ routeCounts }) => {
    // Extract route names and their respective frequencies for plotting
    const routeLabels = Object.keys(routeCounts);
    const routeValues = Object.values(routeCounts);

    return (
        <Box sx={{ width: '100%' }}>
            <Plot
                data={[
                    {
                        x: routeLabels,
                        y: routeValues,
                        type: 'bar',
                        marker: { color: 'orange' },
                    },
                ]}
                layout={{
                    title: 'Route Frequency',
                    xaxis: { title: 'Routes' },
                    yaxis: { title: 'Count' },
                }}
                config={{ responsive: true }} // Ensure the configuration is set for responsiveness
                style={{ width: '100%', height: '100%' }} // Ensures the Plotly component takes full width/height
            />
        </Box>
    );
};

export default RouteChart;
