import React from 'react'
import { Box, Button, Card, CardContent, Grid2 as Grid, Typography, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

function FeatureDisplay() {
    var features =
        [
            {
                title: "Prediction",
                description: "We will predict the flight prices within the next 20 years",
                link: "/predict"
            },
            {
                title: "Recommendation",
                description: "We will recommend to you the similar flights from the searched flight",
                link: "/recommend"
            },
            {
                title: "Classification",
                description: "We will classify the price if it's higher or lower than the trend",
                link: "/classify"
            }
        ]
        ;

    return (
        <Box sx={{ my: 6, mx: 'auto' }}>
            <Typography variant="h4" component='h2' gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                Features
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {features.map((card, index) => (
                    <Grid item key={index} size={{ xs: 12, sm: 6, md: 4 }} sx={{ mx: 'auto', p: 4 }}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body1" component="p" sx={{width: "100%"}}>
                                    {card.description}
                                </Typography>
                                <LinearProgress sx={{ mt: 2 }} color="success" value={card * 33} />
                            </CardContent>
                            <Box sx={{ p: 2, mt: -1 }}>
                                <Button size="small" variant="contained" component={Link} to={card.link} sx={{ backgroundColor: '#333333', color: 'white', fontWeight: 'bold', textTransform: 'none', '&:hover': { backgroundColor: '#222222' } }}>
                                    LEARN MORE
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default FeatureDisplay
