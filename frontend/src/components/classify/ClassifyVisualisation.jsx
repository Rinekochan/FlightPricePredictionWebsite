import React from 'react'
import Plot from 'react-plotly.js';
import { Box, Typography } from '@mui/material';

function ClassifyVisualisation({ classifiedCategory, classifiedConfidence }) {
    // Prepare data for the bar chart
    const categories = Object.keys(classifiedConfidence);
    const confidenceScores = Object.values(classifiedConfidence);

    // Define color for classifiedCategory
    const getCategoryColor = () => {
        switch (classifiedCategory) {
            case 'Low':
                return 'green';
            case 'Medium':
                return 'orange';
            case 'High':
                return 'red';
            default:
                return 'black'; // Default color if category is unknown
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', m: "0 auto", my: 1 }}>
            <Typography variant="h5" component="h1" gutterBottom sx={{ my: 8, textAlign: 'center', fontWeight: 'bold', color: getCategoryColor() }}> Predicted Category: {classifiedCategory} </Typography>
            {
                classifiedCategory != "Unknown" ? // Only show the plot when the classification is done
                    <Plot
                        data={[
                            {
                                values: confidenceScores,
                                labels: categories,
                                type: 'pie',
                                textinfo: 'label+percent',
                                insidetextorientation: 'radial',
                                marker: {
                                    colors: ['green', 'orange', 'red'],
                                },
                            },
                        ]}
                        layout={{
                            title: 'Confidence Score Proportions by Category',
                            autosize: true,
                            responsive: true, // Make the plot responsive
                        }}
                        style={{ width: '100%', height: '100%' }} // Ensures the Plotly component takes full width/height
                    />
                    :
                    <></>
            }

        </Box>
    )
}

export default ClassifyVisualisation
