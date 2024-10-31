import React from 'react'
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

function RecommendList({similarFlights}) {
    if (!similarFlights || similarFlights.length === 0) return null; // Return null if there are no flights

    return (
        <Paper elevation={3} sx={{ p: 5, margin: "0 auto" }}>
            <Typography variant="h5" component="h2" gutterBottom sx = {{fontWeight: "bold"}}>
                Similar Flights List
            </Typography>
            <List>
                {similarFlights.map((flight, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText
                                primary={`${flight.OriginCity} to ${flight.DestinationCity}`}
                                secondary={`Fare: $${flight.Fare} | Miles: ${flight.Miles}`}
                            />
                        </ListItem>
                        {index < similarFlights.length - 1 && <Divider />} { /* Divider between list items except after the last item */ }
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}

export default RecommendList
