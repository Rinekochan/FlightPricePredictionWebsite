import React from 'react';
import Plot from 'react-plotly.js';

function PredictVisualisation({ historicalData, predictedPrice }) {
    const historicalX = historicalData.map(d => `${d.year} Q${d.quarter}`);
    const historicalY = historicalData.map(d => d.price);

    const predictedX = predictedPrice ? [`${predictedPrice.year} Q${predictedPrice.quarter}`] : [];
    const predictedY = predictedPrice ? [predictedPrice.price] : [];

    return (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
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
                }}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export default PredictVisualisation;
