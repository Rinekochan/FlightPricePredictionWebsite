import React from 'react'
import { Box } from '@mui/material';
import OriginCityChart from './sub_visualisations/OriginCityChart';
import DestinationCityChart from './sub_visualisations/DestinationCityChart';
import RouteChart from './sub_visualisations/RouteChart';

function RecommendListVisualisation({similarFlights}) {
    if (!similarFlights || similarFlights.length === 0) return null; // Return null if there are no flights

    const originCities = similarFlights.map(flight => flight.OriginCity);
    const destinationCities = similarFlights.map(flight => flight.DestinationCity);

    // Prepare data for counting frequencies
    const countFrequencies = (array) => {
        return array.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});
    };

    const originCityCounts = countFrequencies(originCities);
    const destinationCityCounts = countFrequencies(destinationCities);

    const routeCounts = {};
    originCities.forEach((origin, index) => {
        const route = `${origin} to ${destinationCities[index]}`;
        routeCounts[route] = (routeCounts[route] || 0) + 1;
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <OriginCityChart originCityCounts={originCityCounts} />
            <DestinationCityChart destinationCityCounts={destinationCityCounts} />
            <RouteChart routeCounts={routeCounts} />
        </Box>
    )
}

export default RecommendListVisualisation
